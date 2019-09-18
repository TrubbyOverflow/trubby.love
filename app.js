// ******
// Watch and learn how real code is made
// ******


// When code is the documentation, no comment is needed
function create_a_beautiful_background_color_dammit() {
    var x = Math.floor(Math.random() * 110);
    var y = Math.floor(Math.random() * 110);
    var z = Math.floor(Math.random() * 110);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    // Console logging is mandatory, obvisously
    console.log(bgColor);

    $("<style>body { background: "+bgColor+"; }</style>" ).appendTo( "head" );
}

// Get the URL parameters, but be straight forward about it, okay?
var params = {};location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){params[k]=v});

// Yes, this is happening
var quotes = {
    'v3q4fw': 'Se não for pra ganhar, nem entro',
    'asefae': 'Eu sinceramente meio q cansei do trubo',
    'fdsasd': 'webservice e meu. mimda',
    'fqfw4w': 'quero a minha mãe',
    'cqw43t': 'eu quero minha casa. me tira daqui pls',
    'wq44sa': 'pelamor d deus testa antes isso. FILHO DA PUTA.',
    '3f4qws': 'imagina eu aqui nessa internet pensando se eu cliquei no botão ou não',
    'fq323f': 'caraio to me sentindo the api lord nesse trabalho',
    'f3q4fq': '/get muahahha',
    'wqfafw': 'Trubby = (Tru)ck + Bu(ddy)',
    'f3qwwe': 'um grande vai tomar no cu a todos os que participaram dessa jornada',
    'ewbtht': 'vamo para de conversar e alguém compra a porra deste domínio de merda pra colocar o lixo de gerador de frases bosta',
    'fq334q': 'eu não tenho culpa se o pessoal fez o trbaalho pra mim. Se eu tirei 8 foi porque eu mereci sim',
    'q3f433': 'Ô mermão, tu tá achando que a gente tem cara de palhaço? Tu é Trubby até os furos da sua cueca, seu é-porque-eu-mereci-sim.',
    'f3qq34': 'show me the fodendo code meu compadecido',
    'f343q4': 'Falar é mole, meu consagrado, show me the caralho de code',
    'fq3f13': 'Cala boca, você tem placa da Nvidia',
    'fq34f3': 'Ô seu filho de um jihadista árabe, ninguém aqui é seu empregado não',
    'f3qwfs': 'Fodazemermao',
    'qwcr4s': 'Ninguém aqui é seu empregado',
};

$(document).ready(function(){

    create_a_beautiful_background_color_dammit();

    if(params.quote) {
        $("p#quote").append(quotes[params.quote]);
    } else {
        // Select a random quote and show it
        // TODO: the next line is too simple and short. It needs more flare
        let key = Object.keys(quotes)[Math.floor(Math.random() * Object.keys(quotes).length)];
        $("p#quote").append(quotes[key]);
        $("a#permalink").attr("href", "?quote=" + key);
    }
});

// That was easy
