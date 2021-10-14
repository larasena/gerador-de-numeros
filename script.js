function gerar() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    let res = document.querySelector('section#resultado');
    res.innerHTML = `Acabei de pensar no número ${num}!!`;
}

function zerar() {
    let res = document.querySelector('section#resultado');
    res.innerHTML = null;
}