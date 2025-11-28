
import { Service, Testimonial, LocationData, LocationType } from './types';

export const PHONE_NUMBER = '5541999163976'; // Format for API
export const PHONE_DISPLAY = '(41) 99916-3976';
export const EMAIL_CONTACT = 'contato@decellyss.com.br';
export const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.484897864876!2d-49.31757362391696!3d-25.45548657754668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce38e2e2a3c75%3A0x8c7c9c0c1b1b1b1b!2sR.%20Martins%20Fontes%2C%20175%20-%20Fazendinha%2C%20Curitiba%20-%20PR%2C%2081330-350!5e0!3m2!1spt-BR!2sbr!4v1689123456789!5m2!1spt-BR!2sbr";

export const SERVICES: Service[] = [
  {
    id: 'fisioterapia-regenerativa',
    title: 'Fisioterapia Regenerativa',
    description: 'A solução definitiva para dores constantes. Recupere a saúde e a vitalidade promovendo a regeneração de tecidos danificados.',
    benefits: ['Alívio eficaz de dores crônicas', 'Regeneração tecidual acelerada', 'Recuperação da mobilidade'],
    // Official Image
    image: 'https://decellyss.com.br/assets/images/esttica-avanada-e-fisioterapia-na-dcellyss-curitiba-658x651.png', 
    icon: 'fa-heart-pulse'
  },
  {
    id: 'ozonioterapia',
    title: 'Ozonioterapia',
    description: 'Terapia natural reconhecida mundialmente. Agende sua consulta gratuita e saiba como o ozônio pode transformar sua imunidade.',
    benefits: ['Anti-inflamatório potente', 'Fortalecimento da imunidade', 'Melhora na oxigenação celular'],
    // Official Image
    image: 'https://decellyss.com.br/assets/images/ozonioterapia-e-bem-estar-dcellyss-fazendinha-curitiba-658x651.png',
    icon: 'fa-lungs'
  },
  {
    id: 'terapia-neural',
    title: 'Terapia Neural',
    description: 'Equilíbrio do sistema nervoso por meio de estímulos suaves. Ideal para quem sofre de insônia, estresse e dores crônicas.',
    benefits: ['Regulação do sistema nervoso', 'Tratamento de insônia e estresse', 'Alívio de dores sem remédios fortes'],
    // Official Image
    image: 'https://decellyss.com.br/assets/images/ozonioterapia-e-bem-estar-dcellyss-fazendinha-terapia-neural-curitiba-658x651.png',
    icon: 'fa-brain'
  },
  {
    id: 'photon-dome',
    title: 'Bio Aquecedor Photon Dome II',
    description: 'Tecnologia de ponta em bioestimulação por infravermelho longo. A última palavra em estética e saúde.',
    benefits: ['Detoxificação profunda', 'Acelera o metabolismo', 'Renovação celular'],
    // Official Image
    image: 'https://decellyss.com.br/assets/images/bio-aquecedor-photon-dome-ii-ltima-palavra-em-aparelho-esttico-venha-conhecer-essa-tecnologia-aqui-na-dcellyss-658x651.png',
    icon: 'fa-solar-panel',
    isNew: true
  },
  {
    id: 'drenagem-linfatica',
    title: 'Drenagem Linfática',
    description: 'Perca medidas, peso e celulite. Técnica de massagem focada na eliminação de excesso de líquidos.',
    benefits: ['Redução de inchaço', 'Combate à celulite', 'Sensação de leveza imediata'],
    // Keeping high quality placeholder as no specific official image was provided in the source text for this specific service
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
    icon: 'fa-water'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Maria Oliveira",
    treatment: "Ozonioterapia",
    text: "Sofria com dores nas costas há anos. Com a Ozonioterapia da Dra. Célia, finalmente voltei a ter qualidade de vida!",
    rating: 5
  },
  {
    id: 2,
    name: "João Silva",
    treatment: "Fisioterapia Regenerativa",
    text: "Atendimento excelente no Fazendinha. A equipe é muito atenciosa e o tratamento regenerativo funcionou onde outros falharam.",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Costa",
    treatment: "Drenagem Linfática",
    text: "Ambiente acolhedor e resultados visíveis logo nas primeiras sessões. Recomendo muito!",
    rating: 5
  }
];

