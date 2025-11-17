import { articles } from '../data/mockData';

interface CategoryNewsProps {
  category: string;
  title: string;
}

export default function CategoryNews({ category, title }: CategoryNewsProps) {
  const categoryArticles = articles
    .filter((article) => article.category === category)
    .slice(0, 8);

  if (categoryArticles.length === 0) return null;

  return (
    <section className="py-12 bg-white border-b border-neutral-light even:bg-neutral-light">
      <div className="container">
        <div className="flex justify-between items-center mb-8 pb-4 border-b-[3px] border-secondary">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark font-serif">{title}</h2>
          <a href={`#${category.toLowerCase()}`} className="text-base font-semibold text-secondary no-underline transition-colors duration-300 hover:text-secondary-dark">
            Ver mais →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categoryArticles.map((article, index) => (
            <a
              key={article.id}
              href={`#article-${article.id}`}
              className={`block relative rounded-lg overflow-hidden shadow-lg no-underline text-inherit transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/20 group ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Card principal (index 0) - mantém estilo tradicional */}
              {index === 0 ? (
                <>
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 loaded"
                    />
                    <span className="absolute top-3 left-3 bg-complement/95 text-white px-3 py-1.5 rounded-2xl text-xs font-semibold uppercase tracking-wide shadow-md">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-4 md:p-6 bg-white">
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-dark mb-3 leading-snug line-clamp-3">
                      {article.title}
                    </h3>
                    <p className="text-base text-neutral leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-neutral">
                      <span>{article.author}</span>
                      <span className="text-secondary">•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </>
              ) : (
                /* Cards laterais (index > 0) - estilo imagem full com overlay */
                <div className="relative aspect-[4/3]">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 loaded"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                  {/* Category badge */}
                  <span className="absolute top-3 left-3 bg-complement/95 text-white px-3 py-1.5 rounded-2xl text-xs font-semibold uppercase tracking-wide shadow-md z-10">
                    {article.category}
                  </span>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug line-clamp-2 drop-shadow-lg">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
