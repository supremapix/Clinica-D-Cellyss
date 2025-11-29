
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, CONDITIONS, FAQS, PHONE_NUMBER, PHONE_DISPLAY, EMAIL_CONTACT, MAP_EMBED_URL, ALL_LOCATIONS, CITIES_RMC, NEIGHBORHOODS } from './constants';
import { LocationType } from './types';

// --- Utility Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-deepBlue mb-4 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-midBlue rounded-full">
      {children}
    </h2>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  to,
  className = '', 
  onClick 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'glass', 
  href?: string, 
  to?: string,
  className?: string,
  onClick?: () => void
}) => {
  const baseClasses = "inline-block px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center cursor-pointer";
  const variants = {
    primary: "bg-gradient-to-r from-midBlue to-deepBlue text-white hover:from-deepBlue hover:to-midBlue shadow-blue-500/30",
    secondary: "bg-gold text-white hover:bg-yellow-600 shadow-yellow-500/30",
    outline: "border-2 border-midBlue text-midBlue hover:bg-midBlue hover:text-white",
    whatsapp: "bg-[#25D366] text-white hover:bg-green-600 shadow-green-500/30",
    glass: "bg-white/20 backdrop-blur-md border border-white/40 text-deepBlue hover:bg-white/40"
  };

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  const Component = href ? 'a' : 'button';
  const props = href ? { href, target: href.startsWith('http') ? '_blank' : undefined } : { onClick };

  return (
    <Component className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

// --- Layout Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tratamentos', path: '/servicos' },
    { name: 'O que Tratamos', path: '/condicoes' },
    { name: 'Clínica', path: '/sobre' },
    { name: 'Depoimentos', path: '/depoimentos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white py-4 shadow-sm'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="https://decellyss.com.br/assets/images/fisioterapia-regenerativa-transforme-sua-sade-na-dcellyss-100x100.png" alt="Logo D'Cellyss Fisioterapia Curitiba" className="h-12 w-auto group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl md:text-2xl text-deepBlue leading-none">D'Cellyss</span>
            <span className="text-[10px] uppercase tracking-widest text-midBlue hidden md:block">Fisioterapia & Ozonioterapia</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className={`${location.pathname === link.path ? 'text-midBlue font-bold' : 'text-gray-700'} hover:text-midBlue font-medium transition-colors text-sm uppercase tracking-wide`}>
              {link.name}
            </Link>
          ))}
          <Button variant="primary" className="py-2 px-6 text-sm" href={`https://wa.me/${PHONE_NUMBER}?text=Olá,%20vi%20o%20site%20da%20D'Cellyss%20e%20gostaria%20de%20agendar%20uma%20consulta.`}>
            Agendar Agora
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-deepBlue text-2xl" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col gap-4 shadow-xl absolute w-full z-50">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="text-gray-700 font-medium py-2 border-b border-gray-50">
              {link.name}
            </Link>
          ))}
          <Button variant="whatsapp" className="w-full" href={`https://wa.me/${PHONE_NUMBER}`}>
            <i className="fab fa-whatsapp mr-2"></i> Agendar no WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-deepBlue">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-bold font-heading mb-4 text-white">D'Cellyss</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Clínica especializada em Fisioterapia Regenerativa e Ozonioterapia em Curitiba. Nossa missão é proporcionar alívio da dor e qualidade de vida através de tratamentos naturais e tecnologia de ponta.
          </p>
          <div className="flex space-x-4">
            {['instagram', 'facebook', 'youtube'].map(social => (
              <a key={social} href={`https://${social}.com/dcellyss`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-midBlue transition-colors" aria-label={`Siga-nos no ${social}`}>
                <i className={`fab fa-${social}`}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-4 text-gold">Mapa do Site</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Página Inicial</Link></li>
            <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre a Clínica</Link></li>
            <li><Link to="/servicos" className="hover:text-white transition-colors">Tratamentos</Link></li>
            <li><Link to="/depoimentos" className="hover:text-white transition-colors">Depoimentos</Link></li>
            <li><Link to="/contato" className="hover:text-white transition-colors">Agendar Consulta</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 text-gold">Especialidades</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {SERVICES.slice(0, 5).map(s => (
              <li key={s.id}><Link to="/servicos" className="hover:text-white transition-colors">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 text-gold">Fale Conosco</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start"><i className="fas fa-map-marker-alt mt-1 mr-2 text-midBlue"></i> R. Martins Fontes, 175 - Loja 17<br/>Fazendinha, Curitiba - PR</li>
            <li className="flex items-center"><i className="fas fa-phone mt-1 mr-2 text-midBlue"></i> <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white">{PHONE_DISPLAY}</a></li>
            <li className="flex items-center"><i className="fas fa-envelope mt-1 mr-2 text-midBlue"></i> {EMAIL_CONTACT}</li>
          </ul>
        </div>
      </div>
      
      {/* SEO Local Keyword Cloud */}
      <div className="border-t border-gray-800 pt-8 pb-8">
        <h5 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">Atendemos em Curitiba e Região Metropolitana</h5>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600 h-32 overflow-y-auto custom-scrollbar">
          {ALL_LOCATIONS.map((loc, idx) => (
            <Link key={idx} to={`/local/${loc.type}/${encodeURIComponent(loc.name)}`} className="hover:text-midBlue transition-colors whitespace-nowrap">
              Fisioterapia em {loc.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} D'Cellyss Fisioterapia e Ozonioterapia. Todos os direitos reservados.</p>
        <p className="flex items-center mt-4 md:mt-0">
          Desenvolvido com <i className="fas fa-heart text-red-500 mx-2 animate-beat"></i> por <span className="font-bold text-white ml-1">Suprema Mídia</span>
        </p>
      </div>
    </div>
  </footer>
);

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {showTop && (
        <button onClick={scrollToTop} className="w-12 h-12 bg-gray-700 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-600 transition-all" aria-label="Voltar ao topo">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
      <a href={`tel:+${PHONE_NUMBER}`} className="w-14 h-14 bg-midBlue text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-all animate-bounce" aria-label="Ligar agora">
        <i className="fas fa-phone-alt text-xl"></i>
      </a>
      <a href={`https://wa.me/${PHONE_NUMBER}?text=Olá,%20acessei%20o%20site%20da%20D'Cellyss%20e%20gostaria%20de%20mais%20informações.`} target="_blank" className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-green-600 transition-all transform hover:scale-110" aria-label="Falar no WhatsApp">
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
};

// --- Page Components ---

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-20 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="absolute top-20 left-10 w-64 h-64 bg-babyBlue/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-midBlue/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#4A90E2 1px, transparent 1px), linear-gradient(90deg, #4A90E2 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div className="animate-fade-up max-w-2xl text-center lg:text-left order-1 lg:order-1 flex flex-col items-center lg:items-start z-20">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-midBlue/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-midBlue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-midBlue"></span>
            </span>
            <span className="text-deepBlue font-semibold text-xs tracking-wider uppercase">Fisioterapia em Curitiba - Fazendinha</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepBlue leading-[1.1] mb-6">
            Fisioterapia Regenerativa e <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-midBlue to-celestial">
              Ozonioterapia.
            </span>
          </h1>
          
          <h2 className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
             Elimine dores crônicas na coluna, articulações e nervos sem cirurgia. Tratamentos de alta performance focados na regeneração dos tecidos.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary" className="shadow-xl shadow-blue-500/20 w-full sm:w-auto" href={`https://wa.me/${PHONE_NUMBER}?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20gratuita%20de%20fisioterapia`}>
              AGENDAR AVALIAÇÃO GRATUITA
            </Button>
            <Button variant="outline" className="backdrop-blur-sm w-full sm:w-auto" to="/servicos">
              Ver Tratamentos
            </Button>
          </div>

          <div className="mt-8 lg:mt-12 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 border-t border-gray-200/60 pt-6 lg:pt-8 w-full">
            <div className="text-center lg:text-left">
              <p className="text-2xl md:text-3xl font-bold text-midBlue">12+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Anos de Inovação</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl md:text-3xl font-bold text-midBlue">5k+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Casos Resolvidos</p>
            </div>
            <div className="flex items-center gap-2 bg-white/50 rounded-full px-3 py-1">
               <div className="text-xs text-left">
                 <p className="font-bold text-deepBlue">Dra. Célia</p>
                 <div className="text-gray-500 text-[10px]">Ref. em Ozonioterapia</div>
               </div>
            </div>
          </div>
        </div>

        <div className="relative w-full order-2 lg:order-2 mt-8 lg:mt-0 flex justify-center items-center h-[400px] lg:h-[600px]">
          <div className="relative w-full max-w-[320px] lg:max-w-[450px] aspect-[4/5] flex items-center justify-center">
             <div className="absolute w-[120%] h-[120%] border border-midBlue/10 rounded-full animate-spin-slow"></div>
             <div className="absolute w-[100%] h-[100%] border border-dashed border-midBlue/20 rounded-full"></div>
             <div className="relative w-full h-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-10 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" 
                  alt="Tratamento de Dor na Coluna em Curitiba" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-[25%] left-[50%] -translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16 pointer-events-none">
                   <div className="pain-point w-full h-full"></div>
                   <div className="tech-ring"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-deepBlue/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 text-white z-20">
                  <p className="font-heading font-bold text-lg lg:text-xl">Alívio Imediato</p>
                  <p className="text-blue-200 text-xs lg:text-sm">Tecnologia não invasiva</p>
                </div>
             </div>
             <div className="absolute top-4 -left-4 lg:top-20 lg:-left-12 bg-white/90 backdrop-blur-md p-3 lg:p-4 rounded-xl shadow-lg border border-white/50 animate-float z-20 w-[160px] lg:w-auto transform scale-90 lg:scale-100">
               <div className="flex items-center gap-2 lg:gap-3 mb-2">
                 <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs lg:text-sm">
                   <i className="fas fa-check"></i>
                 </div>
                 <span className="font-bold text-gray-800 text-xs lg:text-sm">Sem Cirurgia</span>
               </div>
               <div className="h-1 lg:h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                 <div className="h-full bg-green-500 w-[90%]"></div>
               </div>
               <p className="text-[10px] text-gray-500 mt-1">Recuperação Acelerada</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// -- NOVAS PÁGINAS DEDICADAS --

const ServicesPage = () => (
  <div className="pt-24 pb-20">
    <div className="bg-lightGray py-12 mb-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-heading font-bold text-deepBlue">Nossos Tratamentos</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Tecnologia avançada e protocolos exclusivos para recuperação acelerada.</p>
      </div>
    </div>
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <article key={service.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className="relative h-56 overflow-hidden">
              <img src={service.image} alt={`Tratamento de ${service.title} em Curitiba`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md text-midBlue">
                <i className={`fas ${service.icon} text-xl`}></i>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-deepBlue mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6 flex-grow bg-blue-50/50 p-4 rounded-lg">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <i className="fas fa-check-circle text-softGreen mt-1 mr-2 flex-shrink-0"></i>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="w-full text-sm" href={`https://wa.me/${PHONE_NUMBER}?text=Tenho%20interesse%20em%20${service.title}`}>
                Agendar {service.title}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="pt-24 pb-20">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
           <h1 className="text-4xl font-heading font-bold text-deepBlue mb-6">Sobre a D'Cellyss</h1>
           <p className="text-gray-600 text-lg mb-6 leading-relaxed">
             A Clínica D'Cellyss é referência em Fisioterapia Regenerativa e Ozonioterapia em Curitiba. Fundada com a missão de oferecer tratamentos não invasivos de alta performance, unimos tecnologia de ponta e olhar humano.
           </p>
           <p className="text-gray-600 text-lg mb-6 leading-relaxed">
             Liderada pela Dra. Célia, nossa equipe busca incessantemente a causa raiz da dor, indo além do alívio momentâneo para proporcionar a cura real e a devolução da qualidade de vida.
           </p>
           <div className="grid grid-cols-2 gap-6 mt-8">
             <div className="bg-lightGray p-6 rounded-xl text-center">
               <i className="fas fa-award text-3xl text-gold mb-3"></i>
               <h3 className="font-bold text-deepBlue">Excelência</h3>
               <p className="text-sm text-gray-500">Protocolos Ouro</p>
             </div>
             <div className="bg-lightGray p-6 rounded-xl text-center">
               <i className="fas fa-users text-3xl text-midBlue mb-3"></i>
               <h3 className="font-bold text-deepBlue">Acolhimento</h3>
               <p className="text-sm text-gray-500">Atendimento Humanizado</p>
             </div>
           </div>
        </div>
        <div className="relative">
          <img src="https://decellyss.com.br/assets/images/ozonioterapia-e-bem-estar-dcellyss-fazendinha-curitiba-658x651.png" alt="Equipe D'Cellyss" className="rounded-3xl shadow-2xl border-4 border-white" />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
             <p className="font-heading font-bold text-deepBlue text-xl">Dra. Célia</p>
             <p className="text-midBlue">Responsável Técnica</p>
          </div>
        </div>
      </div>
      <VideoSection />
    </div>
  </div>
);

const ConditionsPage = () => (
  <div className="pt-24 pb-20 bg-lightGray">
    <div className="container mx-auto px-4">
      <SectionTitle subtitle="Não conviva com a dor. Entenda o que tratamos e recupere sua vida.">O Que Tratamos</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CONDITIONS.map((condition, idx) => (
          <div key={idx} className="bg-white p-8 rounded-xl flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-300 border border-transparent hover:border-midBlue">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-midBlue text-3xl">
              <i className={`fas ${condition.icon}`}></i>
            </div>
            <h3 className="font-bold text-deepBlue text-lg mb-2">{condition.name}</h3>
            <p className="text-sm text-gray-500">Protocolo especializado disponível</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
         <Button href={`https://wa.me/${PHONE_NUMBER}?text=Tenho%20uma%20dessas%20condições`}>Agendar Avaliação</Button>
      </div>
    </div>
  </div>
);

const TestimonialsPage = () => (
  <div className="pt-24 pb-20">
    <div className="container mx-auto px-4">
      <SectionTitle subtitle="A satisfação de quem já recuperou a saúde conosco.">Depoimentos</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map(t => (
          <div key={t.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex text-gold mb-4 text-lg">
              {[...Array(t.rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
            </div>
            <p className="text-gray-600 italic mb-6 text-lg">"{t.text}"</p>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-midBlue rounded-full flex items-center justify-center text-white font-bold text-xl">
                 {t.name.charAt(0)}
               </div>
               <div>
                 <p className="font-bold text-deepBlue">{t.name}</p>
                 <p className="text-sm text-midBlue">{t.treatment}</p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-24 pb-20">
    <ContactForm />
    <div className="container mx-auto px-4 mt-12">
      <FAQSection />
    </div>
  </div>
);

const NotFoundPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-lightGray px-4 text-center">
    <i className="fas fa-compass text-6xl text-midBlue mb-6 animate-pulse"></i>
    <h1 className="text-4xl md:text-6xl font-heading font-bold text-deepBlue mb-4">404</h1>
    <h2 className="text-2xl font-bold text-gray-700 mb-6">Página não encontrada</h2>
    <p className="text-gray-600 max-w-md mb-8">
      Parece que o caminho que você buscou não existe. Volte para a página inicial e encontre o tratamento ideal para você.
    </p>
    <Button to="/">Voltar para a Home</Button>
  </div>
);

// --- Sections reused in pages ---

const VideoSection = () => (
  <section className="py-16 bg-white rounded-3xl my-8">
    <div className="container mx-auto px-4 text-center">
      <SectionTitle subtitle="Conheça nossa estrutura e tecnologia no Fazendinha.">
        Tour Virtual
      </SectionTitle>
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative group">
        <div className="relative pb-[56.25%] h-0 bg-black">
          <iframe 
            src="https://www.youtube.com/embed/IzsrUIrRB_k" 
            title="Clínica de Fisioterapia D'Cellyss Curitiba"
            className="absolute top-0 left-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 max-w-4xl">
      <SectionTitle subtitle="Tire suas dúvidas.">Perguntas Frequentes</SectionTitle>
      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 bg-gray-50/50">
            <h3 className="text-lg font-bold text-deepBlue mb-2 flex items-center">
              <i className="fas fa-question-circle text-midBlue mr-3"></i>
              {faq.question}
            </h3>
            <p className="text-gray-600 pl-8 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Agendamento via Site D'Cellyss*\n\nOlá, meu nome é *${formData.name}*.\nTelefone: ${formData.phone}\nTenho interesse em: *${formData.service || 'Avaliação Geral'}*.\n\n${formData.message}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-deepBlue p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-heading font-bold mb-6">Fale Conosco</h3>
              <p className="mb-8 text-blue-100 text-lg">Estamos prontos para cuidar de você. Venha conhecer nossa estrutura no Fazendinha.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-gold text-xl mt-1 mr-4"></i>
                  <div>
                    <h5 className="font-bold text-lg">Endereço</h5>
                    <p className="text-blue-100">R. Martins Fontes, 175 - Loja 17<br/>Fazendinha, Curitiba - PR, 81330-350</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-phone-alt text-gold text-xl mt-1 mr-4"></i>
                  <div>
                    <h5 className="font-bold text-lg">Telefone & WhatsApp</h5>
                    <p className="text-blue-100 font-mono">{PHONE_DISPLAY}</p>
                    <p className="text-sm text-blue-200">{EMAIL_CONTACT}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 h-48 rounded-xl overflow-hidden shadow-lg border-2 border-white/20 relative z-10">
              <iframe src={MAP_EMBED_URL} width="100%" height="100%" loading="lazy" style={{border:0}} title="Mapa da Clínica D'Cellyss"></iframe>
            </div>
          </div>

          <div className="p-8 lg:p-12 bg-gray-50/30">
            <h3 className="text-2xl font-bold text-deepBlue mb-2">Solicitar Agendamento</h3>
            <p className="text-gray-600 mb-8">Preencha os dados abaixo e entraremos em contato.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                <input required type="text" placeholder="Seu nome" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-midBlue focus:ring-2 focus:ring-midBlue/20 outline-none transition-all bg-white" 
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Seu WhatsApp</label>
                <input required type="tel" placeholder="(41) 99999-9999" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-midBlue focus:ring-2 focus:ring-midBlue/20 outline-none transition-all bg-white"
                  value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tratamento de Interesse</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-midBlue focus:ring-2 focus:ring-midBlue/20 outline-none transition-all bg-white"
                  value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                  <option value="">Selecione uma opção...</option>
                  {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  <option value="Dor na Coluna">Dor na Coluna</option>
                  <option value="Outro">Outro Assunto</option>
                </select>
              </div>
              <Button className="w-full shadow-lg text-lg py-4" variant="whatsapp">
                <i className="fab fa-whatsapp mr-2"></i> AGENDAR AGORA
              </Button>
            </form>
          </div>
        </div>
    </section>
  );
};

// --- HomePage (Main Landing) ---
// Retains the layout but uses Link instead of anchors where appropriate for inner pages

const HomePage = () => (
  <>
    <Hero />
    <section className="py-16 bg-white -mt-10 relative z-20">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Especialistas no tratamento de patologias da coluna e dores crônicas.">O Que Tratamos</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CONDITIONS.slice(0, 5).map((condition, idx) => (
            <div key={idx} className="bg-lightGray p-6 rounded-xl flex flex-col items-center justify-center text-center">
              <div className="text-midBlue text-2xl mb-2"><i className={`fas ${condition.icon}`}></i></div>
              <h3 className="font-bold text-gray-700 text-sm">{condition.name}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" to="/condicoes">Ver Todas as Condições</Button>
        </div>
      </div>
    </section>

    <section className="py-20 bg-lightGray">
      <div className="container mx-auto px-4">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
               <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" alt="Fisioterapia Curitiba" className="rounded-3xl shadow-xl" />
            </div>
            <div className="order-1 md:order-2">
               <h2 className="text-3xl font-heading font-bold text-deepBlue mb-6">Tratamentos de Alta Performance</h2>
               <p className="text-gray-600 mb-6 text-lg">Combinamos tecnologia e terapias manuais para resultados rápidos.</p>
               <ul className="space-y-4 mb-8">
                 {SERVICES.slice(0,3).map(s => (
                   <li key={s.id} className="flex items-center">
                     <i className="fas fa-check-circle text-softGreen mr-3 text-xl"></i>
                     <span className="font-bold text-gray-700">{s.title}</span>
                   </li>
                 ))}
               </ul>
               <Button to="/servicos">Conhecer Todos os Tratamentos</Button>
            </div>
         </div>
      </div>
    </section>
    
    <ContactForm />
  </>
);

const LocationPage = () => {
  const { type, name } = useParams();
  const decodedName = decodeURIComponent(name || '');
  const locationTitle = type === LocationType.CITY ? `na cidade de ${decodedName}` : `no bairro ${decodedName}`;
  const displayTitle = type === LocationType.CITY ? `${decodedName}` : `${decodedName} - Curitiba`;

  useEffect(() => {
    document.title = `Fisioterapia e Ozonioterapia em ${decodedName} | D'Cellyss`;
  }, [decodedName]);

  return (
    <div className="pt-20">
      <div className="bg-babyBlue/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-deepBlue mb-6">
            Fisioterapia Regenerativa e Ozonioterapia em <span className="text-midBlue">{displayTitle}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Procurando por <strong>fisioterapeuta em {decodedName}</strong>? A D'Cellyss é referência em tratamento de dor sem cirurgia para toda a região.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-deepBlue mb-4">Melhor Clínica de Fisioterapia perto de {decodedName}</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Moradores de <strong>{decodedName}</strong> que sofrem com hérnia de disco, nervo ciático inflamado ou artrose agora têm uma opção de tratamento de ponta bem próxima. A Clínica D'Cellyss, localizada estrategicamente no Fazendinha, oferece fácil acesso para quem vem de {locationTitle}.
            </p>
            <Button variant="secondary" href={`https://wa.me/${PHONE_NUMBER}?text=Olá,%20sou%20de%20${encodeURIComponent(decodedName)}%20e%20busco%20tratamento.`}>
               Agendar Avaliação Gratuita
            </Button>
          </article>
        </div>
        <aside>
          <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24 border-t-4 border-gold">
             <h3 className="font-bold text-xl mb-4 text-deepBlue">Contato Rápido</h3>
             <a href={`https://wa.me/${PHONE_NUMBER}`} className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors mb-4">
                 <i className="fab fa-whatsapp text-green-600 w-8"></i>
                 <span className="font-bold text-gray-700">WhatsApp Direto</span>
             </a>
             <iframe src={MAP_EMBED_URL} width="100%" height="200" style={{border:0}} loading="lazy" className="rounded-lg" title="Mapa de Localização"></iframe>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/condicoes" element={<ConditionsPage />} />
            <Route path="/depoimentos" element={<TestimonialsPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/local/:type/:name" element={<LocationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}
