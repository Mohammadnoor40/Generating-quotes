//variables
let btn=document.querySelector('#new-quote')
let quote=document.querySelector('.quote')
let person=document.querySelector('.person')
const quotes=[{
    quote:`' Guilt is anger directed at ourselves--at what we did or did not do.'`,
    person:`Peter McWilliams`

},
{
    quote:`'You don't stop laughing because you grow old. You grow old because you stop laughing.'`,
    person:`Michael Pritchard`

},
{
    quote:`' Love can be sordid only if you work at it.'`,
    person:`Brooke McEldowney`

},
]
btn.addEventListener('click',()=>{
let random=Math.floor(Math.random() * quotes.length)
quote.innerText=quotes[random].quote
person.innerText=quotes[random].person
})