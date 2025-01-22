// Seleção de elementos

//recebe o formulário "#multiplication-form" do html para trabalharmos depois
const multiplicationForm = document.querySelector("#multiplication-form");

// recebe o nosso input "#number" (o numero que queremos a tabuada)
const numberInput = document.querySelector("#number");

// recebe o nosso "#multiplicator" (o multiplicador da tabuada)
const multiplicationInput = document.querySelector("#multiplicator");

// recebe o nosso "#multiplication-title" (o texto que mostra de qual numero é a tabuada abaixo)
const multiplicationTitle = document.querySelector("#multiplication-title span")

//recebe o nosso "#multiplicator-operations" (tabela que mostra os resultados da tabuada)
const multiplicationTable = document.querySelector("#multiplication-operations")


// Funções
const createTable = (number, multiplicatorNumber) => {

    //limpa todo o html que estava sendo exibido anteriormente
    multiplicationTable.innerHTML = "";

    //cria a tabuada de acordo com o numero do multiplicador inserido
    for (i = 1; i <= multiplicatorNumber; i++){ // a partir de agora, sempre que quisermos usar o numero do multiplicador, usaremos o i, se não ele sempre vai colocar o numero inserido, não o numero indo de 1 até o inserido

        // pega o numero inserido e multiplica por i (multiplicador inserido)
        const result = number * i

        //recebe o codigo html que será inserido na tabela
        const template =
            `<div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>`;
        
        //recebe um objeto nativo do JavaScript que consegue transferir o nosso template escrito para HTML
        const parser = new DOMParser();

        //usando o parser, usamos o método parseFromString, passamos o template que escrevemos e o que queremos transformá-lo (text/hmtl)
        const htmlTemplate = parser.parseFromString(template, "text/html");

        //seleciona a class "row" para ser escrita i vezes 
        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row);
    }

    // concatena o numero após o final da frase
    multiplicationTitle.innerText = number;
}


// Eventos

//pega o nosso form e adiciona eventos ao botão "submit"
multiplicationForm.addEventListener("submit", (e) => {

    // previne que enviemos form vazio
    e.preventDefault(); 

    // recebe o valor (value) do input de numero que foi recebido do html pelo numberInput e o transforma para inteiro (+)
    const multiplicationNumber = +numberInput.value;

    // mesma coisa que o de cima, porém recebe o multiplicador
    const multiplicatorNumber = +multiplicationInput.value;

    // verifica se o numero ou o multiplicador está vazio, se algum estiver, o código não prossegue
    if (!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
})