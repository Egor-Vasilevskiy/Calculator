const input = document.querySelector('.input')

const insert = (num) => {
    input.innerHTML = input.innerHTML + num   
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
