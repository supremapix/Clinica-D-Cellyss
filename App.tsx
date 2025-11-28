
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, CONDITIONS, FAQS, PHONE_NUMBER, PHONE_DISPLAY, EMAIL_CONTACT, MAP_EMBED_URL, ALL_LOCATIONS, CITIES_RMC, NEIGHBORHOODS } from './constants';
import { LocationType } from './types';

// --- Utility Components ---

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-deepBlue mb-4 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-midBlue rounded-full">
      {children}
    </h2>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-lg">{subtitle}</p>}
  </div>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  className = '', 
  onClick 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'glass', 
  href?: string, 
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

  const Component = href ? 'a' : 'button';
  const props = href ? { href, target: href.startsWith('http') ? '_blank' : undefined } : { onClick };

  return (
    <Component className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

// --- Functional Components ---

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
    { name: 'Tratamentos', path: '#services' },
    { name: 'O Que Tratamos', path: '#conditions' },
    { name: 'Empresa', path: '#about' },
    { name: 'FAQ', path: '#faq' },
    { name: 'Contato', path: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src="https://decellyss.com.br/assets/images/fisioterapia-regenerativa-transforme-sua-sade-na-dcellyss-100x100.png" alt="D'Cellyss" className="h-12 w-auto" />
          <span className={`font-heading font-bold text-xl md:text-2xl ${scrolled ? 'text-deepBlue' : 'text-deepBlue'}`}>D'Cellyss</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.name} href={link.path.startsWith('#') && location.pathname !== '/' ? `/${link.path}` : link.path} className={`${scrolled ? 'text-gray-600' : 'text-gray-700'} hover:text-midBlue font-medium transition-colors text-sm uppercase tracking-wide`}>
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="py-2 px-6 text-sm" href={`https://wa.me/${PHONE_NUMBER}?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20gratuita!`}>
            Agendar
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-deepBlue text-2xl" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col gap-4 shadow-xl absolute w-full">
          {navLinks.map(link => (
            <a key={link.name} href={link.path.startsWith('#') && location.pathname !== '/' ? `/${link.path}` : link.path} className="text-gray-700 font-medium py-2 border-b border-gray-50">
              {link.name}
            </a>
          ))}
          <Button variant="whatsapp" className="w-full" href={`https://wa.me/${PHONE_NUMBER}`}>
            <i className="fab fa-whatsapp mr-2"></i> Agendar pelo WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-20 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Abstract Tech Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-babyBlue/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-midBlue/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#4A90E2 1px, transparent 1px), linear-gradient(90deg, #4A90E2 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="animate-fade-up max-w-2xl text-center lg:text-left order-1 lg:order-1 flex flex-col items-center lg:items-start z-20">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-midBlue/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-midBlue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-midBlue"></span>
            </span>
            <span className="text-deepBlue font-semibold text-xs tracking-wider uppercase">Clínica Referência em Curitiba</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepBlue leading-[1.1] mb-6">
            Elimine a dor. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-midBlue to-celestial">
              Recupere a vida.
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
            Tecnologia regenerativa avançada e ozonioterapia para tratar a causa da dor, não apenas os sintomas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary" className="shadow-xl shadow-blue-500/20 w-full sm:w-auto" href={`https://wa.me/${PHONE_NUMBER}?text=Olá,%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20consulta%20gratuita`}>
              AGENDAR CONSULTA
            </Button>
            <Button variant="outline" className="backdrop-blur-sm w-full sm:w-auto" href="#services">
              Conheça os Tratamentos
            </Button>
          </div>

          <div className="mt-8 lg:mt-12 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 border-t border-gray-200/60 pt-6 lg:pt-8 w-full">
            <div className="text-center lg:text-left">
              <p className="text-2xl md:text-3xl font-bold text-midBlue">15+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Anos de Exp.</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl md:text-3xl font-bold text-midBlue">5k+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Pacientes</p>
            </div>
            <div className="flex items-center gap-2 bg-white/50 rounded-full px-3 py-1">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden">
                     <img src={`https://randomuser.me/api/portraits/thumb/women/${i + 40}.jpg`} alt="User" />
                   </div>
                 ))}
               </div>
               <div className="text-xs text-left">
                 <p className="font-bold text-deepBlue">4.9/5.0</p>
                 <div className="flex text-gold text-[10px]">
                   <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Composition */}
        <div className="relative w-full order-2 lg:order-2 mt-8 lg:mt-0 flex justify-center items-center h-[400px] lg:h-[600px]">
          {/* Main Circle Container */}
          <div className="relative w-full max-w-[320px] lg:max-w-[450px] aspect-[4/5] flex items-center justify-center">
             
             {/* Tech Rings Animation - Responsive */}
             <div className="absolute w-[120%] h-[120%] border border-midBlue/10 rounded-full animate-spin-slow"></div>
             <div className="absolute w-[100%] h-[100%] border border-dashed border-midBlue/20 rounded-full"></div>
             
             {/* Main Image Masked */}
             <div className="relative w-full h-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-10 bg-white">
                {/* Image: Woman with neck pain / back view (Professional/Clean) */}
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" 
                  alt="Tratamento de Dor" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay: Stylized Pain Point */}
                <div className="absolute top-[25%] left-[50%] -translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16 pointer-events-none">
                   <div className="pain-point w-full h-full"></div>
                   <div className="tech-ring"></div>
                </div>

                {/* Overlay: Gradient fade at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-deepBlue/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 text-white z-20">
                  <p className="font-heading font-bold text-lg lg:text-xl">Dra. Célia</p>
                  <p className="text-blue-200 text-xs lg:text-sm">Fisioterapeuta Especialista</p>
                </div>
             </div>

             {/* Floating Glassmorphism Cards - Visible on mobile but adjusted */}
             <div className="absolute top-4 -left-4 lg:top-20 lg:-left-12 bg-white/90 backdrop-blur-md p-3 lg:p-4 rounded-xl shadow-lg border border-white/50 animate-float z-20 w-[160px] lg:w-auto transform scale-90 lg:scale-100">
               <div className="flex items-center gap-2 lg:gap-3 mb-2">
                 <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs lg:text-sm">
                   <i className="fas fa-check"></i>
                 </div>
                 <span className="font-bold text-gray-800 text-xs lg:text-sm">Alívio da Dor</span>
               </div>
               <div className="h-1 lg:h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                 <div className="h-full bg-green-500 w-[90%]"></div>
               </div>
             </div>

             <div className="absolute bottom-16 -right-2 lg:bottom-32 lg:-right-8 bg-white/90 backdrop-blur-md p-3 lg:p-4 rounded-xl shadow-lg border border-white/50 animate-float-delayed z-20 flex items-center gap-2 lg:gap-3 transform scale-90 lg:scale-100">
               <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-blue-100 flex items-center justify-center text-midBlue text-base lg:text-xl">
                 <i className="fas fa-dna"></i>
               </div>
               <div>
                 <p className="font-bold text-deepBlue text-xs lg:text-sm">Tecnologia</p>
                 <p className="text-[10px] lg:text-xs text-gray-500">Regenerativa</p>
               </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const ConditionsSection = () => (
  <section id="conditions" className="py-16 bg-white relative z-20 -mt-10 lg:mt-0">
    <div className="container mx-auto px-4">
      <SectionTitle subtitle="Identifique seus sintomas. Nós temos a solução ideal para você.">
        O Que Tratamos
      </SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {CONDITIONS.map((condition, idx) => (
          <div key={idx} className="bg-lightGray p-6 rounded-xl flex flex-col items-center justify-center text-center hover:bg-babyBlue/30 hover:scale-105 transition-all duration-300 border border-transparent hover:border-midBlue/20 cursor-default group">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:bg-midBlue group-hover:text-white transition-colors text-midBlue text-xl">
              <i className={`fas ${condition.icon}`}></i>
            </div>
            <h4 className="font-bold text-gray-700">{condition.name}</h4>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <p className="text-gray-600 mb-6">Sofre com alguma dessas condições? Não espere a dor piorar.</p>
        <Button variant="secondary" href={`https://wa.me/${PHONE_NUMBER}?text=Tenho%20interesse%20em%20tratar%20minhas%20dores`}>
          Fale com a Especialista
        </Button>
      </div>
    </div>
  </section>
);

const VideoSection = () => (
  <section className="py-16 bg-lightGray">
    <div className="container mx-auto px-4 text-center">
      <SectionTitle subtitle="Descubra como transformamos vidas através da fisioterapia regenerativa">
        Conheça a D'Cellyss
      </SectionTitle>
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
        <div className="relative pb-[56.25%] h-0">
          <iframe 
            src="https://www.youtube.com/embed/IzsrUIrRB_k" 
            title="Vídeo Institucional D'Cellyss"
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const ServicesList = () => (
  <section id="services" className="py-20 bg-gradient-to-b from-white to-lightGray">
    <div className="container mx-auto px-4">
      <SectionTitle subtitle="Soluções inovadoras e personalizadas para sua saúde">
        Nossos Tratamentos
      </SectionTitle>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md text-midBlue">
                <i className={`fas ${service.icon} text-xl`}></i>
              </div>
              {service.isNew && (
                <div className="absolute top-4 left-4 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Novidade
                </div>
              )}
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-deepBlue mb-3 group-hover:text-midBlue transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6 flex-grow">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-500">
                    <i className="fas fa-check text-softGreen mt-1 mr-2 flex-shrink-0"></i>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full text-sm py-2" href={`https://wa.me/${PHONE_NUMBER}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20${service.title}`}>
                Saiba Mais
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-gradient-to-r from-deepBlue to-midBlue text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 opacity-10">
      <i className="fas fa-heartbeat text-[400px]"></i>
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Dra. Célia & Equipe</h2>
          <p className="text-blue-100 text-lg mb-6 leading-relaxed">
            Desde 2012, a D'Cellyss é referência em terapias naturais em Curitiba. Liderada pela fisioterapeuta Dra. Célia, nossa missão é entregar saúde, qualidade de vida e rejuvenescimento natural.
          </p>
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/20 mb-6">
            <h4 className="font-bold text-xl mb-2 text-gold">Por que escolher a D'Cellyss?</h4>
            <ul className="space-y-3">
              <li className="flex items-center"><i className="fas fa-certificate text-gold mr-3"></i> Especialistas em Ozonioterapia</li>
              <li className="flex items-center"><i className="fas fa-user-md text-gold mr-3"></i> Tratamentos Personalizados</li>
              <li className="flex items-center"><i className="fas fa-home text-gold mr-3"></i> Ambiente Acolhedor no Fazendinha</li>
              <li className="flex items-center"><i className="fas fa-heart text-gold mr-3"></i> Atendimento Humanizado</li>
            </ul>
          </div>
          <Button variant="secondary" href="#contact">Conheça Nossa Clínica</Button>
        </div>
        <div className="flex justify-center">
           <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-8 border-white/20 overflow-hidden shadow-2xl relative bg-white">
              {/* Official Image: Ozonioterapia and Well-being */}
              <img src="https://decellyss.com.br/assets/images/ozonioterapia-e-bem-estar-dcellyss-fazendinha-curitiba-658x651.png" alt="Dra Célia e Equipe - Ozonioterapia" className="w-full h-full object-cover" />
           </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section id="faq" className="py-16 bg-white">
    <div className="container mx-auto px-4 max-w-4xl">
      <SectionTitle subtitle="Tire suas dúvidas sobre nossos procedimentos e atendimento">
        Perguntas Frequentes
      </SectionTitle>
      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-deepBlue mb-2 flex items-center">
              <i className="fas fa-question-circle text-midBlue mr-3"></i>
              {faq.question}
            </h3>
            <p className="text-gray-600 pl-8">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-lightGray">
    <div className="container mx-auto px-4">
      <SectionTitle>O que dizem nossos pacientes</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map(t => (
          <div key={t.id} className="bg-white p-8 rounded-2xl shadow-md relative mt-4">
            <div className="absolute -top-6 left-8 bg-midBlue text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-lg">
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="mt-6">
              <div className="flex text-gold mb-4">
                {[...Array(t.rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
              </div>
              <p className="text-gray-600 italic mb-6">"{t.text}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-deepBlue">{t.name}</p>
                <p className="text-sm text-gray-500">{t.treatment}</p>
              </div>
            </div>
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
    const text = `*Novo Agendamento via Site*\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nInteresse: ${formData.service || 'Geral'}\nMensagem: ${formData.message}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-deepBlue p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-6">Fale Conosco</h3>
              <p className="mb-8 text-blue-200">Estamos prontos para transformar sua saúde. Preencha o formulário ou nos contate diretamente.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-gold"></i>
                  </div>
                  <div>
                    <h5 className="font-bold">Endereço</h5>
                    <p className="text-sm text-blue-100">R. Martins Fontes, 175<br/>Fazendinha, Curitiba - PR</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone-alt text-gold"></i>
                  </div>
                  <div>
                    <h5 className="font-bold">Contato</h5>
                    <p className="text-sm text-blue-100">{PHONE_DISPLAY}<br/>{EMAIL_CONTACT}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 h-48 rounded-xl overflow-hidden shadow-lg border-2 border-white/20">
              <iframe src={MAP_EMBED_URL} width="100%" height="100%" loading="lazy" style={{border:0}}></iframe>
            </div>
          </div>

          <div className="p-10">
            <h3 className="text-2xl font-bold text-deepBlue mb-6">Agende sua Consulta Gratuita</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-midBlue focus:ring-2 focus:ring-midBlue/20 outline-none transition-all" 
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-midBlue focus:ring-2 focus:ring-midBlue/20 outline-none transition-all"
                  value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tratamento de Interesse</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-midBlue focus:ring-2 focus:ring-midBlue/20 outline-none transition-all"
                  value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                  <option value="">Selecione...</option>
                  {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-midBlue focus:ring-2 focus:ring-midBlue/20 outline-none transition-all"
                  value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <Button className="w-full shadow-lg" variant="primary">
                ENVIAR MENSAGEM VIA WHATSAPP
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-bold font-heading mb-4 text-white">D'Cellyss</h3>
          <p className="text-gray-400 text-sm mb-6">
            Referência em Fisioterapia Regenerativa e Ozonioterapia. Transformando vidas com saúde e bem-estar através de tratamentos naturais.
          </p>
          <div className="flex space-x-4">
            {['instagram', 'facebook', 'youtube'].map(social => (
              <a key={social} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-midBlue transition-colors">
                <i className={`fab fa-${social}`}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-4 text-gold">Links Rápidos</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><a href="#about" className="hover:text-white transition-colors">Sobre a Clínica</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Tratamentos</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors">Depoimentos</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 text-gold">Serviços</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {SERVICES.slice(0, 5).map(s => (
              <li key={s.id}><a href="#services" className="hover:text-white transition-colors">{s.title}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 text-gold">Atendimento</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start"><i className="fas fa-map-marker-alt mt-1 mr-2 text-midBlue"></i> R. Martins Fontes, 175 - Fazendinha</li>
            <li className="flex items-center"><i className="fas fa-phone mt-1 mr-2 text-midBlue"></i> {PHONE_DISPLAY}</li>
            <li className="flex items-center"><i className="fas fa-clock mt-1 mr-2 text-midBlue"></i> Seg - Sex: 08:00 - 18:00</li>
          </ul>
        </div>
      </div>
      
      {/* Dynamic Location Links */}
      <div className="border-t border-gray-800 pt-8 pb-8">
        <h5 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">Áreas de Atendimento (Bairros e Região Metropolitana)</h5>
        <div className="flex flex-wrap gap-2 text-xs text-gray-600 h-32 overflow-y-auto custom-scrollbar">
          {ALL_LOCATIONS.map((loc, idx) => (
            <React.Fragment key={idx}>
              <Link to={`/local/${loc.type}/${encodeURIComponent(loc.name)}`} className="hover:text-midBlue transition-colors">
                Fisioterapia em {loc.name}
              </Link>
              <span className="text-gray-800">|</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} D'Cellyss Fisioterapia. Todos os direitos reservados.</p>
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
        <button onClick={scrollToTop} className="w-12 h-12 bg-gray-700 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-600 transition-all">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
      <a href={`tel:+${PHONE_NUMBER}`} className="w-14 h-14 bg-midBlue text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-all animate-bounce">
        <i className="fas fa-phone-alt text-xl"></i>
      </a>
      <a href={`https://wa.me/${PHONE_NUMBER}?text=Olá!`} target="_blank" className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-green-600 transition-all transform hover:scale-110">
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
};

// --- Pages ---

const HomePage = () => (
  <>
    <Hero />
    <ConditionsSection />
    <ServicesList />
    <VideoSection />
    <About />
    <Testimonials />
    <FAQSection />
    <ContactForm />
  </>
);

const LocationPage = () => {
  const { type, name } = useParams();
  const decodedName = decodeURIComponent(name || '');
  const locationTitle = type === LocationType.CITY ? `na cidade de ${decodedName}` : `no bairro ${decodedName}`;
  const displayTitle = type === LocationType.CITY ? `${decodedName}` : `${decodedName} - Curitiba`;

  useEffect(() => {
    window.scrollTo(0, 0);
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
            A D'Cellyss leva saúde, bem-estar e tratamentos inovadores para os moradores de {decodedName}. Agende sua consulta gratuita hoje mesmo.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-deepBlue mb-4">Por que escolher a D'Cellyss em {decodedName}?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Se você mora ou trabalha em <strong>{decodedName}</strong>, saiba que a Clínica D'Cellyss é sua melhor opção para tratamentos de 
              Fisioterapia Regenerativa, Ozonioterapia, Terapia Neural e Drenagem Linfática. Nossa clínica está estrategicamente localizada 
              no bairro Fazendinha, oferecendo fácil acesso para pacientes vindo de {locationTitle}.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Entendemos as necessidades específicas da comunidade de {decodedName}. Muitas vezes, dores crônicas, estresse e problemas de mobilidade 
              afetam sua qualidade de vida. Nossa missão é oferecer um atendimento humanizado e técnicas de ponta para que você recupere sua vitalidade.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mt-6">
              {['Atendimento Humanizado', 'Fácil Acesso', 'Tecnologia Avançada', 'Profissionais Experientes'].map(item => (
                <li key={item} className="flex items-center text-gray-700 font-medium">
                  <i className="fas fa-check-circle text-midBlue mr-2"></i> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-deepBlue mb-4">Nossos Serviços para {decodedName}</h2>
            <p className="mb-6 text-gray-600">Oferecemos uma gama completa de serviços especializados:</p>
            <div className="grid sm:grid-cols-2 gap-6">
               {SERVICES.slice(0,4).map(s => (
                 <div key={s.id} className="flex items-start">
                   <div className="bg-babyBlue/20 p-3 rounded-lg mr-4 text-midBlue">
                     <i className={`fas ${s.icon}`}></i>
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-800">{s.title}</h4>
                     <p className="text-xs text-gray-500 mt-1 line-clamp-2">{s.description}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-midBlue to-deepBlue p-10 rounded-2xl text-white shadow-xl">
             <h3 className="text-2xl font-bold mb-4">Mora em {decodedName}?</h3>
             <p className="mb-6 opacity-90">Não deixe a dor limitar sua vida. Venha conhecer a D'Cellyss.</p>
             <Button variant="secondary" href={`https://wa.me/${PHONE_NUMBER}?text=Olá,%20sou%20de%20${encodeURIComponent(decodedName)}%20e%20gostaria%20de%20agendar`}>
               Agendar Avaliação Gratuita
             </Button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gold sticky top-24">
             <h3 className="font-bold text-xl mb-4 text-deepBlue">Contato Rápido</h3>
             <p className="text-sm text-gray-500 mb-6">Atendemos pacientes de {decodedName} e toda região metropolitana.</p>
             <div className="space-y-4">
               <a href={`tel:+${PHONE_NUMBER}`} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                 <i className="fas fa-phone-alt text-midBlue w-8"></i>
                 <span className="font-bold text-gray-700">{PHONE_DISPLAY}</span>
               </a>
               <a href={`https://wa.me/${PHONE_NUMBER}`} className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                 <i className="fab fa-whatsapp text-green-600 w-8"></i>
                 <span className="font-bold text-gray-700">WhatsApp</span>
               </a>
             </div>
             <div className="mt-6 pt-6 border-t">
               <h4 className="font-bold text-sm mb-2">Localização</h4>
               <p className="text-xs text-gray-600 mb-4">R. Martins Fontes, 175 - Fazendinha</p>
               <iframe src={MAP_EMBED_URL} width="100%" height="200" style={{border:0}} loading="lazy" className="rounded-lg"></iframe>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/local/:type/:name" element={<LocationPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}
