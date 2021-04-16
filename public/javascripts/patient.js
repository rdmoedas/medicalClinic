console.log("aula javascript no navegador");

//document é a página que estamos executando

//const buttons = document.querySelectorAll('button');
//console.log(buttons);

//const teste = document.getElementById("total-patients");
//console.log(teste)


    //Essa Query é uma Query DOM
const totalPatients = document.querySelector('#total-patients');
//console.log(totalPatients);

const totalTableItems = document.querySelectorAll('table tbody th')

totalPatients.innerHTML = totalPatients.innerHTML + ' ' + totalTableItems.length;

//var lista = document.querySelectorAll()

// totalTableItems.forEach(function(elemento) {
//     console.log(elemento.querySelectorAll('td'))
// });

const genders = document.querySelectorAll('table tbody tr td.gender');

let countM = 0
let countF = 0;

genders.forEach(function(item) {
    if(item.innerHTML === "F") {
        countF = countF + 1;
    }

    if(item.innerHTML === "M") {
        countM++;
    }
})

const totalMans = document.getElementById('patients-mans');
const totalWomans = document.getElementById('patients-womans');

totalMans.innerHTML = 
    totalMans.innerHTML + countM
totalWomans.innerHTML = totalWomans.innerHTML + countF;
