// Dados das premissas
const premissas = [
    {
        numero: "1",
        titulo: "Geração Alpha",
        categoria: "Comportamento geracional",
        icone: "👶",
        premissa: "A geração Alpha (nascidos após 2010) é atualmente a maior e mais diversa geração, cobrindo idades de 0 a 14 anos.",
        contexto: "Planejamento de currículos e definição de público-alvo para soluções digitais inclusivas.",
        fonte: "Relatório sobre Comportamentos da Geração Alpha. Shutterstock, 2024.",
        aplicacao: "Garantir diversidade na representação de personagens e adaptar conteúdos e produtos para usuários desta faixa etária."
    },
    {
        numero: "2",
        titulo: "Antecipação da imersão digital infantil",
        categoria: "Comportamento Digital",
        icone: "📱",
        premissa: "O uso de internet por crianças de 3 a 8 anos dobrou ou mais na última década, saltando para 71% (3-5 anos) e 82% (6-8 anos).",
        contexto: "Design de interfaces e conteúdo para a primeira infância, reconhecendo a imersão precoce.",
        fonte: "Uso de internet por crianças entre 6 e 8 anos dobrou na última década. Agência Brasil, 2025.",
        aplicacao: "Criar experiências digitais seguras e guiadas para menores de 8 anos, focando em habilidades fundamentais sob supervisão."
    },
    {
        numero: "3",
        titulo: "Uso de dispositivos móveis (geração Alpha)",
        categoria: "Comportamento Digital",
        icone: "📱",
        premissa: "A geração Alpha têm o primeiro acesso à tecnologia antes dos 6 anos (43%) via tablets; 58% recebem o primeiro celular aos 10 anos.",
        contexto: "Desenvolvimento de aplicativos e conteúdos para o público pré-escolar e início do fundamental.",
        fonte: "Relatório sobre Comportamentos da Geração Alpha. Shutterstock, 2024.",
        aplicacao: "Priorizar layouts responsivos para tablets e celular considerando a jornada do usuário entre dispositivos compartilhados e pessoais."
    },
    {
        numero: "4",
        titulo: "Como a geração Alpha prefere tirar dúvidas",
        categoria: "Comportamento geracional",
        icone: "👶",
        premissa: "A geração Alpha priorizam vídeos tutoriais (1º) e amigos/família (2º) para tirar dúvidas, buscando professores (3º) e IA (4º) em seguida.",
        contexto: "Estrutura de suporte e materiais de referência em plataformas de EAD.",
        fonte: "Relatório sobre Comportamentos da Geração Alpha. Shutterstock, 2024.",
        aplicacao: "Integrar vídeos curtos \"como fazer\", fóruns de colaboração entre amigos e/ou professores como métodos primários de suporte."
    },
    {
        numero: "5",
        titulo: "Conteúdos curtos para a geração Alpha",
        categoria: "Comportamento Digital",
        icone: "📱",
        premissa: "A geração Alpha busca simplicidade e velocidade, valorizando dicas rápidas, atalhos e insights acionáveis em vez de conteúdo longo.",
        contexto: "Modularização de conteúdo e formato de entrega (microlearning).",
        fonte: "Relatório sobre Comportamentos da Geração Alpha. Shutterstock, 2024.",
        aplicacao: "Fragmentar módulos complexos em unidades curtas e usar formatos como flashcards, mapas mentais, resumos do conteúdo e quizzes."
    },
    {
        numero: "6",
        titulo: "Propósito e engajamento social (geração Alpha)",
        categoria: "Comportamento geracional",
        icone: "👶",
        premissa: "Alphas são motivados por propósito (sustentabilidade, inclusão) e priorizam carreiras que ajudem pessoas e animais.",
        contexto: "Gamificação e narrativas de aprendizagem (storytelling) em torno de problemas reais.",
        fonte: "Relatório sobre Comportamentos da Geração Alpha. Shutterstock, 2024.",
        aplicacao: "Desenhar projetos educacionais com impacto social ou ambiental claro, alinhado aos valores e senso de propósito da geração."
    },
    {
        numero: "7",
        titulo: "Mobile-first (uso de celular no Brasil)",
        categoria: "Dispositivos e Acesso",
        icone: "💻",
        premissa: "98% dos jovens de 9 a 17 anos no Brasil acessam a internet via celular, sendo o único dispositivo para 32% das classes DE.",
        contexto: "Design de interface e desenvolvimento de plataformas educacionais e demais produtos digitais.",
        fonte: "TIC Kids Online 2024; Pew Research, 2024.",
        aplicacao: "O design deve ser mobile-first, garantindo usabilidade e funcionalidade total, mesmo em dispositivos ou conexões limitadas."
    },
    {
        numero: "8",
        titulo: "Queda do uso de computadores",
        categoria: "Dispositivos e Acesso",
        icone: "💻",
        premissa: "O acesso à internet via computadores diminuiu de 64% para 37% entre 2015 e 2024.",
        contexto: "Escolha de formato de mídia e desenvolvimento de produtos digitais que não dependam de computador ou em formato paisagem.",
        fonte: "TIC Kids Online Brasil 2024.",
        aplicacao: "Evitar a criação de conteúdos ou atividades que exijam o computador, priorizando o formato otimizado para celular."
    },
    {
        numero: "9",
        titulo: "Laptops como ferramenta de estudo e lazer",
        categoria: "Comportamento Digital",
        icone: "📱",
        premissa: "47% dos Alphas de 8 a 9 anos possuem laptops, introduzidos principalmente para uso escolar, games ou lazer.",
        contexto: "Transição do Ensino Fundamental I para o II, focando em atividades que exploram a capacidade de produção do laptop.",
        fonte: "Relatório sobre Comportamentos da Geração Alpha. Shutterstock, 2024.",
        aplicacao: "Desenvolver atividades de criação de conteúdo (edição, programação) para esta faixa etária, aproveitando o potencial do dispositivo."
    },
    {
        numero: "10",
        titulo: "Acesso à internet depende de classe social",
        categoria: "Dispositivos e Acesso",
        icone: "💻",
        premissa: "O acesso à Internet em deslocamento varia significativamente: 74% (AB), 44% (C) e 33% (DE) dos usuários de 9 a 17 anos.",
        contexto: "Criação de conteúdo para consumo em mobilidade, como podcasts e audiolivros.",
        fonte: "TIC Kids Online Brasil 2024.",
        aplicacao: "Para públicos de baixa renda, focar em formatos leves ou offline, pois a banda para consumo de mídia é menor."
    },
    {
        numero: "11",
        titulo: "Desigualdade de acesso a dispositivos",
        categoria: "Dispositivos e Acesso",
        icone: "💻",
        premissa: "O acesso a consoles e computadores é quase unânime nas classes A/B, mas nas classes C/D/E o acesso é feito por dispositivos móveis.",
        contexto: "Escolha do formato para jogos educacionais, simulações e plataformas.",
        fonte: "O que as famílias precisam saber sobre games — um guia para cuidadores de crianças e adolescentes. Homo Ludens, 2020.",
        aplicacao: "Garantir que experiências digitais sejam otimizadas para celular a fim de evitar a exclusão de classes mais baixas."
    },
    {
        numero: "12",
        titulo: "Insegurança docente no uso de tecnologia",
        categoria: "Tecnologia para docente",
        icone: "📚",
        premissa: "Professores frequentemente se sentem despreparados e pouco seguros para ministrar aulas utilizando a tecnologia.",
        contexto: "Design de interfaces de plataformas educacionais destinadas a professores.",
        fonte: "Relatório de monitoramento global da educação, resumo, 2023: a tecnologia na educação. Unesco, 2023.",
        aplicacao: "O design deve ser intuitivo, com tutoriais claros e suporte imediato, minimizando a curva de aprendizado para aumentar a adoção docente."
    },
    {
        numero: "13",
        titulo: "Autossuficiência na formação tecnológica",
        categoria: "Tecnologia para docente",
        icone: "📚",
        premissa: "Apenas 40% dos professores fizeram disciplina de Tecnologias Digitais na graduação, mas 94% buscaram formação tecnológica por conta própria.",
        contexto: "Oferta de recursos de capacitação e modelos de formação continuada.",
        fonte: "TIC Kids Educação 2022.",
        aplicacao: "Criar trilhas de aprendizagem modulares e autônomas, reconhecendo a iniciativa do professor em buscar conhecimento sob demanda."
    },
    {
        numero: "14",
        titulo: "Atualizações constantes no âmbito digital",
        categoria: "Multimídia e Estratégias Pedagógicas",
        icone: "🧠",
        premissa: "Produtos de tecnologia educacional mudam a cada 36 meses, em média, evoluindo mais rápido do que é possível avaliá-los.",
        contexto: "Desenvolvimento e manutenção de plataformas educacionais e produtos digitais.",
        fonte: "Relatório de monitoramento global da educação, resumo, 2023: a tecnologia na educação. Unesco, 2023.",
        aplicacao: "Priorizar soluções flexíveis e abertas (OER) que possam ser atualizadas e adaptadas rapidamente, evitando dependência de sistemas fechados."
    },
    {
        numero: "15",
        titulo: "Ausência de formação continuada em TIC",
        categoria: "Tecnologia para docente",
        icone: "📚",
        premissa: "44% dos professores da Educação Básica no Brasil não tiveram acesso a qualquer tipo de formação continuada sobre o uso de TIC.",
        contexto: "Programas de implementação de novas formações em tecnologia para docentes.",
        fonte: "TIC Kids Educação 2022.",
        aplicacao: "Integrar módulos de treinamento prático e contínuo no lançamento de qualquer ferramenta nova para compensar a deficiência formativa oficial."
    },
    {
        numero: "16",
        titulo: "Tecnologia como aliado na aprendizagem",
        categoria: "Multimídia e Estratégias Pedagógicas",
        icone: "🧠",
        premissa: "A tecnologia pode melhorar a aprendizagem (prática, instrução personalizada) e envolver estudantes (conteúdo variado, colaboração).",
        contexto: "Estruturação de aulas com conteúdos em formatos digitais.",
        fonte: "Relatório de monitoramento global da educação, resumo, 2023: a tecnologia na educação. Unesco, 2023.",
        aplicacao: "Projetar experiências que permitam caminhos de aprendizagem adaptáveis e utilizar formatos multimodais (vídeo, áudio, interativo, texto) para conteúdo."
    },
    {
        numero: "17",
        titulo: "Multimídia ativa habilidades cognitivas",
        categoria: "Multimídia e Estratégias Pedagógicas",
        icone: "🧠",
        premissa: "O uso de multimídia mobiliza seleção, organização e integração (3 habilidades cognitivas), motivando pela aproximação da realidade.",
        contexto: "Criação de materiais didáticos digitais complexos.",
        fonte: "Curso AVA MEC - O Uso de tecnologias digitais na formação de crianças, 2025.",
        aplicacao: "Usar elementos visuais e auditivos combinados para engajar os estudantes na organização e integração do conhecimento."
    },
    {
        numero: "18",
        titulo: "Uso de mídias sociais na aprendizagem",
        categoria: "Multimídia e Estratégias Pedagógicas",
        icone: "🧠",
        premissa: "Mídias digitais como vídeos, podcasts e redes sociais são eficazes para engajar, ampliar a aprendizagem e promover colaboração.",
        contexto: "Design de tarefas e projetos de comunicação e produção de conteúdo.",
        fonte: "Curso AVA MEC - Competências digitais no século XXI, 2025.",
        aplicacao: "Criar tarefas de produção de mídia (ex: \"faça um podcast ou vídeo explicativo\") para transformar o consumo passivo em criação ativa."
    },
    {
        numero: "19",
        titulo: "Uso de vídeos na aprendizagem",
        categoria: "Multimídia e Estratégias Pedagógicas",
        icone: "🧠",
        premissa: "Vídeos podem guiar atividades práticas, contextualizar teorias ou conter resumos de aulas para revisão do estudante.",
        contexto: "Produção de material de apoio e aulas invertidas em formato audiovisual.",
        fonte: "Curso AVA MEC - Competências digitais no século XXI, 2025.",
        aplicacao: "Produzir conteúdo educacional em formato de vídeo curto, focando na aplicação prática imediata."
    },
    {
        numero: "20",
        titulo: "Uso de podcast na aprendizagem",
        categoria: "Multimídia e Estratégias Pedagógicas",
        icone: "🧠",
        premissa: "Podcasts servem para criar discussões, convidar especialistas ou aprofundar tópicos curriculares como material complementar.",
        contexto: "Criação de conteúdo para consumo em áudio (deslocamento, revisão).",
        fonte: "Curso AVA MEC - Competências digitais no século XXI, 2025.",
        aplicacao: "Produzir conteúdo educacional em formato de podcast, desenvolvendo a escuta crítica e argumentação."
    },
    {
        numero: "21",
        titulo: "IA como aliado nas tarefas do professor",
        categoria: "Tecnologia para docente",
        icone: "📚",
        premissa: "A IA pode personalizar a aprendizagem e reduzir o tempo do professor em tarefas operacionais, além de auxiliar na identificação de plágio.",
        contexto: "Implementação de sistemas de correção automática e tutoria adaptativa.",
        fonte: "Relatório de monitoramento global da educação, resumo, 2023: a tecnologia na educação. Unesco, 2023.",
        aplicacao: "Utilizar ferramentas de IA para fornecer feedback imediato aos alunos em exercícios básicos, liberando o professor para o ensino complexo."
    },
    {
        numero: "22",
        titulo: "Vantagens do livro didático interativo",
        categoria: "Multimídia e Estratégias Pedagógicas",
        icone: "🧠",
        premissa: "A digitalização de conteúdo simplifica acesso, permitindo livros didáticos interativos e aprendizagem multimodal.",
        contexto: "Publicação de material didático e recursos educacionais abertos (REA).",
        fonte: "Relatório de monitoramento global da educação, resumo, 2023: a tecnologia na educação. Unesco, 2023.",
        aplicacao: "Converter materiais estáticos em formatos interativos que explorem áudio, vídeo e simulações para maximizar a retenção."
    },
    {
        numero: "23",
        titulo: "Jogos como meio de aprendizagem (geração Alpha)",
        categoria: "Comportamento geracional",
        icone: "👶",
        premissa: "A geração Alpha prefere, em primeiro lugar, aprender através de games, seguido por interações com pessoas ao vivo e pessoas online.",
        contexto: "Criação de experiências de aprendizagem gamificada.",
        fonte: "Relatório sobre Comportamentos da Geração Alpha. Shutterstock, 2024.",
        aplicacao: "Integrar mecânicas de jogos (desafios, recompensas, narrativa) em experiências educacionais digitais, além de jogos educacionais."
    },
    {
        numero: "24",
        titulo: "Jogos é principal atividade no meio digital",
        categoria: "Jogos e Aprendizagem",
        icone: "🎮",
        premissa: "Jogar online é a atividade digital mais realizada pelos usuários de 9 a 10 anos (81%), superando assistir a vídeos e ouvir música.",
        contexto: "Introdução de crianças à cultura digital e desenvolvimento de habilidades básicas através de jogos.",
        fonte: "TIC Kids Online Brasil 2024.",
        aplicacao: "Usar jogos digitais como ponto de partida para engajar os alunos mais novos, introduzindo conceitos curriculares de forma lúdica."
    },
    {
        numero: "25",
        titulo: "Jogos promovem desafios motores e cognitivos",
        categoria: "Jogos e Aprendizagem",
        icone: "🎮",
        premissa: "Jogos promovem autossuperação, desafios cognitivos/motores, permitindo aprender a persistir e perseverar ao refazer tarefas.",
        contexto: "Criação de metas e estruturas de feedback em plataformas educacionais.",
        fonte: "O que as famílias precisam saber sobre games — um guia para cuidadores de crianças e adolescentes. Homo Ludens, 2020.",
        aplicacao: "Desenhar sistemas gamificados incentivando a mentalidade de crescimento e prática."
    },
    {
        numero: "26",
        titulo: "Jogos com foco em desenvolvimento social e colaborativo",
        categoria: "Jogos e Aprendizagem",
        icone: "🎮",
        premissa: "52% das crianças participaram de jogos online com outros jogadores (60% na faixa etária de 11 a 12 anos).",
        contexto: "Design de jogos educacionais com modo multiplayer ou cooperativo.",
        fonte: "TIC Kids Online Brasil 2023.",
        aplicacao: "Focar o design cooperativo e social na pré-adolescência (11-12 anos) e garantir mecanismos para equilibrar a participação de gêneros."
    },
    {
        numero: "27",
        titulo: "Oportunidades e riscos no uso de jogos na educação",
        categoria: "Jogos e Aprendizagem",
        icone: "🎮",
        premissa: "Oportunidades e riscos de jogos dependem de variáveis do jogo (gênero, monetização, mecânica) e do contexto do jogador (classe social, mediação parental).",
        contexto: "Avaliação e seleção de jogos para uso pedagógico e definição de diretrizes de moderação.",
        fonte: "TIC Kids Online Brasil 2024.",
        aplicacao: "Analisar a mecânica do jogo (ex: se força pausas ou propicia chat de voz) antes de adotá-lo pedagogicamente para mitigar riscos."
    },
    {
        numero: "28",
        titulo: "Jogo como expectativa de experiência (geração Alpha)",
        categoria: "Comportamento geracional",
        icone: "👶",
        premissa: "A geração Alpha espera que a brincadeira faça parte de suas experiências, usando jogos para entretenimento, aprendizado e socialização.",
        contexto: "Engajamento do usuário e retenção em longo prazo.",
        fonte: "Relatório sobre Comportamentos da Geração Alpha. Shutterstock, 2024.",
        aplicacao: "Incorporar elementos lúdicos (desafios opcionais, narrativas envolventes) mesmo em conteúdos mais sérios, atendendo à expectativa de gamificação."
    },
    {
        numero: "29",
        titulo: "Conectividade lenta dificulta o uso de tecnologia",
        categoria: "Infraestrutura e Políticas",
        icone: "📁",
        premissa: "A baixa velocidade da Internet dificulta o uso de tecnologias digitais, relatada por 60% dos professores de escolas públicas.",
        contexto: "Planejamento de requisitos técnicos e formatos de conteúdo.",
        fonte: "TIC Kids Educação 2023.",
        aplicacao: "Projetar ferramentas digitais para funcionar offline ou exigir o mínimo de banda larga."
    },
    {
        numero: "30",
        titulo: "Baixa conectividade global nas escolas",
        categoria: "Infraestrutura e Políticas",
        icone: "📁",
        premissa: "Apenas 40% das escolas primárias, 50% das secundárias de 1º nível e 65% das de 2º nível estão conectadas à internet globalmente.",
        contexto: "Desenvolvimento de soluções educacionais para mercados globais ou regiões com baixa infraestrutura.",
        fonte: "Relatório de monitoramento global da educação, resumo, 2023: a tecnologia na educação. Unesco, 2023.",
        aplicacao: "Criar soluções de conteúdo que permitam o download prévio e o uso offline para garantir o acesso fora das grandes áreas urbanas."
    },
    {
        numero: "31",
        titulo: "Celular com uso pedagógico",
        categoria: "Infraestrutura e Políticas",
        icone: "📁",
        premissa: "O uso de celulares é permitido na escola para fins pedagógicos (com autorização), acessibilidade, inclusão e garantia de direitos.",
        contexto: "Justificativa pedagógica para a adoção de tecnologias móveis.",
        fonte: "Guia de conscientização para uso de celulares na escola. MEC.",
        aplicacao: "Desenhar atividades que só podem ser realizadas pelo celular, vinculando o uso do dispositivo a um objetivo pedagógico explícito."
    },
    {
        numero: "32",
        titulo: "Produção de REA com diversidade cultural brasileira",
        categoria: "Infraestrutura e Políticas",
        icone: "📁",
        premissa: "92% do conteúdo da biblioteca global OER Commons (Recursos Educacionais Abertos) está em inglês.",
        contexto: "Localização de conteúdo educacional e promoção da diversidade cultural.",
        fonte: "Relatório de monitoramento global da educação, resumo, 2023: a tecnologia na educação. Unesco, 2023.",
        aplicacao: "Priorizar a criação de conteúdo educacional na língua local e incentivar a produção de REA regionais para equilibrar a perspectiva global."
    },
    {
        numero: "33",
        titulo: "Internet como ferramenta de pesquisa",
        categoria: "Comportamento Digital",
        icone: "📱",
        premissa: "93% dos adolescentes de 15 a 17 anos e 72% das crianças de 9 a 10 anos usam a internet para pesquisas na realização de trabalhos escolares",
        contexto: "Disponibilizar nas plataforma de ensino ferramenta para busca dentro do conteúdo publicado ali.",
        fonte: "TIC Kids Online Brasil 2024.",
        aplicacao: "Disponibilizar nas plataforma de ensino ferramenta para busca dentro do conteúdo publicado ali."
    }
];

