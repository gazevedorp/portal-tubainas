import { tastings } from '../data/mockData';

export default function TastingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-[2.5rem] font-bold text-neutral-dark mb-3 font-serif inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-secondary after:to-secondary-dark after:rounded-sm">
            Degustações
          </h2>
          <p className="text-lg text-neutral mt-6">
            Análises completas e honestas das melhores tubaínas do Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tastings.map((tasting) => (
            <a
              key={tasting.id}
              href={`#tasting-${tasting.id}`}
              className="block no-underline text-inherit bg-white rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.1)] border-2 border-neutral-light transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(244,162,44,0.2)] hover:border-secondary"
            >
              <div className="relative w-full aspect-[3/2] overflow-hidden">
                <img
                  src={tasting.image}
                  alt={tasting.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-105 loaded"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-br from-secondary to-secondary-dark text-white px-4 py-2 rounded-[20px] flex items-center gap-1.5 font-bold text-lg shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                  <svg className="text-white" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 0l2.5 6.5H19l-5.5 4 2 6.5L10 13l-5.5 4 2-6.5-5.5-4h6.5z"/>
                  </svg>
                  <span>{tasting.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                  {tasting.brand}
                </span>
                <h3 className="text-xl font-bold text-neutral-dark mb-4 leading-tight line-clamp-2">
                  {tasting.title}
                </h3>
                <p className="text-[0.9375rem] text-neutral mb-6 leading-relaxed line-clamp-3">
                  {tasting.excerpt}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-neutral-light">
                  <span className="text-sm text-neutral">{tasting.date}</span>
                  <span className="text-sm text-secondary font-semibold transition-all duration-300 hover:text-secondary-dark">
                    Ler mais →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#degustacoes"
            className="inline-block px-10 py-4 bg-gradient-to-br from-secondary to-secondary-dark text-white rounded-full font-semibold text-lg no-underline transition-all duration-300 shadow-[0_4px_15px_rgba(244,162,44,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(244,162,44,0.4)] hover:from-secondary-light hover:to-secondary"
          >
            Ver Todas as Degustações
          </a>
        </div>
      </div>
    </section>
  );
}
