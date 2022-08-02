const buttons = document.querySelectorAll(".open-contact");
const block_contact = document.querySelector(".filter");
const header = document.querySelector(".tete");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        block_contact.classList.toggle("active");
        header.classList.toggle("active");
    })
})