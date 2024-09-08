let dados = [
    {
        titulo : "Rayssa Leal",
        descricao : "A fadinha do skate. Rayssa Leal é uma skatista brasileira que conquistou o mundo com seu talento e carisma. Aos poucos anos de idade, ela já coleciona títulos e patrocinadores, sendo um dos maiores nomes do skate feminino no mundo.",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        tags: "skate fada sk8"
    },
    {
        titulo: "Beatriz Souza",
        descricao: "A nova estrela do judô. Beatriz Souza é uma judoca brasileira que vem se destacando no cenário internacional. Com suas técnicas apuradas e determinação, ela é uma das grandes promessas do judô brasileiro.",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Souza",
        tags: "judô judo judoca judoka"
    },
    {
        titulo: "Rebeca Andrade",
        descricao: "Um ícone da ginástica brasileira. Rebeca Andrade é uma ginasta brasileira que marcou história ao se tornar a primeira brasileira a conquistar uma medalha de ouro olímpica na ginástica artística. Com sua força, determinação e talento, ela inspirou uma geração de atletas e se consolidou como um dos maiores nomes do esporte brasileiro.",
        link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        tags: "ouro ginastica, ginasta ginástica"
    },
    {
        titulo: "Alison dos Santos",
        descricao: "Conhecido como Piu, Alison dos Santos é um velocista brasileiro que vem quebrando recordes e conquistando medalhas em diversas competições internacionais. Sua especialidade são os 400 metros.",
        link: "https://pt.wikipedia.org/wiki/Alison_dos_Santos",
        tags: "atletismo, velocista, 400metros"
    },
    {
        titulo: "Ana Marcela Cunha",
        descricao: "Nadadora de águas abertas, Ana Marcela Cunha é uma das maiores representantes do Brasil nesse esporte. Com diversas medalhas em campeonatos mundiais e Jogos Olímpicos, ela é um ícone da natação brasileira.",
        link: "https://pt.wikipedia.org/wiki/Ana_Marcela_Cunha",
        tags: "natação, águas_abertas, brasil"
    },
    {
        titulo: "Martine Grael e Kahena Kunze",
        descricao: "A dupla de vela brasileira, Martine Grael e Kahena Kunze, conquistou o mundo com suas habilidades e sincronia. Elas são campeãs olímpicas e mundiais na classe 49erFX.",
        link: "https://pt.wikipedia.org/wiki/Martine_Grael", // Link para uma delas, você pode adicionar o da outra também
        tags: "vela, 49erFX, olímpicas"
    },
    {
        titulo: "Gabriel Medina",
        descricao: "Um dos maiores nomes do surf mundial, Gabriel Medina é um brasileiro que conquistou diversos títulos e é conhecido por suas manobras radicais.",
        link: "https://pt.wikipedia.org/wiki/Gabriel_Medina",
        tags: "surf, brasil"
    },
    {
        titulo: "Letícia Bufoni",
        descricao: "Considerada uma das melhores skatistas do mundo, Letícia Bufoni é um ícone do skate feminino. Ela conquistou diversos títulos e é conhecida por sua técnica e criatividade.",
        link: "https://pt.wikipedia.org/wiki/Letícia_Bufoni",
        tags: "skate, feminino, brasil"
    },
    {
        titulo: "Bruno Fratus",
        descricao: "Um dos principais velocistas da natação brasileira, Bruno Fratus já conquistou diversas medalhas em competições internacionais. Sua especialidade são as provas curtas.",
        link: "https://pt.wikipedia.org/wiki/Bruno_Fratus",
        tags: "natação, velocista, brasil"
    },
    {
        titulo: "Ágatha Bednarczuk e Bárbara Seixas",
        descricao: "Dupla de vôlei de praia, Ágatha e Bárbara conquistaram diversas medalhas em campeonatos mundiais e Jogos Olímpicos. São conhecidas por sua força e habilidade no bloqueio.",
        link: "https://pt.wikipedia.org/wiki/Ágatha_Bednarczuk", // Link para uma delas
        tags: "vôlei de praia, brasil"
    },
    {
        titulo: "Arthur Zanetti",
        descricao: "Ginasta brasileiro especialista em argolas, Arthur Zanetti é o primeiro ginasta brasileiro a conquistar uma medalha de ouro olímpica. Conhecido por sua elegância e dificuldade nas execuções.",
        link: "https://pt.wikipedia.org/wiki/Arthur_Zanetti",
        tags: "ginástica, argolas, brasil"
    },
    {
        titulo: "Ana Sátila",
        descricao: "Canoísta brasileira, Ana Sátila é uma das maiores promessas do esporte no país. Conquistou diversas medalhas em campeonatos mundiais e é conhecida por sua velocidade e agilidade.",
        link: "https://pt.wikipedia.org/wiki/Ana_Sátila",
        tags: "canoagem, slalom, brasil"
    },
    {
        titulo: "Kelvin Hoefler",
        descricao: "Skatista brasileiro, Kelvin Hoefler é conhecido por suas manobras inovadoras e estilo único. Conquistou diversos títulos em campeonatos mundiais e é um dos principais nomes do skate street.",
        link: "https://pt.wikipedia.org/wiki/Kelvin_Hoefler",
        tags: "skate, street, brasil"
    },
    {
        titulo: "Mayra Aguiar",
        descricao: "Judoca brasileira, Mayra Aguiar é uma das maiores medalhistas da história do judô brasileiro. Conquistou diversas medalhas em campeonatos mundiais e Jogos Olímpicos.",
        link: "https://pt.wikipedia.org/wiki/Mayra_Aguiar",
        tags: "judô, brasil"
    },
    {
        titulo: "Isaquias Queiroz",
        descricao: "Canoísta brasileiro, Isaquias Queiroz é um dos maiores medalhistas olímpicos do Brasil. Conquistou diversas medalhas em diferentes categorias e é conhecido por sua força e resistência.",
        link: "https://pt.wikipedia.org/wiki/Isaquias_Queiroz",
        tags: "canoagem, velocidade, brasil"
    },
    {
        titulo: "Angélica Kvieczynski",
        descricao: "Ginasta brasileira, Angélica Kvieczynski é uma das principais atletas da ginástica rítmica brasileira. Conhecida por sua elegância e dificuldade nas execuções.",
        link: "https://pt.wikipedia.org/wiki/Angélica_Kvieczynski",
        tags: "ginástica rítmica, brasil"
    },
    {
        titulo: "Pedro Barros",
        descricao: "Skatista brasileiro, Pedro Barros é um dos principais nomes do skate vertical. Conhecido por suas manobras radicais e estilo agressivo.",
        link: "https://pt.wikipedia.org/wiki/Pedro_Barros",
        tags: "skate, vertical, brasil"
    },
    {
        titulo: "Martine Grael e Kahena Kunze", // Repetido propositalmente para demonstrar a possibilidade de duplas
        descricao: "A dupla de vela brasileira, Martine Grael e Kahena Kunze, conquistou o mundo com suas habilidades e sincronia. Elas são campeãs olímpicas e mundiais na classe 49erFX.",
        link: "https://pt.wikipedia.org/wiki/Martine_Grael", // Link para uma delas, você pode adicionar o da outra também
        tags: "vela, 49erFX, olímpicas"
    },
    {
        titulo: "Alessandro Volta",
        descricao: "Atleta paraolímpico brasileiro, Alessandro Volta é um dos principais nomes do atletismo paraolímpico. Conquistou diversas medalhas em Jogos Paralímpicos e é conhecido por sua determinação e superação.",
        link: "https://www.cpb.org.br/atletas/alessandro-volta/",
        tags: "atletismo, paraolimpico, brasil"
    },
    {
        titulo: "Aline Rocha",
        descricao: "Ginasta rítmica brasileira, Aline Rocha é uma das principais atletas da ginástica rítmica brasileira. Conhecida por sua elegância e dificuldade nas execuções.",
        link: "https://www.cbg.org.br/atletas/aline-rocha/",
        tags: "ginástica rítmica, brasil"
    },
    {
        titulo: "Ana Claudia Silva",
        descricao: "Nadadora brasileira, Ana Claudia Silva é uma das principais nadadoras do país. Conquistou diversas medalhas em campeonatos nacionais e internacionais.",
        link: "https://www.cbda.org.br/atletas/ana-claudia-silva/",
        tags: "natação, brasil"
    },
    {
        titulo: "Daniel Dias",
        descricao: "Atleta paraolímpico brasileiro, Daniel Dias é um dos maiores medalhistas paralímpicos da história. Conquistou diversas medalhas em diversas modalidades e é considerado um ícone do esporte paraolímpico.",
        link: "https://www.cpb.org.br/atletas/daniel-dias/",
        tags: "natação, paraolimpico, brasil"
    },
];