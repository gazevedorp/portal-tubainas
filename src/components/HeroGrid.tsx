import { useState, useEffect } from 'react';
import { articles } from '../data/mockData';
import CommercialBanner from './CommercialBanner';

export default function HeroGrid() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Notícias para o carrossel (primeiras 5)
  const carouselArticles = articles.slice(0, 5);

  // Notícias secundárias (próximas 4)
  const secondaryArticles = articles.slice(5, 9);

  // Notícias laterais (próximas 6)
  const sidebarArticles = articles.slice(9, 15);

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselArticles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselArticles.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselArticles.length) % carouselArticles.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-6 md:py-8 bg-gradient-to-b from-neutral-light/30 to-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_380px] gap-8 lg:gap-6 xl:gap-8 max-w-[1400px] mx-auto">
          {/* Coluna Principal Esquerda */}
          <div className="flex flex-col gap-6">
            {/* Banner Publicitário Topo */}
            <CommercialBanner type="inline" compact />

            {/* Carrossel de Notícias em Destaque - Design Limpo */}
            <div className="relative bg-neutral-dark rounded-2xl overflow-hidden shadow-2xl group">
              {/* Botões de navegação - aparecem no hover */}
              <button
                className="absolute top-1/2 -translate-y-1/2 left-3 md:left-4 z-20 bg-white/95 text-neutral-dark w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-white hover:scale-110 opacity-0 group-hover:opacity-100"
                onClick={prevSlide}
                aria-label="Anterior"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="relative w-full overflow-hidden">
                {carouselArticles.map((article, index) => (
                  <a
                    key={article.id}
                    href={`#article-${article.id}`}
                    className={`block no-underline text-inherit ${
                      index === currentSlide
                        ? 'relative opacity-100 pointer-events-auto'
                        : 'absolute top-0 left-0 w-full opacity-0 pointer-events-none'
                    } transition-opacity duration-700`}
                  >
                    {/* Imagem com overlay suave */}
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 loaded"
                      />
                      {/* Gradient overlay mais suave */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                      {/* Badge de categoria minimalista */}
                      <span className="absolute top-4 md:top-6 left-4 md:left-6 bg-primary text-white px-4 py-1.5 rounded-lg text-xs md:text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>

                    {/* Conteúdo posicionado sobre a imagem */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 lg:p-10">
                      <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight drop-shadow-2xl">
                        {article.title}
                      </h2>
                      <p className="hidden md:block text-base lg:text-lg text-white/95 leading-relaxed mb-4 line-clamp-2 drop-shadow-lg max-w-3xl">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-white/90 drop-shadow-md">
                        <span className="font-medium">{article.author}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <button
                className="absolute top-1/2 -translate-y-1/2 right-3 md:right-4 z-20 bg-white/95 text-neutral-dark w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-white hover:scale-110 opacity-0 group-hover:opacity-100"
                onClick={nextSlide}
                aria-label="Próximo"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Indicadores redesenhados - mais discretos */}
              <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex gap-2 z-10">
                {carouselArticles.map((_, index) => (
                  <button
                    key={index}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white w-8 h-2'
                        : 'bg-white/40 w-2 h-2 hover:bg-white/70'
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Grid de 4 notícias secundárias - Layout limpo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {secondaryArticles.map((article) => (
                <a
                  key={article.id}
                  href={`#article-${article.id}`}
                  className="block relative rounded-xl overflow-hidden shadow-md no-underline text-inherit transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group bg-white"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 loaded"
                    />
                    {/* Badge minimalista */}
                    <span className="absolute top-3 left-3 bg-primary/95 text-white px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>

                  {/* Conteúdo abaixo da imagem */}
                  <div className="p-4">
                    <h3 className="text-base md:text-lg font-bold text-neutral-dark mb-2 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-neutral">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Sidebar Direita - Simplificada */}
          <aside className="flex flex-col gap-6 lg:order-2">
            {/* Mais Lidas */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary-dark px-5 py-3">
                <h3 className="text-lg font-bold text-white m-0 uppercase tracking-wide">Mais Lidas</h3>
              </div>

              <div className="divide-y divide-neutral-light/50">
                {sidebarArticles.slice(0, 5).map((article, index) => (
                  <a
                    key={article.id}
                    href={`#article-${article.id}`}
                    className="flex gap-3 p-4 no-underline text-inherit transition-all duration-200 hover:bg-neutral-light/50 group"
                  >
                    <span className="flex items-center justify-center w-7 h-7 bg-primary text-white rounded-lg font-bold text-sm shrink-0">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-neutral-dark mb-1 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-neutral/70">
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 loaded"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Banner Sidebar */}
            <CommercialBanner type="sidebar" compact />
          </aside>
        </div>
      </div>
    </section>
  );
}
