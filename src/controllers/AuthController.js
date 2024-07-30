const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

class AuthController {
    constructor() {
        this.prisma = new PrismaClient();
        this.SECRET_KEY = 'SECRET_KEY';
    }

    async register(req, res) {
        const { name, email, password } = req.body;

        try {
            const existingUser = await this.prisma.user.findUnique({
                where: { email }
            });

            if (existingUser) {
                return res.status(400).json({ error: 'Email já cadastrado' });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await this.prisma.user.create({
                data: { name, email, password: hashedPassword }
            });
            res.status(201).json({ message: 'Usuário registrado com sucesso' });
        } catch (error) {
            res.status(400).json({ error: 'Erro ao registrar usuário' });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        try {
            const user = await this.prisma.user.findUnique({ where: { email } });

            if (!user) {
                return res.status(400).json({ error: 'Credenciais inválidas' });
            }

            const validPassword = await bcrypt.compare(password, user.password);

            if (!validPassword) {
                return res.status(400).json({ error: 'Credenciais inválidas' });
            }

            const token = jwt.sign({ userId: user.id }, this.SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao fazer login' });
        }
    }
}

module.exports = AuthController;
