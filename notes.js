const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes= document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");

}
showNotes();

function updatestorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}


createBtn.addEventListener("click",function(){  //when click on btn it will execcute
    let inputBox = document.createElement("p"); //create a p element and store in inputBox
    let img = document.createElement("img");//create a img tag and store in img tag
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="./delete.png"//for image
    notesContainer.appendChild(inputBox).appendChild(img);
    //for display the inputBox


})

notesContainer.addEventListener("click",(c)=>{
    if(c.target.tagName === "IMG"){
        c.target.parentElement.remove();
        updatestorage();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onKeyup = function(){
                updatestorage();
            }
        })
    }

})