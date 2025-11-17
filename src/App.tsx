import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tubainapedia from './pages/Tubainapedia';
import QuemSomos from './pages/QuemSomos';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tubainapedia" element={<Tubainapedia />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        {/* Botão Flutuante do WhatsApp */}
        <WhatsAppButton />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
