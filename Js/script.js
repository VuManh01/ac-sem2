// const sign_in = document.querySelector("#sign-in-btn");
// const sign_up = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up.addEventListener('click', () => {
//     container.classList.add('sign-up-mode');
// });

// sign_in.addEventListener('click', () => {
//     container.classList.remove('sign-up-mode')
// })
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
