import { videos } from '../data/mockData';

export default function VideoSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-[2.5rem] font-bold text-neutral-dark mb-3 font-serif inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-secondary after:to-secondary-dark after:rounded-sm">
            Tubaína TV
          </h2>
          <p className="text-lg text-neutral mt-6">
            Assista aos melhores vídeos sobre o mundo das tubaínas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`#video-${video.id}`}
              className="block no-underline text-inherit transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <div className="relative w-full aspect-video bg-gradient-to-br from-neutral-dark to-black rounded-xl p-3 shadow-[0_8px_25px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.1)] border-[3px] border-neutral overflow-hidden before:content-[''] before:absolute before:top-2 before:left-2 before:right-2 before:bottom-2 before:border-2 before:border-secondary/30 before:rounded-lg before:pointer-events-none">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-md loaded"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] transition-all duration-300 hover:scale-110">
                    <svg className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]" width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="30" r="30" fill="rgba(244, 162, 44, 0.9)"/>
                      <path d="M24 18L42 30L24 42V18Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="absolute bottom-6 right-6 bg-black/85 text-white px-3 py-1.5 rounded text-sm font-semibold z-[2]">
                    {video.duration}
                  </span>
                </div>
                <div className="w-3/5 h-2 bg-gradient-to-br from-neutral to-neutral-dark mx-auto rounded-t relative before:content-[''] before:absolute before:bottom-[-12px] before:left-1/2 before:-translate-x-1/2 before:w-4/5 before:h-3 before:bg-gradient-to-br before:from-neutral before:to-neutral-dark before:rounded-lg before:shadow-[0_2px_4px_rgba(0,0,0,0.2)]"></div>
              </div>
              <div className="px-2">
                <h3 className="text-lg font-semibold text-neutral-dark mb-3 leading-snug line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 mb-2 text-sm text-neutral">
                  <span className="text-secondary font-semibold">{video.category}</span>
                  <span className="text-secondary">•</span>
                  <span className="text-neutral">{video.views} visualizações</span>
                </div>
                <p className="text-sm text-neutral">{video.date}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#videos"
            className="inline-block px-10 py-4 bg-gradient-to-br from-secondary to-secondary-dark text-white rounded-full font-semibold text-lg no-underline transition-all duration-300 shadow-[0_4px_15px_rgba(244,162,44,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(244,162,44,0.4)] hover:from-secondary-light hover:to-secondary"
          >
            Ver Todos os Vídeos
          </a>
        </div>
      </div>
    </section>
  );
}
