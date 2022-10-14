const form=document.querySelector(".form-level");
const inputName=document.querySelector(".name");
const inputEmail=document.querySelector(".email");
const button=document.querySelector(".button");
const inputPhone=document.querySelector(".phone")



form.addEventListener(`submit`,onSubmit)

function onSubmit(e){
    e.preventDefault();
    
    if(inputName.value === '' && inputEmail.value === '' && inputPhone.value=== '') {
        alert("fields are empty")

    } else {
       
    alert(" Thank You for visiting my website.I will contact you soon.")
       

          

}
}