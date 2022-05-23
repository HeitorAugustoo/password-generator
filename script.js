let sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");

const containerPassword = document.querySelector("#container-password");

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#*";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value; //mostrar o valor fixo (15) logo no inicio

slider.oninput = function(){ //função usada para mostrar o valor que esta atualmento no slider, quando o slide é ativado
    sizePassword.innerHTML = this.value;
}

//FUNÇÃO PARA GERAR SENHA AO CLIQUE DO BOTÃO

function generatePassword(){
    let pass = "";
    for(let i=0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));  //charAt() = pega uma posição na string, definida dentro dos parenteses; Math.floor() = retorna o menor numero inteiro dentro de um numero (x); Math.random() = gera um numero aleatorio.
    }

    containerPassword.classList.remove("hide"); //remove a classe hide quando a função é chamada
    password.innerHTML = pass;
    novaSenha = pass;
}

//FUNÇÃO PARA CLICAR E COPIAR A SENHA

function copyPassword(){
    alert('Senha copiada com sucesso!');
    navigator.clipboard.writeText(novaSenha); //copia o que estiver dentro da variavel novaSenha
}


