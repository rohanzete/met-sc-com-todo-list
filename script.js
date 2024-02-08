let todobutton=document.querySelector(".btn");
let loginpop=document.querySelector(".login-page");
let savebutton=document.querySelector(".save");

let tname=document.querySelector(".tname");
let tdescription=document.querySelector(".tdescription");
let toption=document.querySelector(".topt");

//for remove and add pop form

todobutton.addEventListener("click",()=>{
    loginpop.classList.remove("d-none");
});

savebutton.addEventListener("click",()=>{
    //for saving data on local storage
    let newuser={
        todoname:tname.value,
        tododescription:tdescription.value,
        todooption:toption.value
    }