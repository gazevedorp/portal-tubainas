import HeroGrid from '../components/HeroGrid';
import CommercialBanner from '../components/CommercialBanner';
import CategoryNews from '../components/CategoryNews';
import VideoSection from '../components/VideoSection';
import TastingSection from '../components/TastingSection';

export default function Home() {
  return (
    <>
      {/* Hero Grid - Seção Inicial com Banner + Carrossel + Conteúdo Denso */}
      <HeroGrid />

      {/* Seção de Seleção de Categorias */}
      {/* <CategorySelector /> */}

      {/* Banner Comercial Intermediário com CTA */}
      <CommercialBanner type="medium" showCTA={true} />

      {/* Seção de Degustações */}
      <TastingSection />

      {/* Banner Comercial */}
      <CommercialBanner type="medium" />

      {/* Seção de Cultura */}
      <CategoryNews category="Cultura" title="Cultura Cervejeira" />

      {/* Seção de Vídeos com TV Retrô */}
      <VideoSection />

      {/* Banner Comercial */}
      <CommercialBanner type="medium" />

      {/* Seção de Esportes */}
      <CategoryNews category="Esportes" title="Esportes" />

      {/* Seção de Mercado */}
      <CategoryNews category="Mercado" title="Mercado" />

      {/* Banner Comercial */}
      <CommercialBanner type="medium" />

      {/* Seção de Entrevistas */}
      <CategoryNews category="Entrevistas" title="Entrevistas" />
    </>
  );
}
