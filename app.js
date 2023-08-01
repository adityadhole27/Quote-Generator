let btn=document.querySelector('#new')
let quote=document.querySelector('.quote')
let person=document.querySelector('.person')

const quotes=[{quote:`Live Today and live Longer`,person:`S.K`},{quote:`Live your life by your own Rules`,person:`S.K`},{quote:`Today is difficult, Tommarow is much more difficult but day after tommarow is beautiful most people die tommarow evening.`,person:`Jack Ma`}];

btn.addEventListener("click",function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
});