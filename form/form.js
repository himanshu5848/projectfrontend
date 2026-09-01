const name=document.getElementById('name');
const email=document.getElementById('email');
const text=document.getElementById('text-area');
const form=document.getElementById('myForm');
name.addEventListener('input',()=>{
  if(name.value.trim() === ""){
    alert("enter the name");
  }
});
email.addEventListener('input',()=>{
  if(!email.value.includes("@")){
    alert("invalid email");
  }
 
});
text.addEventListener('input',()=>{
  if(text.value.trim() === ""){
    alert("enter the text");
  }
});

form.addEventListener("submit", function(event){

   event.preventDefault();

   alert("Form Submitted");

});

