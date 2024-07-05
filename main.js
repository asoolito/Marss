

// const password = document.querySelector('.password');
// const modme = document.querySelector('.hero__input1');
// const form = document.querySelector('.hero_form');
// const button = document.querySelector('.button');
// const img = document.querySelector('.form__img');

// img.addEventListener('click',(event) => {

//     password.type.password 
// })

// button.addEventListener('click', (e) => {
//     if (password.value == 1 && modme.value == 1) {
//         e.preventDefault();
//         alert('welcome kamron');
//         password.value = "";
//         modme.value = "";
//     }else if (password.value == 2 && modme.value == 2){
//         alert('welcome polat');
//         password.value = "";
//         modme.value = "";
//     }else if (password.value == 3 && modme.value == 3){
//         alert('welcome ibrohim');
//         password.value = "";
//         modme.value = "";
//     }else if (password.value == 4 && modme.value == 4){
//         alert('welcome said');
//         password.value = "";
//         modme.value = "";
//     }else if (password.value == 5 && modme.value == 5){
//         alert('welcome ibrohim');
//         password.value = "";
//         modme.value = "";
//     }else if (password.value == 6 && modme.value == 6){
//         alert('welcome abdulloh');
//         password.value = "";
//         modme.value = "";
//     }else if (password.value == 7 && modme.value == 7){
//         alert('welcome fayzulloh');
//         password.value = "";
//         modme.value = "";
//     }else if (password.value == 8 && modme.value == 8){
//         alert('welcome jafar');
//         password.value = "";
//         modme.value = "";
//     }

// });

//new cods

const password = document.querySelector('.password');
const modme = document.querySelector('.hero__input1');
const form = document.querySelector('.hero_form');
const button = document.querySelector('.button');
const img = document.querySelector('.form__img');

const group883 = [
    {
    name:"Abduraxmon",
    password: 2011,
    modme: 13,
},        {
    name:"kamron",
    password: 2010,
    modme: 14,
},    {
    name:"ibrohim",
    password: 2010,
    modme: 14,
},    {
    name:"said",
    password: 2009,
    modme: 15,
},    {
    name:"jafar",
    password: 2012,
    modme: 12,
},    {
    name:"kal",
    password: 2014,
    modme: 10,
},    {
    name:"abdullohon",
    password: 2011,
    modme: 13,
},{
    name:"polat",
    password: 2009,
    modme: 15,
},
]
form.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    }
)
button.addEventListener("click", (evt)=>{
    button.preventDefault();
    const password = password.value;
    const modme = modme.value;

    const result = group883.find(item =>item.login == modme.value && item.password == password.value);``
})