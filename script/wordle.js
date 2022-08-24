var palavraDoDia
const palavrasValidasAcentuadas = ['errar', 'sagaz', 'amago', 'negro', 'êxito', 'missa', 'arroz', 'ossos', 'mexer', 'termo', 'nobre', 'senso', 'algoz','afeto',
'plena', 'ética', 'festa', 'mútua', 'tênue', 'sutil', 'vigor', 'aquém', 'fazer', 'porém', 'audaz', 'assim','sanar', 'seção', 'ainda',
'inato', 'cerne', 'fosse', 'ideia', 'poder', 'moral', 'desde', 'torpe', 'muito', 'justo','honra', 'fútil', 'sobre', 'cozer',
'anexo', 'quiçá', 'razão', 'etnia', 'ícone', 'sonho', 'tange', 'égide', 'lapso','amigo','mútuo', 'expor', 'haver', 'valha',
'hábil', 'tempo', 'seara', 'dengo', 'então', 'pesar', 'ávido', 'posse','genro', 'boçal', 'coser', 'ardil', 'causa','fugaz',
'corja', 'dizer', 'pária', 'prole', 'detém', 'tenaz', 'dever','graça', 'saber', 'óbice', 'crivo', 'digno', 'ápice', 'cocho',
'ânimo', 'ânsia', 'ceder', 'brado', 'comum', 'sendo','temor', 'gleba', 'culto', 'assaz', 'atroz', 'mundo', 'pauta','censo',
'denso', 'neném', 'vício', 'estar', 'forte', 'vulgo', 'revés', 'pudor', 'regra', 'dogma', 'louco', 'criar', 'vedar','banal',
'round', 'impor', 'saúde', 'jeito', 'atrás', 'ordem', 'tenro', 'pífio', 'desse', 'apraz', 'pedir','mercê', 'reaça', 'clava',
'usura', 'prosa', 'feliz', 'juízo', 'servo', 'viril', 'sábio', 'coisa', 'manso','ontem', 'presa', 'falar', 'cunho', 'forma',
'devir', 'mesmo', 'meiga', 'afago', 'fluir', 'ébrio', 'platô','vendo', 'limbo', 'sério', 'guisa', 'mágoa', 'posso', 'visar',
'herói', 'temer', 'acaso', 'pleno', 'puder','valor', 'cisma', 'bruma', 'lugar', 'ímpio', 'êxodo', 'afins', 'óbvio', 'certo',
'gerar', 'obter', 'crise','matiz', 'praxe', 'senil', 'havia', 'todos', 'vênia', 'fluxo', 'enfim', 'abrir', 'tédio', 'ritmo',
'álibi','falso', 'união', 'tomar', 'garbo', 'visão', 'parvo', 'fácil', 'valia', 'reter', 'pulha', 'vital', 'favor','bravo',
'grato', 'prumo', 'vivaz', 'legal', 'parco', 'gênio', 'laico', 'burro', 'olhar', 'possa', 'levar','ameno', 'reles', 'tecer',
'casta', 'óbito', 'prime', 'selar', 'morte', 'ranço', 'anelo', 'fator', 'noção','sábia', 'rogar', 'noite', 'façam', 'citar',
'farsa', 'cabal', 'achar', 'falta', 'adiar', 'nicho', 'coeso','épico', 'cisão', 'ouvir', 'fardo', 'brega', 'viver', 'ativo',
'força', 'sinto', 'gente', 'exato', 'imune','passo', 'sonso', 'amplo', 'dúbio', 'linda', 'tendo', 'cesta', 'único', 'sulco',
'lavra', 'leigo', 'sesta','calma', 'revel', 'deter', 'labor', 'vemos', 'rever', 'gesto', 'humor', 'árduo', 'atuar', 'pobre',
'feixe','ciúme', 'carma', 'ajuda', 'tende', 'outro', 'ótica', 'igual', 'velho', 'ponto', 'claro', 'toada', 'hiato','ideal',
'sonsa', 'débil', 'vácuo', 'terno', 'ambos', 'remir', 'fusão', 'probo', 'senão', 'fonte', 'marco','jovem', 'leito', 'advém',
'capaz', 'inata', 'terra', 'doido', 'horda', 'xeque', 'relva', 'tenra', 'ficar','algum', 'velar', 'caçar', 'série', 'farão',
'líder', 'apoio', 'coçar', 'vazio', 'anuir', 'tanto', 'vimos','rigor', 'verso', 'entre', 'dorso', 'botar', 'frase', 'pouco',
'signo', 'sente', 'massa', 'coesa', 'cruel','raiva', 'moção', 'prece', 'ambas', 'vírus', 'feito', 'fauna', 'morar', 'peste',
'minha', 'papel', 'casto','covil', 'credo', 'preso', 'torço', 'ciclo', 'ímpar', 'faina', 'lazer', 'furor', 'brisa', 'dócil', 
'chata', 'maior', 'vetor', 'trama', 'árido', 'blasé', 'houve', 'pegar', 'nossa', 'aceso', 'beata', 'adeus','banzo', 'manha',
'setor', 'vulto', 'liame', 'breve', 'senda', 'seita', 'vasto', 'salvo', 'ardor', 'livro','peixe', 'morro', 'visse', 'chuva',
'pecha', 'sorte', 'átomo', 'comer', 'antro', 'prado', 'reger', 'plano','flora','saiba', 'ocaso', 'segue', 'rezar', 'avaro',
'carro', 'pajem', 'nunca', 'aliás', 'saída', 'ótimo', 'áureo','junto', 'mudar', 'anciã', 'acima', 'chulo', 'serão', 'opção',
'fitar', 'parar', 'jazia', 'fruir', 'treta','fugir', 'nação', 'andar', 'grupo', 'bando', 'prazo', 'leite', 'gerir', 'lenda',
'motim', 'norma', 'tosco','alude', 'rapaz', 'brava', 'parte', 'época', 'campo', 'sinhá', 'tenso', 'exame', 'ídolo', 'avião',
'arcar','psico', 'tirar', 'reino', 'malta', 'venal', 'agora', 'vilão', 'praga', 'soldo', 'praia', 'quota', 'risco','aonde',
'índio', 'corpo', 'antes', 'logro', 'sumir', 'preto', 'virão', 'traga', 'voraz', 'fixar', 'pompa','cheio', 'quase', 'texto',
'exijo', 'filho', 'certa', 'turba', 'cópia', 'nódoa', 'oásis', 'apego', 'prova','alado', 'solto', 'caixa', 'turva', 'acesa',
'estão', 'messe', 'conta', 'grave', 'ligar', 'átrio', 'verbo','nível', 'doído', 'verve', 'parva', 'apelo', 'tocar', 'áurea',
'lindo', 'trupe', 'pardo', 'festa', 'livre','fenda', 'fraco', 'dessa', 'sabia', 'opaco', 'afora', 'alçar', 'oxalá', 'viria',
'navio', 'parca', 'jirau','retém', 'ficha', 'astro', 'manhã', 'fatos', 'faixa', 'ético', 'elite', 'lidar', 'mente', 'fatal',
'glosa','supra', 'tinha', 'autor', 'firme', 'magia', 'grata', 'verba', 'cioso', 'bater', 'reses', 'pique', 'calda','cousa',
'junco', 'salve', 'deixa', 'privê', 'irmão', 'pagão', 'douto', 'macio', 'atual', 'molho', 'abriu','posto', 'light', 'supor', 
'torso', 'sexta', 'vezes', 'turvo', 'sarça', 'longe', 'asilo', 'extra', 'ígneo','judeu', 'curso', 'órfão', 'caber', 'drops',
'locus', 'porta', 'cânon', 'besta', 'rouca', 'rádio', 'desta','ruína', 'vídeo', 'zelar', 'combo', 'vosso', 'nosso', 'vinha',
'culpa', 'bioma', 'menos', 'ereto', 'finda','paira', 'bônus', 'agudo', 'feudo', 'facto', 'advir', 'urgia', 'cútis', 'traço',
'meigo', 'surja', 'tetra','sítio', 'super', 'júlia', 'facho', 'suave', 'missa', 'autos', 'amena', 'rumor', 'tento', 'pilar',
'turma','clean', 'museu', 'chama', 'ações', 'louça', 'lasso', 'geral', 'mosto', 'lápis', 'local', 'hobby', 'acolá','optar', 
'pódio', 'boato', 'medir', 'rubro', 'pacto', 'crime', 'refém', 'folga', 'brabo', 'penta', 'páreo','letal', 'ponha', 'drama',
'poema', 'aluno', 'aluna', 'mesma', 'móvel', 'cacho', 'feroz', 'vigia', 'aroma','metiê', 'hoste', 'chato', 'ávida', 'cover',
'golpe', 'vetar', 'pasmo', 'monte', 'rival', 'teste', 'fazia','açude', 'piada', 'finjo', 'troça', 'coral', 'ecoar', 'axila',
'fórum', 'lição', 'daqui', 'forem', 'riste','verde', 'poeta', 'carta', 'monge', 'plebe', 'clima', 'artur', 'passa', 'lesse', 
'súcia', 'cetro', 'ébano','tacha', 'escol', 'ateia', 'calmo', 'briga', 'falha', 'venha', 'roupa', 'macro', 'busca', 'conto',
'sarau','idoso', 'plumo', 'cargo', 'viram', 'aviso', 'tribo', 'plaga', 'perco', 'fruto', 'tarde', 'légua', 'átimo','farta',
'chefe', 'berro', 'vento', 'grama', 'virar', 'civil', 'catre', 'arado', 'corso', 'surto', 'seixo','ornar', 'saldo', 'assar',
'traje', 'única', 'bruta', 'pedra', 'manga', 'beijo', 'nuvem', 'amiga', 'fosso','recém', 'troca', 'mangá', 'deste', 'casar',
'bença', 'ossos', 'gíria', 'úteis', 'trato', 'magna', 'porte', 'tição', 'sósia', 'depor', 'arfar', 'deram', 'canso', 'tiver',
'itens', 'amado', 'tutor', 'âmbar', 'silvo','irado', 'grota', 'bazar', 'cifra', 'vazão', 'gabar', 'renda', 'pinho', 'perto',
'bruto', 'rural', 'jejum','laudo', 'pasma', 'mídia', 'pavor', 'régio', 'inter', 'feita', 'tchau', 'segar', 'nesse', 'fossa',
'órgão','minar', 'odiar', 'troco', 'vagar', 'vadio', 'molde', 'clero', 'pomar', 'sótão', 'lesto', 'stand', 'aviar','amada',
'negar', 'mamãe', 'cenho', 'canto', 'rocha', 'lesão', 'cinto', 'largo', 'paiol', 'visto', 'bolsa','horto', 'close', 'proto',
'ruído', 'ileso', 'morfo', 'densa', 'xucro', 'pugna', 'invés', 'marca', 'jogar','podar', 'vista', 'urdir', 'chula', 'ufano',
'penso', 'vasta', 'mocho', 'frota', 'cível', 'cheia', 'bulir','úmido', 'piche', 'úbere', 'linha', 'esgar', 'peita', 'resto',
'apear', 'tenha', 'santo', 'misto', 'fundo','ágape', 'volta', 'manto', 'cerca', 'narco', 'logos', 'nessa', 'natal', 'monta',
'velha', 'demão', 'símio','jazer', 'fazes', 'findo', 'barão', 'campa', 'ferpa', 'verão', 'preço', 'chaga', 'ardis', 'pólis',
'mover','álbum', 'letra', 'cosmo', 'etapa', 'retro', 'nesta', 'seiva', 'banto', 'matar', 'folia', 'coroa', 'venho','trago',
'álamo', 'troço', 'punha', 'ceita', 'áudio', 'final', 'sabor', 'barro', 'redor', 'louro', 'rente','calça', 'sigla', 'salva',
'bolso', 'firma', 'arroz', 'dança', 'queda', 'farol', 'torna', 'coevo', 'folha','enjoo', 'lutar', 'solta', 'lousa', 'tumba',
'míope', 'mimar', 'burra', 'baixa', 'neste', 'salmo', 'fugiu','ousar', 'todas', 'veloz', 'corar', 'zumbi', 'nácar', 'calor',
'longo', 'reler', 'forro', 'obtém', 'justa','vazia', 'fátuo', 'penca', 'cacto', 'calvo', 'gueto', 'bedel', 'vário', 'farto',
'chave', 'logia', 'mania','lucro', 'quite', 'repor', 'sugar', 'sexto', 'puído', 'custo', 'subir', 'staff', 'ultra', 'urgir',
'passe','sadio', 'refil', 'viger', 'valer', 'versa', 'hífen', 'lento', 'louca', 'usual', 'cardo', 'rédea', 'nariz','sócio',
'choça', 'corte', 'mouro', 'aéreo', 'ceifa', 'modal', 'ferir', 'garra', 'voilà', 'anzol', 'abade','nesga', 'pluma', 'sofia',
'outra', 'pátio', 'dados', 'grife', 'lábil', 'diabo', 'raiar', 'pavio', 'sabiá','trair', 'skate', 'pagar', 'roubo', 'pazes',
'dique', 'xampu', 'tacho', 'podre', 'disso', 'surra', 'tíbio','filme', 'abono', 'caibo', 'cisco', 'farei', 'dobro', 'jeová',
'domar', 'digna', 'couve', 'quais', 'posta','régia', 'notar', 'bruxa', 'barra', 'regem', 'volto', 'toque', 'buril', 'amora', 'vinho']

