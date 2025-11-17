export default function WhatsAppButton() {
  const whatsappNumber = '5511999999999'; // Substituir pelo número real
  const message = 'Olá! Vim através do Portal Tubaínas e gostaria de mais informações.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-2xl z-[1000] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <svg
        className="w-8 h-8"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M16 0C7.164 0 0 7.164 0 16c0 2.828.736 5.484 2.02 7.78L.084 31.332l7.78-2.032A15.935 15.935 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0z"
          fill="currentColor"
        />
        <path
          d="M25.372 22.68c-.372 1.048-2.192 2.032-3.012 2.168-.82.136-1.848.188-2.98-.188-1.132-.376-2.588-.876-4.452-2.168-3.28-2.272-5.4-5.844-5.564-6.116-.164-.272-1.336-1.776-1.336-3.388s.844-2.404 1.144-2.732c.3-.328.656-.41.876-.41s.44.004.632.012c.196.008.46-.076.72.548.26.624.884 2.152.96 2.312.076.16.128.348.024.556-.104.208-.156.336-.32.516-.164.18-.344.4-.492.536-.164.152-.336.316-.144.62.192.304.852 1.408 1.832 2.28 1.26 1.124 2.32 1.472 2.652 1.64.332.168.524.14.716-.084.192-.224.82-.956 1.04-1.284.22-.328.44-.272.74-.164.3.108 1.908.9 2.236 1.064.328.164.548.244.628.38.08.136.08.784-.292 1.832z"
          fill="#ffffff"
        />
      </svg>
      <span className="absolute right-full mr-4 px-4 py-2 bg-neutral-dark text-white rounded-lg text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        Fale Conosco
      </span>
    </a>
  );
}
