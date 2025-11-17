export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6 font-serif">
              Quem Somos
            </h1>
            <p className="text-lg md:text-xl text-neutral leading-relaxed">
              Dedicados a valorizar e promover a cultura das tubaínas e refrigerantes regionais brasileiros
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-8 text-center font-serif">
              Nossa Missão
            </h2>
            <p className="text-lg text-neutral leading-relaxed text-center mb-8">
              O Portal Tubaínas nasceu da paixão pelos refrigerantes regionais brasileiros. Nossa missão é preservar,
              documentar e celebrar a rica tradição das tubaínas, conectando produtores, consumidores e entusiastas
              em uma comunidade vibrante e apaixonada.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-12 text-center font-serif">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-white rounded-xl border-2 border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">💚</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-3">Paixão</h3>
              <p className="text-base text-neutral leading-relaxed">
                Amor genuíno pelas tubaínas e pela cultura regional brasileira
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-secondary/5 to-white rounded-xl border-2 border-secondary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-3">Comunidade</h3>
              <p className="text-base text-neutral leading-relaxed">
                Conectando pessoas e promovendo o intercâmbio de experiências
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-accent/5 to-white rounded-xl border-2 border-accent/20">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-3">Autenticidade</h3>
              <p className="text-base text-neutral leading-relaxed">
                Valorizando produtos genuínos e tradições regionais
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-12 text-center font-serif">
            Nossa Equipe
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-neutral leading-relaxed mb-8">
              Somos um time de jornalistas, pesquisadores e entusiastas apaixonados por refrigerantes regionais.
              Cada membro traz sua expertise única para criar conteúdo de qualidade sobre o universo das tubaínas.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="px-6 py-3 bg-white rounded-full text-neutral-dark font-semibold border-2 border-primary/20">
                Jornalismo
              </span>
              <span className="px-6 py-3 bg-white rounded-full text-neutral-dark font-semibold border-2 border-secondary/20">
                Pesquisa
              </span>
              <span className="px-6 py-3 bg-white rounded-full text-neutral-dark font-semibold border-2 border-accent/20">
                Curadoria
              </span>
              <span className="px-6 py-3 bg-white rounded-full text-neutral-dark font-semibold border-2 border-complement/20">
                Produção
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-neutral-light to-white p-12 rounded-xl border-2 border-primary/20">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4 font-serif">
              Faça Parte da Nossa História
            </h2>
            <p className="text-lg text-neutral leading-relaxed mb-8">
              Entre em contato conosco para parcerias, sugestões ou para compartilhar sua paixão pelas tubaínas
            </p>
            <a href="#contato" className="inline-block px-8 py-4 bg-gradient-to-br from-accent to-accent-dark text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-accent/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40">
              Entre em Contato
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