let palavrasValidas = []


palavrasValidasAcentuadas.forEach(function(element) {
    palavrasValidas.push(element.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
})

const body = document.querySelector('body')
let tentativas = 0

const teclado =  [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
    'R','S','T','U','V','W','X','Y','Z', 'ENTER', 'BACKSPACE'];

let textTales = []
let linha = 1

gerarData()
function gerarData() {
    listDate = []
    const dateIntervalGenerator = (() => {
    const _generateInterval = (startDate, endDate) => {
      const date = new Date(startDate.getTime());
      const dates = [];
      while (date <= endDate) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return dates;
    };
    return {
      generateIn: _generateInterval,
    };
    })();
  // dateIntervalGenerator = fazer a lista da data 01 até a data 02
    data01 = new Date("2022-08-19")
    data02 = new Date ("2025-09-11")
    dates = dateIntervalGenerator.generateIn(data01, data02);

    dates.forEach (element => {
        listDate.push(element.toLocaleDateString())
    })
    // Converte a data no padrao yyyy/mm/dd
    // pegar o indice da minha lista e compara com a data atual -> acha o indice que tem a data
    let indice = listDate.indexOf(new Date().toLocaleDateString())

    var dia = palavrasValidas[indice].normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    palavraDoDia = dia.toUpperCase()
}

// Para receber o que o usuário digitou 
const listener = event => { 
    let letter = event.key.toUpperCase() // Pega a tecla digitada em passa pra Upper case 
    textTales.push(letter)
    validar(letter)
}

const teclar = event =>{
    if(event.target.classList.contains('tecla')){
        let tecla = event.target.textContent
        textTales.push(tecla)
        validar(tecla.toUpperCase())
    }
    
}

const changeLines = letter => {  
    let taleLine = `l${linha}c${textTales.length}`
    let tales = document.getElementById(taleLine)
    tales.innerText = letter
}

const validar = letter =>{
    if (letter == 'ENTER'){
        console.log(palavraDoDia)
        if (textTales.length >= 5 ){
            tentativas ++
            textTales.pop()
            if (!palavrasValidas.includes(textTales.join("").toLowerCase())){
                alert('Palavra inválida')
                return
            }

            validarposicao()
            pintarTeclas()
            if (tentativas == 6){
                console.log('GAME OVER')
                return
            }
            if (palavraDoDia.toUpperCase() == textTales.join("")){
                console.log("ACERTOU!!!")
                return 
            }
            else{
                // Passar pra próxima linha
                textTales = []
                linha += 1
            }
        } 
        else if (textTales.length < 5 ){
            textTales.pop()
            return
        }
        return 1
    }

    if (letter == 'BACKSPACE' || letter == ""){
        textTales.pop()
        changeLines('')
        textTales.pop()
        return 1;
    }
    if (!teclado.includes(letter)){
        textTales.pop()
        console.log('Não é uma variável válida!')
        return 1
    }
    changeLines(letter)
}

const pintarTeclas = (textTales,estado) => {
    let teclas = document.querySelectorAll('.tecla')
    for (tecla of teclas){
            if (textTales == tecla.textContent){
                if (estado === 'todocorreto'){
                    tecla.classList.add('fullcorrect')
                }
                else if (estado === 'correto'){
                    tecla.classList.add('correct')
                }
                else if (estado === 'incorreto'){
                    tecla.classList.add('incorrect')
                }
        }}
}

const validarposicao = () => {
    let palavraDoDia_ = palavraDoDia.split("")
    let estado 
        for (let item in palavraDoDia){
            let tales = document.getElementById(`l${linha}c${parseInt(item)+ 1}`)
            if (palavraDoDia[item] == textTales[item]){
                tales.classList.add('fullcorrect')
                estado = 'todocorreto'
                pintarTeclas(textTales[item], estado)
                let el = palavraDoDia[item]
                palavraDoDia_.splice(palavraDoDia_.indexOf(el), 1)
        }}
        for (let item in palavraDoDia){
            let tales = document.getElementById(`l${linha}c${parseInt(item)+ 1}`)
            if (palavraDoDia_.includes(textTales[item])){
                tales.classList.add('correct')
                estado = 'correto'
                pintarTeclas(textTales[item], estado)
                palavraDoDia_.splice(parseInt(item) + 1, 1)
            }
            else {
                tales.classList.add('incorrect')
                estado = 'incorreto'
                pintarTeclas(textTales[item], estado)
            }
    }
}

let objeto = {}



body.addEventListener('click', teclar)
body.addEventListener('keydown', listener)