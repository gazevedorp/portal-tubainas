import { useState, useEffect } from 'react';
import { articles } from '../data/mockData';

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
    <section className="py-8 md:py-8 bg-gradient-to-b from-neutral-light to-white border-b-2 border-neutral-light">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_380px] gap-8 lg:gap-6 xl:gap-8 max-w-[1400px] mx-auto">
          {/* Coluna Principal Esquerda */}
          <div className="flex flex-col gap-6">
            {/* Banner Publicitário Topo da Coluna */}
            <div className="relative w-full bg-gradient-to-br from-primary via-secondary to-accent rounded-lg overflow-hidden shadow-lg min-h-[150px] flex items-center justify-center">
              <span className="text-white px-3 py-1 text-2xl font-bold uppercase drop-shadow-lg">Publicidade</span>
            </div>

            {/* Carrossel de Notícias em Destaque */}
            <div className="relative bg-white rounded-xl overflow-hidden shadow-xl">
              <button
                className="absolute top-1/2 -translate-y-1/2 left-4 md:left-4 z-10 bg-secondary/90 text-white w-[38px] h-[38px] md:w-[45px] md:h-[45px] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-secondary-dark hover:scale-110"
                onClick={prevSlide}
                aria-label="Anterior"
              >
                <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                    } transition-opacity duration-600`}
                  >
                    <div className="relative w-full aspect-video overflow-hidden group">
                      <img
                        src={article.image}
                        alt={article.title}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 loaded"
                      />
                      <span className="absolute top-4 left-4 bg-gradient-to-br from-primary to-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                        {article.category}
                      </span>
                    </div>
                    <div className="p-6 md:p-8">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-dark mb-4 leading-tight font-serif">
                        {article.title}
                      </h2>
                      <p className="text-base md:text-lg text-neutral leading-relaxed mb-5 line-clamp-2 md:line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-sm md:text-[0.9rem] text-neutral">
                        <span>{article.author}</span>
                        <span className="text-secondary">•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <button
                className="absolute top-1/2 -translate-y-1/2 right-4 md:right-4 z-10 bg-secondary/90 text-white w-[38px] h-[38px] md:w-[45px] md:h-[45px] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-secondary-dark hover:scale-110"
                onClick={nextSlide}
                aria-label="Próximo"
              >
                <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="flex justify-center gap-3 py-4 absolute bottom-0 left-0 right-0 z-[5]">
                {carouselArticles.map((_, index) => (
                  <button
                    key={index}
                    className={`rounded-full border-2 transition-all duration-300 p-0 ${
                      index === currentSlide
                        ? 'bg-primary border-primary w-3 h-3 shadow-lg shadow-primary/50'
                        : 'bg-white/50 border-neutral-light/80 w-2.5 h-2.5 hover:bg-primary/50 hover:border-primary/50'
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Grid de 4 notícias secundárias */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {secondaryArticles.map((article) => (
                <a
                  key={article.id}
                  href={`#article-${article.id}`}
                  className="block relative rounded-lg overflow-hidden shadow-lg no-underline text-inherit transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/20 group aspect-[4/3]"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 loaded"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                  {/* Category badge */}
                  <span className="absolute top-3 left-3 bg-accent/95 text-white px-3.5 py-1.5 rounded-2xl text-xs font-semibold uppercase tracking-wide shadow-md z-10">
                    {article.category}
                  </span>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-10">
                    <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug line-clamp-2 drop-shadow-lg">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Sidebar Direita */}
          <aside className="flex flex-col gap-6 lg:order-2">
            <div className="bg-gradient-to-br from-accent to-accent-dark rounded-t-lg px-6 py-4 shadow-md">
              <h3 className="text-xl font-bold text-white m-0 font-serif uppercase tracking-wide drop-shadow">Mais Lidas</h3>
            </div>

            <div className="bg-white rounded-b-lg shadow-lg border border-neutral-light border-t-0">
              {sidebarArticles.map((article, index) => (
                <a
                  key={article.id}
                  href={`#article-${article.id}`}
                  className={`grid grid-cols-[28px_1fr_70px] md:grid-cols-[32px_1fr_80px] gap-3 md:gap-4 p-3.5 md:p-5 no-underline text-inherit transition-all duration-300 hover:bg-neutral-light ${
                    index !== sidebarArticles.length - 1 ? 'border-b border-neutral-light' : ''
                  } group`}
                >
                  <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-accent to-accent-dark text-white rounded-full font-bold text-xs md:text-sm shrink-0 shadow-sm">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm md:text-[0.9375rem] font-semibold text-neutral-dark mb-2 leading-snug line-clamp-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-neutral">
                      <span className="text-secondary font-semibold">{article.category}</span>
                      <span className="text-secondary">•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="w-[70px] h-[70px] md:w-20 md:h-20 rounded-md overflow-hidden shrink-0">
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

            {/* Banner Sidebar */}
            <div className="relative bg-gradient-to-br from-complement via-primary to-secondary rounded-lg overflow-hidden shadow-lg border-complement/30 min-h-[400px] flex items-center justify-center">
              <span className="text-white px-3 py-1 text-2xl font-bold uppercase drop-shadow-lg">Publicidade</span>
            </div>

            <div className="bg-gradient-to-br from-complement to-complement-dark rounded-t-lg px-6 py-4 shadow-md">
              <h3 className="text-xl font-bold text-white m-0 font-serif uppercase tracking-wide drop-shadow">Novidades</h3>
            </div>

            <div className="bg-white rounded-b-lg shadow-lg border border-neutral-light border-t-0">
              {sidebarArticles.map((article, index) => (
                <a
                  key={article.id}
                  href={`#article-${article.id}`}
                  className={`grid grid-cols-[28px_1fr_70px] md:grid-cols-[32px_1fr_80px] gap-3 md:gap-4 p-3.5 md:p-5 no-underline text-inherit transition-all duration-300 hover:bg-neutral-light ${
                    index !== sidebarArticles.length - 1 ? 'border-b border-neutral-light' : ''
                  } group`}
                >
                  <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-accent to-accent-dark text-white rounded-full font-bold text-xs md:text-sm shrink-0 shadow-sm">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm md:text-[0.9375rem] font-semibold text-neutral-dark mb-2 leading-snug line-clamp-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-neutral">
                      <span className="text-secondary font-semibold">{article.category}</span>
                      <span className="text-secondary">•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="w-[70px] h-[70px] md:w-20 md:h-20 rounded-md overflow-hidden shrink-0">
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
          </aside>
        </div>
      </div>
    </section>
  );
}
