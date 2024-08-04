const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const saoLuis = await prisma.destino.create({
    data: {
      nome: 'São Luís',
      descricao: 'A capital do Maranhão, famosa por seu centro histórico.',
      imagem: 'https://www.viagensecaminhos.com/wp-content/uploads/2016/11/vista-aerea-centro-historico-sao-luis.jpg',
      localizacao: 'São Luís, MA',
      latitude: -2.5307,
      longitude: -44.3068,
      atrativos: {
        create: [
          {
            nome: 'Centro Histórico',
            tipo: 'Monumento',
            descricao: 'Patrimônio Mundial da UNESCO.',
            dicas: 'Visite durante o dia para aproveitar melhor.',
          },
          {
            nome: 'Praia do Calhau',
            tipo: 'Praia',
            descricao: 'Uma das praias mais populares de São Luís.',
            dicas: 'Ótima para nadar e praticar esportes aquáticos.',
          },
        ],
      },
    },
  });

  const lencois = await prisma.destino.create({
    data: {
      nome: 'Lençóis Maranhenses',
      descricao: 'Um dos parques nacionais mais incríveis do Brasil.',
      imagem: 'https://revista.bancorbras.com.br/wp-content/uploads/2023/12/Dunas-de-areias_Maranhao-scaled.jpg',
      localizacao: 'Barreirinhas, MA',
      latitude: -2.6854,
      longitude: -43.8589,
      atrativos: {
        create: [
          {
            nome: 'Lagoa Azul',
            tipo: 'Lagoa',
            descricao: 'Uma das lagoas mais bonitas do parque.',
            dicas: 'Visite na temporada de cheia para ver a lagoa cheia.',
          },
          {
            nome: 'Lagoa Bonita',
            tipo: 'Lagoa',
            descricao: 'Outro ponto turístico popular nos Lençóis Maranhenses.',
            dicas: 'Ótima para nadar e tirar fotos.',
          },
        ],
      },
    },
  });

  const alcantara = await prisma.destino.create({
    data: {
      nome: 'Alcântara',
      descricao: 'Cidade histórica com ruínas coloniais.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Alc%C3%A2ntara_-_01.jpg',
      localizacao: 'Alcântara, MA',
      latitude: -2.4082,
      longitude: -44.4064,
      atrativos: {
        create: [
          {
            nome: 'Ruínas de Alcântara',
            tipo: 'Monumento',
            descricao: 'Ruínas de construções coloniais.',
            dicas: 'Visite com um guia local para aprender mais sobre a história.',
          },
          {
            nome: 'Museu Casa Histórica',
            tipo: 'Museu',
            descricao: 'Museu que exibe artefatos históricos.',
            dicas: 'Visite durante a semana para evitar multidões.',
          },
        ],
      },
    },
  });

  const raposa = await prisma.destino.create({
    data: {
      nome: 'Raposa',
      descricao: 'Conhecida por suas belas praias e artesanato local.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Raposa-maranhao.jpg',
      localizacao: 'Raposa, MA',
      latitude: -2.4259,
      longitude: -44.0971,
      atrativos: {
        create: [
          {
            nome: 'Praia de Carimã',
            tipo: 'Praia',
            descricao: 'Praia tranquila, ideal para relaxar.',
            dicas: 'Visite durante a maré baixa.',
          },
          {
            nome: 'Artesanato de Raposa',
            tipo: 'Mercado',
            descricao: 'Mercado de artesanato local.',
            dicas: 'Compre artesanato local para apoiar os artesãos.',
          },
        ],
      },
    },
  });

  const carolina = await prisma.destino.create({
    data: {
      nome: 'Carolina',
      descricao: 'Porta de entrada para o Parque Nacional da Chapada das Mesas.',
      imagem: 'https://www.penaestrada.blog.br/wp-content/uploads/2020/08/chapada-das-mesas-95.jpg',
      localizacao: 'Carolina, MA',
      latitude: -7.3356,
      longitude: -47.4634,
      atrativos: {
        create: [
          {
            nome: 'Cachoeira do Itapecuru',
            tipo: 'Cachoeira',
            descricao: 'Uma bela cachoeira com piscina natural.',
            dicas: 'Leve roupa de banho para aproveitar a piscina natural.',
          },
          {
            nome: 'Morro do Chapéu',
            tipo: 'Montanha',
            descricao: 'Uma montanha com uma vista espetacular.',
            dicas: 'Suba ao amanhecer para ver o nascer do sol.',
          },
        ],
      },
    },
  });

  const timon = await prisma.destino.create({
    data: {
      nome: 'Timon',
      descricao: 'Cidade com rica cultura e belezas naturais.',
      imagem: 'https://www.noticiasdetimon.com.br/wp-content/uploads/2023/07/O-que-fazer-em-Timon-Maranhao.jpg',
      localizacao: 'Timon, MA',
      latitude: -5.0972,
      longitude: -42.8322,
      atrativos: {
        create: [
          {
            nome: 'Rio Parnaíba',
            tipo: 'Rio',
            descricao: 'Ideal para passeios de barco e pesca.',
            dicas: 'Visite no pôr do sol para uma vista incrível.',
          },
          {
            nome: 'Parque Ambiental',
            tipo: 'Parque',
            descricao: 'Área verde para atividades ao ar livre.',
            dicas: 'Ótimo para piqueniques e caminhadas.',
          },
        ],
      },
    },
  });


  const caxias = await prisma.destino.create({
    data: {
      nome: 'Caxias',
      descricao: 'Cidade conhecida por suas festas tradicionais e cultura rica.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Caxias_3.JPG/1200px-Caxias_3.JPG',
      localizacao: 'Caxias, MA',
      latitude: -4.8582,
      longitude: -43.3567,
      atrativos: {
        create: [
          {
            nome: 'Museu da Balaiada',
            tipo: 'Museu',
            descricao: 'Museu que conta a história da revolta da Balaiada.',
            dicas: 'Ótimo para aprender sobre a história local.',
          },
          {
            nome: 'Balneário Veneza',
            tipo: 'Balneário',
            descricao: 'Um dos pontos turísticos mais visitados da cidade.',
            dicas: 'Leve roupa de banho e aproveite as piscinas naturais.',
          },
        ],
      },
    },
  });

  console.log({ saoLuis, lencois, alcantara, raposa, carolina, timon, caxias });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
