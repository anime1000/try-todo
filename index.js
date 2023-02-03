const btnAdd = document.querySelector('.btn');
const text = document.querySelector('.inp');
const result = document.querySelector('.list');

let deals = [];

function addDeal(text){
    const todo = {
        text,
        id: `${Math.random()}`,
        done: false,
    };
    deals.push(todo);
}

function deleteDeal(id){
    deals.forEach((item)=>{
        if (item.id === id){
            item.done = true;
        }
    });
}

function render(){
    let html = '';

    deals.forEach((item)=>{
        if (item.done){
            return;
        }

        html += `<div>${item.text}
                    <button data-delete = ${item.id}>delete</button>
                </div>`;
    });

    result.innerHTML = html;
}

btnAdd.addEventListener('click', ()=>{
    let someText = text.value;
    addDeal(someText);
    render();
});

result.addEventListener('click', (e)=>{
    if (e.target.tagName === "BUTTON"){
        const id = e.target.dataset.delete;
        deleteDeal(id);
        render();
    }
});