// Variáveis globais
let allCards = [];

// Função para mapear categorias para classes CSS
function getCategoryClass(categoria) {
    if (categoria.includes('Comportamento geracional')) return 'category-alpha';
    if (categoria.includes('Comportamento Digital')) return 'category-alpha';
    if (categoria.includes('Dispositivos e Acesso')) return 'category-dispositivos';
    if (categoria.includes('Tecnologia para docente')) return 'category-desafios';
    if (categoria.includes('Multimídia e Estratégias Pedagógicas')) return 'category-multimidia';
    if (categoria.includes('Jogos e Aprendizagem')) return 'category-jogos';
    if (categoria.includes('Infraestrutura e Políticas')) return 'category-infraestrutura';
    return '';
}

// Função para criar HTML do card
function createCard(data) {
    const numero = data.numero;
    const categoryClass = getCategoryClass(data.categoria);
    return `
        <div class="card-container" onclick="flipCard(event)">
            <div class="card">
                <div class="card-face card-front">
                    <div class="card-number">${numero}</div>
                    <div class="card-icon">${data.icone}</div>
                    <h3 class="card-title">${data.titulo}</h3>
                    <div class="card-category ${categoryClass}">${data.categoria}</div>
                </div>
                <div class="card-face card-back">
                    <button class="btn btn-info" onclick="showModal(event, 'fonte', '${data.numero}')">i</button>
                    <p class="premise-text">${data.premissa}</p>
                    <div class="card-buttons">
                        <button class="btn btn-context" onclick="showModal(event, 'contexto', '${data.numero}')">Contexto</button>
                        <button class="btn btn-apply" onclick="showModal(event, 'aplicacao', '${data.numero}')">Como aplicar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Função para renderizar cards
function renderCards(cardsToRender) {
    const grid = document.getElementById('cardsGrid');
    if (cardsToRender.length === 0) {
        grid.innerHTML = '<div class="no-results">Nenhuma premissa encontrada</div>';
    } else {
        grid.innerHTML = cardsToRender.map(card => createCard(card)).join('');
    }
}

// Função para virar card
function flipCard(event) {
    const target = event.target;
    if (target.classList.contains('btn') || target.closest('.btn')) {
        return;
    }
    const cardContainer = event.currentTarget;
    const card = cardContainer.querySelector('.card');
    card.classList.toggle('flipped');
}

// Função para mostrar modal
function showModal(event, type, numero) {
    event.stopPropagation();
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    
    const premissa = premissas.find(p => p.numero === numero);
    
    if (type === 'fonte') {
        modalTitle.textContent = 'Fonte';
        modalText.textContent = premissa.fonte;
    } else if (type === 'contexto') {
        modalTitle.textContent = 'Contexto';
        modalText.textContent = premissa.contexto;
    } else {
        modalTitle.textContent = 'Como Aplicar';
        modalText.textContent = premissa.aplicacao;
    }
    
    modal.classList.add('active');
}

// Função para fechar modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Event listener para fechar modal clicando fora
    document.getElementById('modal').addEventListener('click', function(event) {
        if (event.target === this) {
            closeModal();
        }
    });

    // Event listener para busca
    document.getElementById('searchInput').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        if (searchTerm === '') {
            renderCards(premissas);
            return;
        }
        
        const filtered = premissas.filter(p => {
            return p.numero.toLowerCase().includes(searchTerm) ||
                   p.titulo.toLowerCase().includes(searchTerm) ||
                   p.categoria.toLowerCase().includes(searchTerm) ||
                   p.premissa.toLowerCase().includes(searchTerm);
        });
        
        renderCards(filtered);
    });

    // Renderização inicial
    renderCards(premissas);
});

