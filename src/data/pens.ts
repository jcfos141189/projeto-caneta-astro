// Dados Técnicos Oficiais dos 9 Instrumentos — BNI Nikiti
export interface InkColor {
    name: string;
    hex: string;
    border: string;
    dryingTime?: string;
    lightfastness?: string;
}

export interface Pen {
    id: string;
    model: string;
    title: string;
    series: string;
    description: string;
    longDescription: string;
    tip: string;
    tipDetail: string;
    material: string;
    weight: string;
    balancePoint: string;
    mechanism: string;
    finish: string;
    price: string;
    status: string;
    badgeColor: string;
    category: "micropontas" | "drafting" | "especiais";
    image: string;
    specs: {
        diameter: string;
        length: string;
        feedRate: string;
        paperTypes: string;
        warranty: string;
    };
    inkColors: InkColor[];
}

export const PENS: Pen[] = [
    {
        id: "nikiti-01",
        model: "MOD. 01/09",
        title: "BNI Nikiti 0.1 — Pigmentum Original",
        series: "Série Nanquim Absoluto",
        description: "O modelo emblemático da marca. Desenvolvido para traçado milimétrico em papel vegetal e croquis de detalhamento fino.",
        longDescription: "A BNI Nikiti 0.1 é a pedra angular da nossa engenharia de escrita técnica. Fruto de 18 meses de testes balísticos e fluidodinâmicos, este instrumento entrega um traço contínuo de 0.10mm sem interrupções microscópicas. O corpo em alumínio aeroespacial 7075-T6 dissipa o calor do toque e mantém o fluxo de nanquim em pressão barométrica neutra, mesmo em traçados rápidos.",
        tip: "0.10mm Esfera Cerâmica",
        tipDetail: "Esfera de carbeto de silício com tolerância de ±0.001mm e retentor em aço cirúrgico.",
        material: "Alumínio 7075-T6 Usinado",
        weight: "18.4g (Centro Gravitacional a 52%)",
        balancePoint: "52% a partir da ponteira",
        mechanism: "Trava Neodímio N52",
        finish: "Anodizado Fosco Acetinado 25µm",
        price: "R$ 649",
        status: "Lote 02 em Produção",
        badgeColor: "text-[#00CC66]",
        category: "micropontas",
        image: "/assets/pens/pen-1.webp",
        specs: {
            diameter: "9.8mm de empunhadura",
            length: "142mm com tampa travada",
            feedRate: "0.08 ml/metro linear",
            paperTypes: "Vegetal 90g, Sulfite Técnico, Bristol 240g",
            warranty: "Garantia Vitalícia com 1ª Recalibragem Gratuita"
        },
        inkColors: [
            { name: "Nanquim Profundo", hex: "#0A0A0A", border: "#525252", dryingTime: "1.6s", lightfastness: "100+ anos (ISO 12757-2)" },
            { name: "Índigo Meia-Noite", hex: "#1A365D", border: "#3B82F6", dryingTime: "1.9s", lightfastness: "80+ anos arquival" },
            { name: "Sépia Arquival", hex: "#78350F", border: "#F59E0B", dryingTime: "2.1s", lightfastness: "90+ anos arquival" }
        ]
    },
    {
        id: "nikiti-005",
        model: "MOD. 02/09",
        title: "BNI Nikiti 0.05 — Micron Isograph",
        series: "Série Cartografia & Topografia",
        description: "Calibração sub-milimétrica com agulha de safira sintética. Precisão microscópica para curvas de nível e hachuras de alta densidade.",
        longDescription: "Projetada para os limites visíveis da resolução humana no papel. Equipada com capilar de safira sintética de monocristal artificial, a Nikiti 0.05 permite traçar curvas de nível e cotas topográficas com precisão cirúrgica sem abrir mão do fluxo contínuo de pigmento ultra-líquido.",
        tip: "0.05mm Safira Sintética",
        tipDetail: "Agulha cônica de safira polida a laser com amortecimento axial interno.",
        material: "Alumínio Monobloco 6061-T6",
        weight: "16.8g (Ultraleve Calibrado)",
        balancePoint: "49% a partir da ponteira",
        mechanism: "Alimentação Barométrica Ativa",
        finish: "Micro-Ranhurado CNC 360°",
        price: "R$ 890",
        status: "Série Limitada (300 un.)",
        badgeColor: "text-[#FF3300]",
        category: "micropontas",
        image: "/assets/pens/pen-2.webp",
        specs: {
            diameter: "9.2mm de empunhadura anatômica",
            length: "139mm",
            feedRate: "0.04 ml/metro linear",
            paperTypes: "Papel Manteiga 40g, Vegetal 110g, Mylar",
            warranty: "Garantia de Calibração Micrométrica 3 Anos"
        },
        inkColors: [
            { name: "Nanquim Profundo", hex: "#0A0A0A", border: "#525252", dryingTime: "1.2s", lightfastness: "100+ anos" },
            { name: "Índigo Meia-Noite", hex: "#1A365D", border: "#3B82F6", dryingTime: "1.4s", lightfastness: "80+ anos" },
            { name: "Grafite Carbono", hex: "#374151", border: "#9CA3AF", dryingTime: "1.3s", lightfastness: "100+ anos" }
        ]
    },
    {
        id: "nikiti-02",
        model: "MOD. 03/09",
        title: "BNI Nikiti 0.2 — Drafter Pro",
        series: "Série Croqui & Drafting",
        description: "Caneta de resposta rápida para desenhos conceituais e perspectivas livres com centro de gravidade neutro.",
        longDescription: "O instrumento predileto dos arquitetos conceituais. A Nikiti 0.2 foi forjada em Titânio Grau 5 usinado em baixa rotação, conferindo rigidez torsional inigualável e uma textura jateada a microesferas de vidro que previne o deslizamento mesmo em sessões criativas de 8 horas ininterruptas.",
        tip: "0.20mm Carboneto de Tungstênio",
        tipDetail: "Esfera de alta dureza Rockwell 92HRA com sistema antigotejamento por gravidade.",
        material: "Titânio Grau 5 (Ti-6Al-4V)",
        weight: "21.2g (Massa de Inércia Balanceada)",
        balancePoint: "50% centro exato",
        mechanism: "Retração Axial Esferizada",
        finish: "Jateado a Microesferas Cerâmicas",
        price: "R$ 789",
        status: "Próximo Lançamento",
        badgeColor: "text-amber-500",
        category: "drafting",
        image: "/assets/pens/pen-3.webp",
        specs: {
            diameter: "10.1mm com recartilhado sutil",
            length: "144mm",
            feedRate: "0.12 ml/metro linear",
            paperTypes: "Croqui Canson 90g, Papel Kraft, Vergê 120g",
            warranty: "Garantia Vitalícia do Chassi de Titânio"
        },
        inkColors: [
            { name: "Nanquim Profundo", hex: "#0A0A0A", border: "#525252", dryingTime: "1.8s", lightfastness: "100+ anos" },
            { name: "Terracota Mineral", hex: "#9A3412", border: "#F97316", dryingTime: "2.3s", lightfastness: "75+ anos" },
            { name: "Azul da Prússia", hex: "#0C4A6E", border: "#06B6D4", dryingTime: "2.0s", lightfastness: "85+ anos" }
        ]
    },
    {
        id: "nikiti-035",
        model: "MOD. 04/09",
        title: "BNI Nikiti 0.35 — Blueprint Master",
        series: "Série Plantas & Pranchas",
        description: "Linhas estruturais nítidas e constantes que não borram sob réguas paralelas nem esquadros metálicos de 4mm.",
        longDescription: "Projetada especificamente para o rigor do canteiro e pranchas executivas. A Nikiti 0.35 possui um pescoço estendido de 5.5mm em aço inoxidável retificado, garantindo que a ponta passe rente ao chanfro de réguas T e esquadros sem acumular nanquim na aresta da ferramenta.",
        tip: "0.35mm Aço Valvo Calibrado",
        tipDetail: "Tubo capilar alongado com chanfro anti-contaminação para réguas técnicas.",
        material: "Latão Náutico Usinado C360",
        weight: "24.8g (Firmeza para Linhas Retas)",
        balancePoint: "47% focado na ponteira",
        mechanism: "Rosca Quádrupla Rápida (1/4 de volta)",
        finish: "Pátina Industrial Ativa",
        price: "R$ 820",
        status: "Protótipo Aprovado",
        badgeColor: "text-blue-500",
        category: "drafting",
        image: "/assets/pens/pen-4.webp",
        specs: {
            diameter: "10.4mm",
            length: "146mm",
            feedRate: "0.19 ml/metro linear",
            paperTypes: "Plantas Offset 90g-150g, Papel Océ, Poliéster Técnico",
            warranty: "Garantia de 5 Anos com Reposição de Selos"
        },
        inkColors: [
            { name: "Azul da Prússia", hex: "#0C4A6E", border: "#06B6D4", dryingTime: "2.2s", lightfastness: "85+ anos" },
            { name: "Nanquim Profundo", hex: "#0A0A0A", border: "#525252", dryingTime: "1.8s", lightfastness: "100+ anos" },
            { name: "Carmim Escarlate", hex: "#991B1B", border: "#EF4444", dryingTime: "2.4s", lightfastness: "70+ anos" }
        ]
    },
    {
        id: "nikiti-05",
        model: "MOD. 05/09",
        title: "BNI Nikiti 0.5 — Monolith Matte",
        series: "Série Executiva & Canteiro",
        description: "Construção ultra-robusta com revestimento DLC anti-risco para suportar anotações técnicas sob qualquer clima de obra.",
        longDescription: "O ápice da resiliência tátil. O corpo monobloco em Aço Inox 316L recebe tratamento Diamond-Like Carbon (DLC) a vácuo, resultando em uma superfície preta pura, fria ao toque e virtualmente imune a arranhões de chaves, ferramentas ou atrito contínuo em pranchetas de campo.",
        tip: "0.50mm Roller Cerâmico Híbrido",
        tipDetail: "Roller esferizado com microcanais helicoidais de alimentação rápida.",
        material: "Aço Inox 316L DLC",
        weight: "22.0g",
        balancePoint: "51% ponto de pivô balanceado",
        mechanism: "Pistão Interno Reversível",
        finish: "Diamond-Like Carbon (DLC Fosco)",
        price: "R$ 590",
        status: "Lista de Espera",
        badgeColor: "text-stone-400",
        category: "drafting",
        image: "/assets/pens/pen-5.webp",
        specs: {
            diameter: "10.0mm",
            length: "141mm",
            feedRate: "0.24 ml/metro linear",
            paperTypes: "Cadernos de Campo à Prova d'Água, Sulfite, Cartão 300g",
            warranty: "Garantia Vitalícia do Revestimento DLC"
        },
        inkColors: [
            { name: "Preto Obsidiana", hex: "#0A0A0A", border: "#FFFFFF", dryingTime: "1.9s", lightfastness: "100+ anos" },
            { name: "Vinho Borgonha", hex: "#881337", border: "#F43F5E", dryingTime: "2.5s", lightfastness: "75+ anos" },
            { name: "Cinza Basalto", hex: "#475569", border: "#94A3B8", dryingTime: "2.0s", lightfastness: "90+ anos" }
        ]
    },
    {
        id: "nikiti-08",
        model: "MOD. 06/09",
        title: "BNI Nikiti 0.8 — Bold Calligraph",
        series: "Série Caligrafia & Hachura",
        description: "Ponta chanfrada em 15 graus para títulos e cotas arquiteturais marcantes com fluxo generoso de nanquim puro.",
        longDescription: "Inspirada nos mestres de caligrafia técnica modernista e nas anotações de pranchas clássicas. A Nikiti 0.8 confere expressividade imediata a títulos, legendas e hachuras de seções construtivas, permitindo alternar entre traços espessos de 0.8mm e arestas finas de 0.2mm pelo ângulo da empunhadura.",
        tip: "0.80mm Biselada 15°",
        tipDetail: "Ponteira chanfrada com acabamento lapidado para máxima expressividade de traço.",
        material: "Bronze Fósforo Usinado",
        weight: "25.5g",
        balancePoint: "48% peso sólido frontal",
        mechanism: "Tampa Magnética Soft-Click",
        finish: "Bronze Escovado Manualmente",
        price: "R$ 680",
        status: "Em Calibração Final",
        badgeColor: "text-amber-500",
        category: "especiais",
        image: "/assets/pens/pen-6.webp",
        specs: {
            diameter: "10.8mm",
            length: "143mm",
            feedRate: "0.38 ml/metro linear",
            paperTypes: "Papel Algodão 300g, Papel Aquarela Satinado, Pergaminho",
            warranty: "Garantia de 5 Anos"
        },
        inkColors: [
            { name: "Âmbar Queimado", hex: "#B45309", border: "#F59E0B", dryingTime: "2.8s", lightfastness: "80+ anos" },
            { name: "Sépia Arquival", hex: "#78350F", border: "#F59E0B", dryingTime: "2.6s", lightfastness: "95+ anos" },
            { name: "Nanquim Profundo", hex: "#0A0A0A", border: "#525252", dryingTime: "2.2s", lightfastness: "100+ anos" }
        ]
    },
    {
        id: "nikiti-stealth",
        model: "MOD. 07/09",
        title: "BNI Nikiti — Phantom Stealth",
        series: "Série Monocromática Especial",
        description: "Acabamento 100% preto fosco e sem logomarcas aparentes. Silêncio visual absoluto para imersão no raciocínio arquitetônico.",
        longDescription: "Desenhada sob o manifesto do minimalismo radical. Zero marcações visíveis na superfície externa, gravação a laser invisível sob luz ambiente no interior da tampa rosqueada. Um bloco contínuo de alumínio negro fosco antirreflexo que desaparece na mão do projetista.",
        tip: "0.15mm Micro-Roller Híbrido",
        tipDetail: "Ponta de precisão com micro-acoplador térmico silencioso.",
        material: "Alumínio Anodizado Black 7075",
        weight: "17.9g",
        balancePoint: "50% ponto neutro",
        mechanism: "Clipe Retrátil Oculto",
        finish: "Preto Fosco Antirreflexo Total",
        price: "R$ 740",
        status: "Edição Exclusiva",
        badgeColor: "text-stone-300",
        category: "especiais",
        image: "/assets/pens/pen-7.webp",
        specs: {
            diameter: "9.6mm",
            length: "140mm",
            feedRate: "0.11 ml/metro linear",
            paperTypes: "Grid Arquitetural 80g, Cadernos Moleskine, Papel Preto Nanquim",
            warranty: "Garantia Vitalícia Exclusiva Stealth"
        },
        inkColors: [
            { name: "Preto Obsidiana", hex: "#0A0A0A", border: "#FFFFFF", dryingTime: "1.7s", lightfastness: "100+ anos" },
            { name: "Grafite Carbono", hex: "#374151", border: "#9CA3AF", dryingTime: "1.8s", lightfastness: "100+ anos" },
            { name: "Cinza Basalto", hex: "#475569", border: "#94A3B8", dryingTime: "2.0s", lightfastness: "90+ anos" }
        ]
    },
    {
        id: "nikiti-brass",
        model: "MOD. 08/09",
        title: "BNI Nikiti Artisan — Raw Brass 0.25",
        series: "Série Pátina Viva",
        description: "Latão maciço sem verniz industrial. A superfície oxida naturalmente conforme seu uso, registrando sua trajetória criativa.",
        longDescription: "Cada exemplar se torna único nas primeiras 4 semanas de uso. Sem qualquer camada de laca sintética, o calor da sua palma e a acidez natural da pele criam uma pátina viva e irreproduzível, transformando o instrumento no reflexo direto dos projetos e noites de prancheta.",
        tip: "0.25mm Ponteira Cônica Usinada",
        tipDetail: "Ponta usinada em torno CNC de ultraprecisão com tolerância micrométrica.",
        material: "Latão Maciço Dourado C260",
        weight: "26.2g (Presença e Firmeza)",
        balancePoint: "46% peso gravitacional dianteiro",
        mechanism: "Alimentação Capilar Tripla",
        finish: "Latão Bruto Torneado",
        price: "R$ 760",
        status: "Pré-Produção",
        badgeColor: "text-yellow-600",
        category: "especiais",
        image: "/assets/pens/pen-8.webp",
        specs: {
            diameter: "10.2mm",
            length: "142mm",
            feedRate: "0.15 ml/metro linear",
            paperTypes: "Papéis Artesanais, Arches 185g, Papel Pautado Vintage",
            warranty: "Garantia Vitalícia do Metal Maciço"
        },
        inkColors: [
            { name: "Terracota Mineral", hex: "#9A3412", border: "#F97316", dryingTime: "2.3s", lightfastness: "75+ anos" },
            { name: "Verde Musgo Imperial", hex: "#064E3B", border: "#10B981", dryingTime: "2.5s", lightfastness: "80+ anos" },
            { name: "Sépia Arquival", hex: "#78350F", border: "#F59E0B", dryingTime: "2.1s", lightfastness: "90+ anos" }
        ]
    },
    {
        id: "nikiti-carbon",
        model: "MOD. 09/09",
        title: "BNI Nikiti Aero — Feather Carbon 0.1",
        series: "Série Flagship Ultraleve",
        description: "Fibra de carbono forjada e fixadores em titânio. Pesando somente 12g, reduz o cansaço do punho a praticamente zero.",
        longDescription: "O ápice dos materiais avançados na escrita manual. Fabricada a partir de fibras de carbono pré-impregnadas prensadas a 120 bar e curadas em autoclave, combinadas com empunhadura em titânio aeroespacial. O resultado é o instrumento de traçado técnico mais leve e resistente já projetado.",
        tip: "0.10mm Cerâmica Ultra-Fina",
        tipDetail: "Micro-esfera de óxido de zircônio montada em colar de titânio.",
        material: "Fibra de Carbono Forjada + Titânio",
        weight: "12.2g (Sensação de Pluma)",
        balancePoint: "50% centro neutro absoluto",
        mechanism: "Rosca Titânio com O-Ring Vedante",
        finish: "Padrão Carbono Forjado Marmorizado",
        price: "R$ 950",
        status: "Edição Flagship",
        badgeColor: "text-[#FF3300]",
        category: "micropontas",
        image: "/assets/pens/pen-9.webp",
        specs: {
            diameter: "9.9mm",
            length: "140mm",
            feedRate: "0.09 ml/metro linear",
            paperTypes: "Grid Arquitetural, Papel Sulfite 75g-120g, Vegetal",
            warranty: "Garantia Vitalícia Aero-Carbon"
        },
        inkColors: [
            { name: "Nanquim Profundo", hex: "#0A0A0A", border: "#525252", dryingTime: "1.6s", lightfastness: "100+ anos" },
            { name: "Carmim Escarlate", hex: "#991B1B", border: "#EF4444", dryingTime: "2.2s", lightfastness: "70+ anos" },
            { name: "Azul Cobalto Profundo", hex: "#312E81", border: "#6366F1", dryingTime: "2.0s", lightfastness: "85+ anos" }
        ]
    }
];

export function getPenById(id: string): Pen | undefined {
    return PENS.find(p => p.id === id);
}

