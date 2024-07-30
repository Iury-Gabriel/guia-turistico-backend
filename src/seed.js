import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const saoLuis = await prisma.destino.create({
    data: {
      nome: 'São Luís',
      descricao: 'A capital do Maranhão, famosa por seu centro histórico.',
      imagem: 'url_da_imagem',
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
      imagem: 'url_da_imagem',
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
      imagem: 'url_da_imagem',
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
      imagem: 'url_da_imagem',
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
      imagem: 'url_da_imagem',
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

  console.log({ saoLuis, lencois, alcantara, raposa, carolina });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
