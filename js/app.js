const gameBoard=document.querySelector("#gameboard")
const playerDisplay=document.querySelector("#player")
const infoDisplay=document.querySelector("#info-display")

const  width=8

const startPeice=[
    rook,knight,bishop,queen,king,bishop,knight,rook,
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    '','','','','','','','',
  '','','','','','','','',
  '','','','','','','','',
  '','','','','','','','',
  pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
  rook,knight,bishop,queen,king,bishop,knight,rook,
]

function createBoard(){
  startPeice.forEach((startPeice,i)=>{
   const square=document.createElement('div')
    square.classList.add('square')
    square.innerHTML=startPeice
    square.setAttribute('square-id',i)
    // square.classList.add('beige')

    const row = Math.floor((63-i)/8)+1;

   // if ((i+1)%2===0){
   // console.log("athu 0")
   //   square.classList.add("beige")
   // }else {
   //   console.log("ale 1");
   //   square.classList.add("brown")
   // }

    if (row%2===0){
      square.classList.add(i%2===0 ? "beige" : "brown")
    }else {
      square.classList.add(i%2===0 ? "brown" : "beige")
    }

    if (i<=15){
      square.firstChild.firstChild.classList.add('black')
    }
    if (i>=48){
      square.firstChild.firstChild.classList.add('white')
    }

    gameBoard.append(square)

  })
}

createBoard()