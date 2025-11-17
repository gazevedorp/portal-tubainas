interface CommercialBannerProps {
  type?: 'hero' | 'medium' | 'sidebar';
  title?: string;
  showCTA?: boolean;
}

export default function CommercialBanner({
  type = 'medium',
  title = 'Publicidade',
  showCTA = false
}: CommercialBannerProps) {
  const getBannerHeight = () => {
    switch (type) {
      case 'hero':
        return 'min-h-[200px] md:min-h-[300px]';
      case 'sidebar':
        return 'min-h-[250px]';
      default:
        return 'min-h-[150px] md:min-h-[200px]';
    }
  };

  return (
    <section className="py-4 md:py-8 bg-gradient-to-b from-white to-neutral-light">
      <div className="container">
        <div className="relative bg-white rounded-xl overflow-hidden shadow-xl border-2 border-primary/20">
          <span className="absolute top-3 left-3 bg-gradient-to-br from-neutral-dark to-black/90 text-white px-3 py-1.5 text-xs font-bold uppercase rounded-md z-[2] shadow-md">{title}</span>
          {showCTA ? (
            <div className="relative p-8 md:p-12 bg-gradient-to-br from-neutral-light via-white to-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-3 font-serif leading-tight">
                Anuncie no Portal Tubaínas
              </h3>
              <p className="text-base text-neutral mb-6 leading-relaxed max-w-[600px] mx-auto">
                Alcance milhares de leitores apaixonados por tubaínas e refrigerantes regionais
              </p>
              <a href="#anuncie" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-accent to-accent-dark text-white rounded-lg font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                <span>Saiba Mais</span>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 3l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ) : (
            <div className={`w-full relative ${getBannerHeight()} bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center overflow-hidden`}>
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full"></div>
              <span className="relative text-white text-2xl md:text-3xl font-bold uppercase drop-shadow-lg tracking-wide">Publicidade</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
