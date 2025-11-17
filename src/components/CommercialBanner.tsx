interface CommercialBannerProps {
  type?: 'hero' | 'medium' | 'sidebar' | 'inline';
  title?: string;
  showCTA?: boolean;
  compact?: boolean;
}

export default function CommercialBanner({
  type = 'medium',
  title = 'Publicidade',
  showCTA = false,
  compact = false
}: CommercialBannerProps) {
  const getBannerHeight = () => {
    switch (type) {
      case 'hero':
        return 'min-h-[150px] md:min-h-[200px]';
      case 'sidebar':
        return 'min-h-[300px]';
      case 'inline':
        return 'min-h-[120px] md:min-h-[150px]';
      default:
        return 'min-h-[150px] md:min-h-[180px]';
    }
  };

  const getWrapperClasses = () => {
    if (compact) return '';
    return 'py-4 md:py-6';
  };

  const content = showCTA ? (
    <div className="relative p-8 md:p-12 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 text-center border-2 border-accent/20 rounded-2xl">
      <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1.5 text-xs font-bold uppercase rounded-lg z-[2] shadow-md">
        Anunciante
      </div>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-dark mb-4 font-serif leading-tight">
        Anuncie no Portal Tubaínas
      </h3>
      <p className="text-base md:text-lg text-neutral mb-6 leading-relaxed max-w-[700px] mx-auto">
        Alcance milhares de leitores apaixonados por tubaínas e refrigerantes regionais. Promova sua marca no maior portal de notícias do segmento.
      </p>
      <a href="#anuncie" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-br from-accent to-accent-dark text-white rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-accent/30">
        <span>Saiba Mais</span>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M7 3l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  ) : (
    <div className={`w-full relative ${getBannerHeight()} bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center overflow-hidden rounded-2xl border-2 border-white/20 shadow-xl group hover:shadow-2xl transition-shadow duration-300`}>
      {/* Elementos decorativos animados */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 group-hover:scale-110 transition-transform duration-500"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-700"></div>

      {/* Badge - apenas em desktop */}
      <div className="hidden md:block absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
        {title}
      </div>

      {/* Conteúdo principal */}
      <div className="relative text-center z-10">
        <div className="text-white text-2xl md:text-4xl font-bold uppercase drop-shadow-2xl tracking-wider mb-1 md:mb-2">
          Publicidade
        </div>
        <div className="text-white/80 text-xs md:text-base font-medium drop-shadow-lg">
          Espaço disponível para seu anúncio
        </div>
      </div>

      {/* Ícone decorativo */}
      <div className="absolute bottom-4 right-4 text-white/20 group-hover:text-white/30 transition-colors">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      </div>
    </div>
  );

  return compact ? (
    content
  ) : (
    <section className={getWrapperClasses()}>
      <div className="container">
        {content}
      </div>
    </section>
  );
}
