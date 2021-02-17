function onClick(){
    console.log("clicked");
    if(a1.classList.contains("black")){
        a1.classList.remove('black');
        b2.classList.remove('black');
        a2.classList.add('black');
        b1.classList.add('black');
    }
    else{
        a2.classList.remove('black');
        b1.classList.remove('black');
        a1.classList.add('black');
        b2.classList.add('black');
    }
    
}

document.querySelectorAll('table').forEach(table => table.addEventListener('click',onClick));
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");