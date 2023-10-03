const b = document.getElementById("b");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const total = document.getElementById("total");
b.addEventListener('click', roll);
function roll()
{
    var first = (Math.floor(Math.random()*6)+1);
    var second = (Math.floor(Math.random()*6)+1);
    d1.textContent = "Dice 1: " + first;
    d2.textContent = "Dice 2: " + second;
    total.textContent = (first+second);
    
}