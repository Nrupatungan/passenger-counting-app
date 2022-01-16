let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let count = 0;

function increment(){
    count++;
    countEl.textContent = count;
}

function save(){
    let entry = ` ${count} - `;
    saveEl.textContent += entry;
    count = 0;
    countEl.textContent = count;
}