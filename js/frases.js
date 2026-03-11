let rotativas = document.getElementById("titulo");

const frases = [
"Bem vindo ao Flashback!",
"Último ano. Melhores histórias.",
"Reviva cada momento.",
"Nossa história começa aqui.",
"O terceirão nunca acaba."
]

let index = 0;

function trocarFrase(){

    rotativas.classList.remove("entrar");
    rotativas.classList.add("sair");

    setTimeout(()=>{

        rotativas.textContent = frases[index];

        rotativas.classList.remove("sair");

        // força o navegador a recalcular
        void rotativas.offsetWidth;

        rotativas.classList.add("entrar");

        index = (index + 1) % frases.length;

    },400)

}

trocarFrase();
setInterval(trocarFrase,5000);