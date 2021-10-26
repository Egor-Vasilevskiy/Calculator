const input = document.querySelector('.input')
const toogleButton = document.querySelector('.toogleButton')

const insert = (num) => {
    input.innerHTML = input.innerHTML += num   
}

const clean = () => {
    input.innerHTML = "";
}

const back = () => {
    let exp = input.innerHTML;
    input.innerHTML = exp.substr(0, exp.length-1)
}

const results = () => {
    let exp = input.innerHTML;
    if(exp) {
        input.innerHTML = eval(exp);
    }
}

const persent = () => {
    input.innerHTML = eval(input.innerHTML) / 100;
}

let setLightTheme = () => {
    document.body.setAttribute("id", "light");
    toogleButton.classList.add("active");
    localStorage.setItem("theme", "light");
}

let setDarkTheme = () => {
    document.body.removeAttribute("id");
    toogleButton.classList.remove("active");
    localStorage.setItem("theme", "dark");
}

toogleButton.addEventListener("click", () => {
    if(document.body.getAttribute("id")) {
        setDarkTheme()
    } else {
        setLightTheme()
    }
})