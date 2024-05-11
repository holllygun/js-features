const countdown  = document.getElementById('timer')

//    const timer = setInterval(() => {
//         countdown.textContent = Number(countdown.textContent) - 1
//     }, 1000)




const timer = setInterval(() => {
    if(countdown.textContent <= 0) {
        alert("Вы победили в конкурсе!")
        clearInterval(timer)
    }
    else {
        countdown.textContent --;
    }
}, 1000)