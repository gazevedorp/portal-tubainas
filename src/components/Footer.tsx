export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-neutral-dark to-black text-neutral-light pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 lg:gap-12 mb-12">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Portal Tubaínas Logo" className="h-12 w-auto" />
              <h3 className="text-[1.5rem] font-extrabold text-secondary m-0">
                Portal Tubaínas
              </h3>
            </div>
            <p className="text-neutral leading-relaxed m-0 mb-6 text-[0.95rem]">
              O melhor conteúdo sobre cultura das tubaínas, notícias do mercado e
              degustações. Trazendo informação de qualidade para os amantes dos refrigerantes regionais.
            </p>
            <div className="flex gap-4">
              <a
                href="#instagram"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-neutral-light transition-all duration-300 no-underline hover:bg-secondary hover:text-white hover:-translate-y-1"
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#facebook"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-neutral-light transition-all duration-300 no-underline hover:bg-secondary hover:text-white hover:-translate-y-1"
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#twitter"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-neutral-light transition-all duration-300 no-underline hover:bg-secondary hover:text-white hover:-translate-y-1"
                aria-label="Twitter"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-bold text-white m-0 mb-5">Navegação</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li>
                <a href="/" className="text-neutral no-underline text-[0.95rem] transition-all duration-300 hover:text-secondary">
                  Notícias
                </a>
              </li>
              <li>
                <a href="/tubainapedia" className="text-neutral no-underline text-[0.95rem] transition-all duration-300 hover:text-secondary">
                  Tubaínapedia
                </a>
              </li>
              <li>
                <a href="#youtubaina" className="text-neutral no-underline text-[0.95rem] transition-all duration-300 hover:text-secondary">
                  Youtubaína
                </a>
              </li>
              <li>
                <a href="#empresas" className="text-neutral no-underline text-[0.95rem] transition-all duration-300 hover:text-secondary">
                  Empresas
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-bold text-white m-0 mb-5">Institucional</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li>
                <a href="/quem-somos" className="text-neutral no-underline text-[0.95rem] transition-all duration-300 hover:text-secondary">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#degustacoes" className="text-neutral no-underline text-[0.95rem] transition-all duration-300 hover:text-secondary">
                  Degustações
                </a>
              </li>
              <li>
                <a href="/contato" className="text-neutral no-underline text-[0.95rem] transition-all duration-300 hover:text-secondary">
                  Contato
                </a>
              </li>
              <li>
                <a href="#anuncie" className="text-neutral no-underline text-[0.95rem] transition-all duration-300 hover:text-secondary">
                  Anuncie Conosco
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-bold text-white m-0 mb-5">Newsletter</h4>
            <p className="text-neutral text-[0.9rem] leading-relaxed m-0 mb-5">
              Receba as melhores notícias do mundo das tubaínas direto no seu e-mail.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-4 py-3.5 border border-white/20 rounded-md bg-white/5 text-white text-[0.95rem] transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white/10 placeholder:text-neutral"
                aria-label="E-mail para newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-primary text-white border-none rounded-md font-semibold text-[0.95rem] cursor-pointer transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center flex-wrap gap-4">
          <p className="text-neutral text-[0.9rem] m-0">
            &copy; {currentYear} Portal Tubaínas. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3 text-[0.9rem]">
            <a href="#privacidade" className="text-neutral no-underline transition-all duration-300 hover:text-secondary">
              Política de Privacidade
            </a>
            <span className="text-neutral">•</span>
            <a href="#termos" className="text-neutral no-underline transition-all duration-300 hover:text-secondary">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
