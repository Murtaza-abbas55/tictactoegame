let tmusic = new Audio("ting.mp3");
let gover = new Audio("gameover.mp3");
let turn = "X";
let gameover = false;
const TurnChange = () => {
    if (turn === "X") {
        turn = "0";
    }
    else {
        turn = "X";
    }
}
const WinCheck = () => {
    let btext = document.getElementsByClassName("text");
    let w = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    w.forEach(e => {
        if ((btext[e[0]].innerText === btext[e[1]].innerText) && (btext[e[2]].innerText === btext[e[1]].innerText) && (btext[e[0]].innerText !== '')) {
            document.getElementsByClassName("info")[0].innerText = btext[e[0]].innerText + " Won";
            gameover = true;
            gover.play();
            document.querySelector('.img').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".winline").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".winline").style.width = "66.67%";
        }
    })
}

let gamegrids = document.getElementsByClassName("gamegrid");
Array.from(gamegrids).forEach(e => {
    let text = e.querySelector('.text');
    e.addEventListener('click', () => {
        if (text.innerText === '') {
            text.innerText = turn;
            TurnChange();
            tmusic.play();
            WinCheck();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})
document.getElementsByClassName("reset")[0].addEventListener("click", () => {
    let boxtext = document.querySelectorAll(".text");
    Array.from(boxtext).forEach(e => {
        e.innerText = "";
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.img').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector(".winline").style.width = "0";
})