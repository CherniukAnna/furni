// slider

$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
 
  nextArrow: `<svg class="slider-icon-next" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="29" cy="29" r="29" fill=""/>
<path d="M25 37.43L33 29.1164L25 20.8027" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  prevArrow: `<svg class="slider-icon-prev" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.1" cx="29" cy="29" r="29" fill=""/>
<path d="M33 36.43L25 28.1164L33 19.8027" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
});


// burger

const burgerEl = document.querySelector("#burger");
const menuEl = document.querySelector(".nav");

burgerEl.addEventListener("click", () => {
  menuEl.classList.toggle("open");
});


// scrol up
const scrollBtn = document.querySelector(".isShowBtn");
window.onscroll = () => {
  if (window.scrollY < 500) {
    scrollBtn.classList.add("hide");
  } else if (window.scrollY > 500) {
    scrollBtn.classList.remove("hide");
  }
};

scrollBtn.onclick = () => {
  window.scrollTo(0, 0);
}



// theme

// document.querySelector(".themetoggle").addEventListener("click", (event) => {
//   event.preventDefault();
//   if (localStorage.getItem("theme") === "dark") {
//     localStorage.removeItem("theme");
//   } else {
//     localStorage.setItem("theme", "dark");
//   }
//   addDarkClassToHTML();
// });

// function addDarkClassToHTML() {
//   try {
//     if (localStorage.getItem("theme") === "dark") {
//       document.querySelector("html").classList.add("dark");
//       document.querySelector(".themetoggle span").textContent = "dark_mode";
//     } else {
//       document.querySelector("html").classList.remove("dark");
//       document.querySelector(".themetoggle span").textContent = "wb_sunny";
//     }
//   } catch (err) {}
// }

// addDarkClassToHTML();


// validation

const formEl = document.querySelector('.form-mail')
const validation = new JustValidate(".form-mail", {
  
})
validation.addField(".name-js", [
  {
    rule: "required",
    errorMessage: "Write name, please",
  },
  {
    rule: "minLength",
    value: 3,
    errorMessage: "not enough characters",
  },
  {
    rule: "maxLength",
    value: 10,
    errorMessage: "many symbols"
  },
]);

validation.addField(".mail-js", [
  {
    rule: "required",
    errorMessage: "Write email, please",
  },
  {
    rule: "email",
    errorMessage: "Enter the correct email"
  },
]);