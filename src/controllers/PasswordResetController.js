const mailjet = require('node-mailjet').apiConnect('c2833d3e25c006a1aa3ea1f33373b6da', '01632397ec2c4a5a5c4572b71d883890');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

class PasswordResetController {
  constructor() {
    this.prisma = new PrismaClient();
  }

  // Rota para solicitar redefinição de senha
  async requestPasswordReset(req, res) {
    const { email } = req.body;
    console.log(email);

    try {
      // Verificar se o usuário existe
      const user = await this.prisma.user.findUnique({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      // Gerar código de reset
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      console.log(code);

      // Atualizar usuário com o código e expiração
      await this.prisma.user.update({
        where: { email },
        data: {
          resetToken: code,
          tokenExpiry: new Date(Date.now() + 3600000) // Token válido por 1 hora
        }
      });

      // Enviar e-mail com o código de redefinição
      const resetLink = `https://guia-turistico-frontend.vercel.app/reset-password/${code}`;
      console.log(resetLink);

      const mailOptions = {
        Messages: [
          {
            From: {
              Email: 'support@icodesystems.online', // Substitua pelo seu e-mail verificado no Mailjet
              Name: 'Iury Codesystems'
            },
            To: [
              {
                Email: email
              }
            ],
            Subject: 'Código de Redefinição de Senha',
            TextPart: `Você solicitou uma redefinição de senha. Use o seguinte código para redefinir sua senha: ${code}. O código expira em 1 hora. Clique no link para redefinir sua senha: ${resetLink}`,
            HTMLPart: `<p>Você solicitou uma redefinição de senha. Use o seguinte código para redefinir sua senha: <strong>${code}</strong>. O código expira em 1 hora. Clique no link para redefinir sua senha: <a href="${resetLink}">${resetLink}</a></p>`
          }
        ]
      };

      console.log('Mandando email');
      await mailjet.post('send', { version: 'v3.1' }).request(mailOptions);
      console.log('E-mail enviado com sucesso');

      res.status(200).json({ message: 'Instruções de redefinição de senha enviadas para o e-mail.' });
    } catch (error) {
      console.error('Erro ao solicitar redefinição de senha:', error);
      res.status(500).json({ message: 'Erro ao solicitar redefinição de senha' });
    }
  }

  // Rota para redefinir a senha
  async resetPassword(req, res) {
    const { code } = req.params;
    const { password } = req.body;

    try {
      // Verificar se o código é válido
      const user = await this.prisma.user.findFirst({
        where: {
          resetToken: code,
          tokenExpiry: { gt: new Date() }
        }
      });

      if (!user) {
        return res.status(400).json({ message: 'Código inválido ou expirado' });
      }

      // Atualizar senha e limpar tokens
      const hashedPassword = await bcrypt.hash(password, 10);

      await this.prisma.user.update({
        where: { email: user.email },
        data: {
          password: hashedPassword,
          resetToken: null,
          tokenExpiry: null
        }
      });

      res.status(200).json({ message: 'Senha redefinida com sucesso!' });
    } catch (error) {
      console.error('Erro ao redefinir a senha:', error);
      res.status(500).json({ message: 'Erro ao redefinir a senha' });
    }
  }
}

module.exports = PasswordResetController;
