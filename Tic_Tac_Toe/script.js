console.log("Welcome To Tic Tac Toe")
let turn="X"
const changeTurn = ()=>{
    return turn == "X"?"0": "X"
let gameover=false;
}
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";
            if (e[0]==0 && e[1]==1 && e[2]==2){
                line.classList.add('linedraw');
            }
            if (e[0]==0 && e[1]==3 && e[2]==6){
                // alert(e);
                line2.classList.add('linedraw2');
            }
            if (e[0]==1 && e[1]==4 && e[2]==7){
                // alert(e);
                line3.classList.add('linedraw3');
            }
            if (e[0]==2 && e[1]==5 && e[2]==8){
                // alert(e);
                line4.classList.add('linedraw4');
            }
            if (e[0]==3 && e[1]==4 && e[2]==5){
                // alert(e);
                line5.classList.add('linedraw5');
            }
            if (e[0]==6 && e[1]==7 && e[2]==8){
                // alert(e);
                line6.classList.add('linedraw6');
            }
            if (e[0]==0 && e[1]==4 && e[2]==8){
                // alert(e);
                line7.classList.add('linedraw7');
            }
            if (e[0]==2 && e[1]==4 && e[2]==6){
                // alert(e);
                line8.classList.add('linedraw8');
            }
        }
    })

}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn=changeTurn();
            checkwin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

a11.addEventListener('click',()=>{
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})
a12.addEventListener('click',()=>{
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})
a13.addEventListener('click',()=>{
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})
a14.addEventListener('click',()=>{
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})
a15.addEventListener('click',()=>{
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})
a16.addEventListener('click',()=>{
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})
a17.addEventListener('click',()=>{
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})
a18.addEventListener('click',()=>{
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})
a19.addEventListener('click',()=>{
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})