export const CONDITIONS = [
  { name: "Dores na Coluna", icon: "fa-person-cane" },
  { name: "Hérnia de Disco", icon: "fa-compact-disc" },
  { name: "Artrose e Artrite", icon: "fa-bone" },
  { name: "Fibromialgia", icon: "fa-child-reaching" },
  { name: "Ansiedade e Estresse", icon: "fa-head-side-virus" },
  { name: "Insônia", icon: "fa-bed" },
  { name: "Celulite e Gordura", icon: "fa-person-dress" },
  { name: "Enxaqueca", icon: "fa-bolt" },
  { name: "Pós-Operatório", icon: "fa-user-nurse" },
  { name: "Dores Musculares", icon: "fa-dumbbell" }
];

export const FAQS = [
  {
    question: "A Ozonioterapia é segura?",
    answer: "Sim, a Ozonioterapia é uma técnica segura e reconhecida, realizada por profissionais habilitados. Na D'Cellyss, seguimos todos os protocolos rigorosos de segurança."
  },
  {
    question: "Quantas sessões são necessárias?",
    answer: "O número de sessões varia de acordo com cada caso e patologia. Na sua consulta de avaliação gratuita, elaboraremos um plano de tratamento personalizado."
  },
  {
    question: "Aceitam convênios?",
    answer: "Trabalhamos com atendimentos particulares para garantir a máxima qualidade e personalização, mas emitimos nota fiscal para que você possa solicitar reembolso junto ao seu convênio."
  },
  {
    question: "Onde a clínica está localizada?",
    answer: "Estamos no coração do Fazendinha, na Rua Martins Fontes, 175, dentro do Shop Megave (Loja 17), em Curitiba."
  }
];

// Listas completas conforme solicitado
export const NEIGHBORHOODS = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", 
  "Boqueirão de Cima", "Tanguá", "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", 
  "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Oficinas", "Vila Fanny", "Vila Hauer", 
  "Batel Soho", "Alto da Rua XV", "CIC Norte", "CIC Central", "CIC Sul", "Vila Guaíra", 
  "Centro Histórico", "Ecoville", "Carmo Abranches", "Água Verde", "Ahú (Alto da Glória)", 
  "Alto Boqueirão", "Alto da Glória", "Alto da XV", "Atuba", "Augusta", "Bacacheri", 
  "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho (Champagnat)", "Boa Vista", "Bom Retiro", 
  "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", 
  "Campo Comprido", "Campo de Santana", "Capão da Imbuia", "Capão Raso", "Cascatinha", 
  "Caximba", "Centro", "Centro Cívico", "Cidade Industrial de Curitiba (CIC)", "Cristo Rei", 
  "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", 
  "Jardim Botânico", "Jardim das Américas", "Jardim Social", "Juvevê", "Lamenha Pequena", 
  "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", "Orleans", "Parolin", "Pilarzinho", 
  "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", 
  "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco", 
  "São João", "São Lourenço", "São Miguel", "Vila Pantanal", "Seminário", "Sítio Cercado", 
  "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", 
  "Vista Alegre", "Xaxim", "Santa Quitéria Velha", "Portão Velho", "Guaíra Velho", 
  "Uberaba de Cima", "Uberaba de Baixo", "São Braz Velho", "Cidade Industrial (CIC)", 
  "Vila Verde", "Vila Barigui", "Vila Sabará", "Augusta", "São Miguel", "Caiuá", "Xaxim Velho", 
  "Fazendinha-Portão", "Campo Comprido Velho", "Bacacheri Velho", "Capão da Imbuia Velho", 
  "Pinheirinho Velho", "Vila São Pedro (Uberaba)", "Vila Osternack (Sítio Cercado)", 
  "Conjunto Caiuá (CIC)", "Conjunto Parigot de Souza (CIC)", "Vila Nossa Senhora da Luz (CIC)", 
  "Vila Torres", "Vila Barigui (CIC)", "Vila Reno (CIC)", "Vila Audi (CIC)"
];

export const CITIES_RMC = [
  "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", 
  "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", 
  "Campo Magro", "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", "Fazenda Rio Grande", 
  "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", "Quatro Barras", 
  "Quitandinha", "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", "Tijucas do Sul", 
  "Tunas do Paraná", "Curitiba"
];

export const ALL_LOCATIONS: LocationData[] = [
  ...NEIGHBORHOODS.map(n => ({ name: n, type: LocationType.NEIGHBORHOOD })),
  ...CITIES_RMC.map(c => ({ name: c, type: LocationType.CITY }))
];
