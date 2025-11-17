export default function Tubainapedia() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4 font-serif">
              Tubaínapedia
            </h1>
            <p className="text-lg md:text-xl text-neutral leading-relaxed">
              A enciclopédia completa sobre tubaínas e refrigerantes regionais do Brasil
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-neutral-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary">
              <div className="relative w-full aspect-video bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <span className="text-white text-6xl">🍋</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-3 leading-tight">
                  História das Tubaínas
                </h3>
                <p className="text-base text-neutral leading-relaxed mb-4">
                  Conheça a origem e evolução dos refrigerantes regionais brasileiros
                </p>
                <a href="#historia" className="text-secondary font-semibold transition-colors duration-300 hover:text-secondary-dark">
                  Saiba mais →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-neutral-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary">
              <div className="relative w-full aspect-video bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center">
                <span className="text-white text-6xl">🏭</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-3 leading-tight">
                  Marcas Brasileiras
                </h3>
                <p className="text-base text-neutral leading-relaxed mb-4">
                  Explore as principais marcas de tubaínas em cada região do país
                </p>
                <a href="#marcas" className="text-secondary font-semibold transition-colors duration-300 hover:text-secondary-dark">
                  Saiba mais →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-neutral-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary">
              <div className="relative w-full aspect-video bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                <span className="text-white text-6xl">🧪</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-3 leading-tight">
                  Ingredientes e Sabores
                </h3>
                <p className="text-base text-neutral leading-relaxed mb-4">
                  Descubra os ingredientes e sabores únicos das tubaínas
                </p>
                <a href="#ingredientes" className="text-secondary font-semibold transition-colors duration-300 hover:text-secondary-dark">
                  Saiba mais →
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-neutral-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary">
              <div className="relative w-full aspect-video bg-gradient-to-br from-complement to-complement-dark flex items-center justify-center">
                <span className="text-white text-6xl">📍</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-3 leading-tight">
                  Mapa Regional
                </h3>
                <p className="text-base text-neutral leading-relaxed mb-4">
                  Veja onde encontrar as melhores tubaínas pelo Brasil
                </p>
                <a href="#mapa" className="text-secondary font-semibold transition-colors duration-300 hover:text-secondary-dark">
                  Saiba mais →
                </a>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-neutral-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary">
              <div className="relative w-full aspect-video bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <span className="text-white text-6xl">📚</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-3 leading-tight">
                  Glossário
                </h3>
                <p className="text-base text-neutral leading-relaxed mb-4">
                  Termos e expressões do universo das tubaínas
                </p>
                <a href="#glossario" className="text-secondary font-semibold transition-colors duration-300 hover:text-secondary-dark">
                  Saiba mais →
                </a>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-neutral-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary">
              <div className="relative w-full aspect-video bg-gradient-to-br from-secondary via-complement to-primary flex items-center justify-center">
                <span className="text-white text-6xl">🏆</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-3 leading-tight">
                  Curiosidades
                </h3>
                <p className="text-base text-neutral leading-relaxed mb-4">
                  Fatos interessantes e histórias sobre as tubaínas
                </p>
                <a href="#curiosidades" className="text-secondary font-semibold transition-colors duration-300 hover:text-secondary-dark">
                  Saiba mais →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
