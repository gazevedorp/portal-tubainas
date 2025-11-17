import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'NOTÍCIAS', href: '/' },
    { name: 'TUBAÍNAPEDIA', href: '#tubainapedia' },
    { name: 'YOUTUBAÍNA', href: '#youtubaina' },
    { name: 'EMPRESAS', href: '#empresas' },
    { name: 'QUEM SOMOS', href: '#quem-somos' },
    { name: 'DEGUSTAÇÕES', href: '#degustacoes' },
    { name: 'CONTATO', href: '#contato' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-neutral-dark shadow-md sticky top-0 z-[1000]">
      <div className="border-b border-neutral/30 py-4 md:py-6">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="logo flex items-center gap-3">
              <img src="/logo.png" alt="Portal Tubaínas Logo" className="h-12 md:h-16 lg:h-20 w-auto" />
            </div>
            <div className="flex gap-3 md:gap-6 items-center">
              <div className="hidden md:flex gap-3 items-center">
                <a href="#instagram" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-neutral-light transition-all duration-300 hover:bg-secondary hover:text-white hover:-translate-y-0.5" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#facebook" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-neutral-light transition-all duration-300 hover:bg-secondary hover:text-white hover:-translate-y-0.5" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#youtube" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-neutral-light transition-all duration-300 hover:bg-secondary hover:text-white hover:-translate-y-0.5" aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              <a href="#anuncie" className="hidden sm:block px-4 py-2 md:px-5 md:py-2.5 bg-gradient-to-br from-accent to-accent-dark text-white rounded-full font-semibold text-xs md:text-sm transition-all duration-300 shadow-lg shadow-accent/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40 hover:from-accent-light hover:to-accent">
                Para Anunciantes
              </a>
              <a href="#busca" className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-neutral-light transition-all duration-200 hover:bg-primary hover:text-white" aria-label="Buscar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </a>

              {/* Botão Hamburger Mobile */}
              <button
                onClick={toggleMenu}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-neutral-light transition-all duration-200 hover:bg-primary hover:text-white"
                aria-label="Menu"
                aria-expanded={isMenuOpen}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200"
                >
                  {isMenuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:block p-0 bg-neutral-dark/95">
        <div className="container">
          <nav className="flex gap-0">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`px-5 py-4 font-medium text-[0.95rem] whitespace-nowrap border-b-3 transition-all duration-200 hover:text-primary hover:bg-white/5 ${
                  index === 0
                    ? 'border-b-primary text-primary'
                    : 'border-transparent text-neutral-light'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Menu Mobile Hamburger */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-neutral-dark/98 border-t border-neutral/20">
          <div className="container py-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={closeMenu}
                className={`block px-4 py-3 font-medium text-sm transition-all duration-200 rounded-lg my-1 ${
                  index === 0
                    ? 'text-primary bg-primary/10 border-l-4 border-primary'
                    : 'text-neutral-light hover:text-primary hover:bg-white/5 hover:border-l-4 hover:border-primary/50 border-l-4 border-transparent'
                }`}
              >
                {item.name}
              </a>
            ))}

            {/* Redes Sociais Mobile */}
            <div className="flex gap-3 items-center justify-center px-4 py-4 mt-4 border-t border-neutral/20">
              <a href="#instagram" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-neutral-light transition-all duration-300 hover:bg-secondary hover:text-white" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#facebook" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-neutral-light transition-all duration-300 hover:bg-secondary hover:text-white" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#youtube" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-neutral-light transition-all duration-300 hover:bg-secondary hover:text-white" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Botões de ação Mobile */}
            <div className="flex flex-col gap-2 px-4 pb-4">
              <a href="#anuncie" className="block text-center px-5 py-3 bg-gradient-to-br from-accent to-accent-dark text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:from-accent-light hover:to-accent">
                Para Anunciantes
              </a>
              <a href="#busca" className="flex items-center justify-center gap-2 px-5 py-3 bg-white/10 text-neutral-light rounded-full font-semibold text-sm transition-all duration-200 hover:bg-primary hover:text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                Buscar
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
