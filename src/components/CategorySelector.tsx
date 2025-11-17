export default function CategorySelector() {
  const categories = [
    {
      name: 'Todas',
      icon: '📰',
      color: 'from-neutral to-neutral-dark',
      href: '/'
    },
    {
      name: 'Cultura',
      icon: '🎭',
      color: 'from-primary to-primary-dark',
      href: '#cultura'
    },
    {
      name: 'Mercado',
      icon: '📊',
      color: 'from-secondary to-secondary-dark',
      href: '#mercado'
    },
    {
      name: 'Esportes',
      icon: '⚽',
      color: 'from-accent to-accent-dark',
      href: '#esportes'
    },
    {
      name: 'Entrevistas',
      icon: '🎙️',
      color: 'from-complement to-complement-dark',
      href: '#entrevistas'
    },
    {
      name: 'Degustações',
      icon: '🍹',
      color: 'from-primary-light to-primary',
      href: '#degustacoes'
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white via-neutral-light/30 to-white">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-3 font-serif">
            Explore por Categoria
          </h2>
          <p className="text-base text-neutral max-w-2xl mx-auto">
            Navegue pelas categorias e descubra conteúdos sobre o universo das tubaínas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className="group relative flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-xl shadow-md border-2 border-transparent transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl no-underline"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                <span className="text-3xl md:text-4xl">{category.icon}</span>
              </div>
              <h3 className="text-sm md:text-base font-bold text-neutral-dark text-center transition-colors duration-300 group-hover:text-primary">
                {category.name}
              </h3>
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 rounded-xl transition-opacity duration-300 group-hover:opacity-5`}></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
