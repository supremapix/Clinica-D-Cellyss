
import { Service, Testimonial, LocationData, LocationType } from './types';

export const PHONE_NUMBER = '5541999163976'; // Format for API
export const PHONE_DISPLAY = '(41) 99916-3976';
export const EMAIL_CONTACT = 'contato@decellyss.com.br';
export const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.484897864876!2d-49.31757362391696!3d-25.45548657754668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce38e2e2a3c75%3A0x8c7c9c0c1b1b1b1b!2sR.%20Martins%20Fontes%2C%20175%20-%20Fazendinha%2C%20Curitiba%20-%20PR%2C%2081330-350!5e0!3m2!1spt-BR!2sbr!4v1689123456789!5m2!1spt-BR!2sbr";

// SERVIÇOS OTIMIZADOS PARA SEO E CONVERSÃO
export const SERVICES: Service[] = [
  {
    id: 'fisioterapia-regenerativa',
    title: 'Fisioterapia Regenerativa',
    description: 'Tratamento avançado focado na causa raiz da dor. Utilizamos tecnologias que aceleram a biologia natural do corpo para reparar tecidos, tendões e articulações desgastadas, evitando cirurgias desnecessárias.',
    benefits: ['Ideal para Hérnia de Disco e Artrose', 'Regeneração de cartilagem e tendões', 'Alívio imediato de dores crônicas'],
    icon: 'fa-user-injured'
  },
  {
    id: 'ozonioterapia',
    title: 'Ozonioterapia Medicinal',
    description: 'O poder do Ozônio Medicinal para combater inflamações severas e fortalecer a imunidade. Tratamento integrativo padrão ouro para dores na coluna, fibromialgia e feridas de difícil cicatrização.',
    benefits: ['Potente ação anti-inflamatória e analgésica', 'Combate vírus, fungos e bactérias', 'Melhora a circulação e oxigenação celular'],
    icon: 'fa-lungs'
  },
  {
    id: 'terapia-neural',
    title: 'Terapia Neural',
    description: 'Técnica alemã que reequilibra o sistema nervoso autônomo. Indicada para quem sofre de dores persistentes que não respondem a tratamentos convencionais, ansiedade, insônia e cicatrizes dolorosas.',
    benefits: ['Desbloqueio de interferências nervosas', 'Tratamento eficaz para enxaquecas e cicatrizes', 'Regulação do sono e estresse'],
    icon: 'fa-brain'
  },
  {
    id: 'photon-dome',
    title: 'Bio Aquecedor Photon Dome II',
    description: 'Tecnologia japonesa de emissão de raios infravermelhos longos. Promove uma desintoxicação profunda, acelera o metabolismo e auxilia no emagrecimento saudável e redução de medidas.',
    benefits: ['Detoxificação e queima calórica', 'Redução de ácido lático e dores musculares', 'Melhora da elasticidade da pele'],
    icon: 'fa-temperature-arrow-up',
    isNew: true
  },
  {
    id: 'drenagem-linfatica',
    title: 'Drenagem Linfática Manual',
    description: 'Método comprovado para eliminar a retenção de líquidos, reduzir o inchaço corporal e combater a celulite. Essencial no pós-operatório de cirurgias plásticas para uma recuperação rápida.',
    benefits: ['Eliminação de toxinas e inchaço', 'Recuperação acelerada de pós-operatório', 'Redução visível de medidas'],
    icon: 'fa-water'
  }
];

// DEPOIMENTOS FOCADOS EM RESULTADOS REAIS
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Maria Oliveira",
    treatment: "Ozonioterapia para Coluna",
    text: "Eu tinha uma hérnia de disco que me impedia de andar. Com a Ozonioterapia da Dra. Célia, evitei a cirurgia e hoje vivo sem dor. O atendimento em Curitiba é impecável!",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Mendes",
    treatment: "Fisioterapia Regenerativa",
    text: "Já tinha tentado de tudo para minha artrose no joelho. A Fisioterapia Regenerativa foi a única que devolveu minha mobilidade. Profissionais de alta performance!",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Costa",
    treatment: "Drenagem e Estética",
    text: "O Photon Dome é incrível para desinchar. A clínica no Fazendinha é super aconchegante e fácil de estacionar. Recomendo para todas as minhas amigas.",
    rating: 5
  }
];

// CONDIÇÕES EXTENSIVAS (LONG TAIL KEYWORDS)
export const CONDITIONS = [
  { name: "Hérnia de Disco", icon: "fa-compact-disc" },
  { name: "Dor no Nervo Ciático", icon: "fa-bolt" },
  { name: "Artrose e Desgaste", icon: "fa-bone" },
  { name: "Fibromialgia", icon: "fa-person-cane" },
  { name: "Dores na Coluna (Lombar/Cervical)", icon: "fa-user-injured" }, 
  { name: "Tendinites e Bursites", icon: "fa-fire" },
  { name: "Ansiedade e Insônia", icon: "fa-cloud-moon" },
  { name: "Enxaqueca Crônica", icon: "fa-head-side-virus" },
  { name: "Recuperação Pós-Cirúrgica", icon: "fa-user-nurse" },
  { name: "Celulite e Gordura Localizada", icon: "fa-person-dress" }
];

// FAQS QUE QUEBRAM OBJEÇÕES E EDUCAM
export const FAQS = [
  {
    question: "Para quem é indicada a Ozonioterapia?",
    answer: "A Ozonioterapia é indicada para pacientes com dores crônicas, inflamações (como artrite e artrose), problemas circulatórios, feridas que não cicatrizam e baixa imunidade. É um tratamento seguro e natural, realizado pela Dra. Célia com protocolos rigorosos."
  },
  {
    question: "A Fisioterapia Regenerativa substitui a cirurgia?",
    answer: "Em muitos casos de hérnia de disco, lesões de tendão e desgastes articulares, a Fisioterapia Regenerativa consegue reparar o tecido e eliminar a dor, evitando a necessidade de procedimentos cirúrgicos invasivos."
  },
  {
    question: "Como funciona a consulta de avaliação?",
    answer: "Na sua primeira visita, realizamos uma análise detalhada do seu histórico e sintomas. Identificamos a causa raiz do problema e montamos um plano de tratamento personalizado, combinando técnicas como Terapia Neural e Ozônio para resultados mais rápidos."
  },
  {
    question: "Aceitam planos de saúde?",
    answer: "Trabalhamos com sistema de reembolso assistido. Você realiza o tratamento particular com a qualidade premium que merece, e nós fornecemos toda a documentação para que você solicite o reembolso junto ao seu convênio."
  },
  {
    question: "Onde a Clínica D'Cellyss está localizada?",
    answer: "Estamos localizados no bairro Fazendinha em Curitiba, na Rua Martins Fontes, 175 (Shop Megave, Loja 17). Temos estacionamento fácil e atendemos pacientes de toda a região metropolitana."
  }
];

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
