let lost = 0;
let killed = 0;
for (let i = 1; i < 10; i++) {
   let index = i;
   let hole = document.getElementById(`hole${index}`);

   hole.onclick = () => {
    if (hole.classList.contains('hole_has-mole')) {
        killed ++;
    } else {
        lost ++;
    }

    document.getElementById("dead").innerHTML = killed;
    document.getElementById("lost").innerHTML = lost;
    checkGameStatus();
   };2
}


function checkGameStatus() {
    if (lost > 4){
        alert("Вы проиграли");
        resetGame();
    }

    if(killed === 10) {
        alert ("Вы победили");
        resetGame();
    }
}



function resetGame() {
    killed = 0;
    lost = 0;
    document.getElementById("dead").innerHTML = killed;
    document.getElementById("lost").innerHTML = lost;
}

