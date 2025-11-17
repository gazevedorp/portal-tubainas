export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
  views: string;
  date: string;
}

export interface Tasting {
  id: number;
  title: string;
  brand: string;
  image: string;
  rating: number;
  date: string;
  excerpt: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Notícias', slug: 'noticias' },
  { id: '2', name: 'Tubaínapedia', slug: 'tubainapedia' },
  { id: '3', name: 'Youtubaína', slug: 'youtubaina' },
  { id: '4', name: 'Empresas', slug: 'empresas' },
  { id: '5', name: 'Quem Somos', slug: 'quem-somos' },
  { id: '6', name: 'Degustações', slug: 'degustacoes' },
  { id: '7', name: 'Contato', slug: 'contato' },
];

export const featuredArticle: Article = {
  id: 1,
  title: 'Guaraná Jesus Completa 100 Anos: A História do Refrigerante Mais Amado do Maranhão',
  excerpt: 'O icônico refrigerante rosa, criado em 1920, celebra um século de tradição e sabor único. Conheça a trajetória da bebida que se tornou patrimônio cultural maranhense e conquistou fãs por todo o Brasil.',
  category: 'História',
  image: '/tubaina.png',
  author: 'Mariana Tavares',
  date: '14 de Outubro, 2025',
  readTime: '8 min',
};

export const articles: Article[] = [
  {
    id: 2,
    title: 'Cotuba Lança Nova Linha de Sabores Tropicais',
    excerpt: 'A tradicional marca paranaense inova com três novos sabores inspirados em frutas brasileiras: maracujá, açaí e caju. Lançamento acontece em todas as regiões do país.',
    category: 'Marcas',
    image: '/tubaina.png',
    author: 'Roberto Silva',
    date: '13 de Outubro, 2025',
    readTime: '5 min',
  },
  {
    id: 3,
    title: 'O Ressurgimento das Tubaínas Regionais: Tradição que Volta às Prateleiras',
    excerpt: 'Pequenos produtores resgatam receitas antigas e conquistam novo público em busca de autenticidade e sabores nostálgicos. Movimento cresce 45% em 2025.',
    category: 'Mercado',
    image: '/tubaina.png',
    author: 'Ana Paula Costa',
    date: '12 de Outubro, 2025',
    readTime: '6 min',
  },
  {
    id: 4,
    title: 'Degustação: Comparamos 10 Marcas de Guaraná Artesanal',
    excerpt: 'Nossa equipe testou as principais marcas de guaraná regional disponíveis no mercado. Veja qual levou o prêmio de melhor sabor, aroma e fidelidade à tradição.',
    category: 'Degustações',
    image: '/tubaina.png',
    author: 'Lucas Mendonça',
    date: '11 de Outubro, 2025',
    readTime: '12 min',
  },
  {
    id: 5,
    title: 'Zipcola: A História da Tubaína que Marcou os Anos 80',
    excerpt: 'Conheça a trajetória da marca que conquistou o Brasil com suas embalagens coloridas e sabores marcantes, tornando-se símbolo de uma geração.',
    category: 'História',
    image: '/tubaina.png',
    author: 'Pedro Augusto',
    date: '10 de Outubro, 2025',
    readTime: '10 min',
  },
  {
    id: 6,
    title: 'Fábrica Biri Beverages Anuncia Expansão para Três Novos Estados',
    excerpt: 'Após 25 anos de sucesso no mercado regional, a empresa investe R$ 15 milhões em nova planta industrial e distribuição nacional.',
    category: 'Mercado',
    image: '/tubaina.png',
    author: 'Juliana Ferreira',
    date: '9 de Outubro, 2025',
    readTime: '5 min',
  },
  {
    id: 7,
    title: 'Youtubaina: Os Melhores Canais Sobre Refrigerantes do Brasil',
    excerpt: 'Descubra os criadores de conteúdo que estão revolucionando o universo das tubaínas com reviews, histórias e curiosidades sobre as bebidas regionais.',
    category: 'Youtubaina',
    image: '/tubaina.png',
    author: 'Thiago Cardoso',
    date: '8 de Outubro, 2025',
    readTime: '7 min',
  },
  {
    id: 8,
    title: 'Tubaína com Açúcar de Cana: A Tendência Natural que Conquista Consumidores',
    excerpt: 'Marcas apostam em ingredientes naturais e redução de químicos. Movimento cresce com a busca por alimentação mais saudável e sustentável.',
    category: 'Mercado',
    image: '/tubaina.png',
    author: 'Camila Rodrigues',
    date: '7 de Outubro, 2025',
    readTime: '6 min',
  },
  {
    id: 9,
    title: 'Festival Nacional da Tubaína Acontece em São Paulo com 50 Marcas',
    excerpt: 'Evento reúne produtores de todo o país para celebrar a cultura dos refrigerantes regionais. Ingressos já estão à venda.',
    category: 'Notícias',
    image: '/tubaina.png',
    author: 'Redação Portal',
    date: '6 de Outubro, 2025',
    readTime: '4 min',
  },
  {
    id: 10,
    title: 'Esporte e Tubaína: A Parceria que Movimenta o Futebol Amador',
    excerpt: 'Marcas regionais apostam em patrocínio de times locais e criam conexão emocional com torcedores. Estratégia fortalece marca e comunidade.',
    category: 'Esportes',
    image: '/tubaina.png',
    author: 'Fernando Santos',
    date: '5 de Outubro, 2025',
    readTime: '5 min',
  },
  {
    id: 11,
    title: 'Entrevista: CEO da Biri Fala Sobre Crescimento e Sustentabilidade',
    excerpt: 'Em conversa exclusiva, executivo revela planos de expansão, investimento em energia limpa e compromisso com produção responsável.',
    category: 'Entrevistas',
    image: '/tubaina.png',
    author: 'Larissa Mendes',
    date: '4 de Outubro, 2025',
    readTime: '15 min',
  },
  {
    id: 12,
    title: 'Cultura Pop: Tubaínas Aparecem em Séries e Filmes Brasileiros',
    excerpt: 'O refrigerante regional ganha espaço na cultura pop nacional, sendo destaque em produções audiovisuais e virando símbolo de brasilidade.',
    category: 'Cultura',
    image: '/tubaina.png',
    author: 'Beatriz Almeida',
    date: '3 de Outubro, 2025',
    readTime: '6 min',
  },
];

