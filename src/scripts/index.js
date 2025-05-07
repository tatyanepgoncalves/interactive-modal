const body = document.querySelector("body")
const messageErrorName = document.createElement("p");
const messageErrorEmail = document.createElement("p");
const messageErrorMessage = document.createElement("p");
fieldsName.appendChild(messageErrorName);
fieldsEmail.appendChild(messageErrorEmail);
fieldsMessage.appendChild(messageErrorMessage);

messageErrorName.textContent = "Insira o seu nome completo.";
messageErrorEmail.textContent = "Insira um email valido.";
messageErrorMessage.textContent = "Digite uma mensagem!";
const text = document.createElement("p");
btnMode.appendChild(text);
text.textContent = "Escuro";

document.addEventListener("DOMContentLoaded", () => {
  const formElement = document.querySelector(".form-content");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const feedbackTextarea = document.getElementById("feedback");

  const fieldsName = document.getElementById("fieldsName");
  const fieldsEmail = document.getElementById("fieldsEmail");
  const fieldsMessage = document.getElementById("fieldsMessage");

  const form = document.getElementById("form");
  const messageThanks = document.getElementById("messageThanks");
  const modal = document.getElementById("modal");
  

  formElement.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameEmpty = nameInput.value.trim() === "";
    const emailEmpty = emailInput.value.trim() === "";
    const messageEmpty = feedbackTextarea.value.trim() === "";

    
    [nameInput, emailInput, feedbackTextarea].forEach(input => input.classList.remove("error"));
    [fieldsName, fieldsEmail, fieldsMessage].forEach(field => field.classList.remove("error"));

    if (nameEmpty || emailEmpty || messageEmpty) {
      fieldsName.classList.toggle("error", nameEmpty)
      fieldsEmail.classList.toggle("error", emailEmpty)
      fieldsMessage.classList.toggle("error", messageEmpty)
  
      form.classList.remove("hide")
      messageThanks.classList.remove("active")
    } else {
      fieldsName.classList.remove("error", nameEmpty)
      fieldsEmail.classList.remove("error", emailEmpty)
      fieldsMessage.classList.remove("error", messageEmpty)

      setTimeout(() => {  
        form.classList.add("hide");
        messageThanks.classList.remove("hide");

        setTimeout(() => {
          modal.classList.remove("active")
          
          form.classList.remove("hide");
          messageThanks.classList.add("hide");
          formElement.reset();
        }, 2000);
      }, 1500); 
      form.classList.add("hide")
      messageThanks.classList.add("active")
    }

   
    
  });
});



const openModal = () => {
  modal.classList.add("active");
}


btnMode.addEventListener("click", (e) => {
  e.preventDefault();
  text.textContent = "Escuro";
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");

  text.textContent = isDark ? "Claro" : "Escuro";
});

function closeModal() {
  modal.classList.remove("active");
}