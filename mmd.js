let product = document.querySelector("#product");
let allParagrafes = document.querySelector("#all-paragrafes");
let Creationtask = document.querySelector(".btn-2");
let newtodo = document.querySelector("#todo");
let Leave = document.querySelector("#Leave");
let zarbdar = document.querySelector("#zarbdar");
let Creation = document.querySelector("#Creation");
let allinput = document.querySelector(".inp3");
let inputs = document.querySelector("#input");
let paragraph = document.querySelector(".paragraph");
let input1 = document.querySelector(".inp1")
let delet = document.querySelector(".btn");


let inputes = document.querySelector(".inputha")


product.addEventListener("click",productClick)
product.addEventListener("blur",prodctblur);
Creationtask.addEventListener("click",Creationclick);
Leave.addEventListener("click",LeaveClick);
zarbdar.addEventListener("click",LeaveClick);
Creation.addEventListener("click",ijadclick);


document.body.addEventListener("keydown",function(e){
    if(e.key === "Escape") {
        newtodo.classList.add("hidden");
    }

    // if(e.key === "Enter") {
    //     ijadclick()
    // }
     
});



function ijadclick () {
    let input = inputs.value;
    let inputses = document.createElement("div");
    inputses.className = "inp1";

    let paragraf = document.createElement("div");
    paragraf.className = "paragraph"
    paragraf.innerHTML = input;

    let removeTodoBtn = document.createElement("div")
    removeTodoBtn.className = "btn";
    removeTodoBtn.innerHTML = "حذف";
    removeTodoBtn.addEventListener("click",function(event){
        event.target.parentElement.remove()
    })

    inputses.append(removeTodoBtn);
    inputses.append(paragraf);
    allinput.append(inputses);
    LeaveClick()
    inputs.value = ""
}

function deletclick (){
    input1.classList.add("hidden");
    inputs.value = "";
}

function productClick () {
    allParagrafes.classList.remove("hidden");
}

function prodctblur (){
    allParagrafes.classList.add("hidden");
}

function Creationclick () {
    newtodo.classList.remove("hidden");
    inputs.focus()
}

function LeaveClick () {
    newtodo.classList.add("hidden");
}



inputes.addEventListener("select",function(e){
    console.log(e.target.parent);
    
})