export const videos: Video[] = [
  {
    id: 1,
    title: 'Como é Feita uma Tubaína Artesanal? Tour pela Fábrica',
    thumbnail: '/tubaina.png',
    duration: '12:45',
    category: 'Produção',
    views: '125k',
    date: '10 de Outubro, 2025',
  },
  {
    id: 2,
    title: 'Degustação às Cegas: 5 Marcas de Guaraná Regional',
    thumbnail: '/tubaina.png',
    duration: '18:30',
    category: 'Degustações',
    views: '89k',
    date: '8 de Outubro, 2025',
  },
  {
    id: 3,
    title: 'A História das Tubaínas no Brasil - Documentário',
    thumbnail: '/tubaina.png',
    duration: '25:15',
    category: 'História',
    views: '234k',
    date: '5 de Outubro, 2025',
  },
  {
    id: 4,
    title: 'Entrevista: Mestre Cervejeiro Fala Sobre Tubaínas',
    thumbnail: '/tubaina.png',
    duration: '22:10',
    category: 'Entrevistas',
    views: '67k',
    date: '2 de Outubro, 2025',
  },
];

export const tastings: Tasting[] = [
  {
    id: 1,
    title: 'Guaraná Jesus - Edição Especial 100 Anos',
    brand: 'Guaraná Jesus',
    image: '/tubaina.png',
    rating: 4.8,
    date: '12 de Outubro, 2025',
    excerpt: 'Sabor autêntico, cor vibrante e história centenária. Uma experiência única.',
  },
  {
    id: 2,
    title: 'Cotuba Maracujá - Linha Tropical',
    brand: 'Cotuba',
    image: '/tubaina.png',
    rating: 4.5,
    date: '9 de Outubro, 2025',
    excerpt: 'Acidez equilibrada e aroma tropical marcante. Surpreendeu positivamente.',
  },
  {
    id: 3,
    title: 'Biri Cola Original',
    brand: 'Biri Beverages',
    image: '/tubaina.png',
    rating: 4.6,
    date: '6 de Outubro, 2025',
    excerpt: 'Receita clássica com ingredientes naturais. Sabor nostálgico impecável.',
  },
  {
    id: 4,
    title: 'Mineirinho Laranja Artesanal',
    brand: 'Mineirinho',
    image: '/tubaina.png',
    rating: 4.7,
    date: '3 de Outubro, 2025',
    excerpt: 'Sabor de laranja natural e gás na medida. Produção artesanal de qualidade.',
  },
];
