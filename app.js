let head=document.querySelector(".head");
let hbd=['H','a','p','p','y','🎉','B','i','r','t','h','d','a','y'];

hbd.forEach((val)=>{
    let card = document.createElement('div');
    card.innerText=val;
    card.classList.add("headCard");
    head.appendChild(card);
})



let cards=['H','A','P','P','Y'] ;
let dblCards=['H','A','P','P','Y','H','A','P','P','Y'];
dblCards.sort(()=>{
    return Math.random()-0.5;
});

let flippedCards=[];
let foundPairs=0;
let count=0
let game=document.querySelector(".happy");
function intiate(){
    dblCards.forEach((value)=>{
        createCards(value);

    })
}

function createCards(value){
    let card=document.createElement("div");
    card.classList.add("card");
    // console.dir(card);
    card.id=value;
    game.appendChild(card);
    card.addEventListener("click",handleCardClick)
}


function handleCardClick(evnt){
            let card=evnt.target;
           if(flippedCards.length<2 && !card.classList.contains("flipped") ){
            card.classList.add("flipped");
            card.innerText=card.id;
            flippedCards.push(card);

            if(flippedCards.length==2){
                setTimeout(match,1000);
             }
        }
    
}

function match(){
    let card1= flippedCards[0];
    let card2=flippedCards[1];
    if(card1.id===card2.id){
        foundPairs++;
        Fill(card1.id);
        
    }
    else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.innerText = '';
        card2.innerText = '';
    }
    flippedCards=[];
}

function Fill(id){
   for(endCard of endCards1){
    console.log(endCard);
    if(endCard==id){
        newCard=document.querySelector(`.endh .${id}:not(.flipped) `);
        break;
    }
   
    

      
   }
   newCard.classList.add("flipped");
    newCard.innerText=id; 
           count++;
           if(count==13){
            confetti({
                particleCount: 1000,
                spread: 700,
                origin: { y: 0.6 }
              });
           }

}
intiate();










let cards2=['B','I','R','T','H','D','A','Y'] ;
let dblCards2=['B','I','R','T','H','D','A','Y','B','I','R','T','H','D','A','Y'];
dblCards2.sort(()=>{
    return Math.random()-0.5;
});

let flippedCards2=[];
let foundPairs2=0;

let game2=document.querySelector(".bday");
function intiate2(){
    dblCards2.forEach((value)=>{
        createCards2(value);

    })
}

function createCards2(value){
    let card=document.createElement("div");
    card.classList.add("card");
    // console.dir(card);
    card.id=value;
    game2.appendChild(card);
    card.addEventListener("click",handleCardClick2)
}


function handleCardClick2(evnt){
            let card=evnt.target;
           if(flippedCards2.length<2 && !card.classList.contains("flipped") ){
            card.classList.add("flipped");
            card.innerText=card.id;
            flippedCards2.push(card);

            if(flippedCards2.length==2){
                setTimeout(match2,1000);
             }
        }
    
}

function match2(){
    let card1= flippedCards2[0];
    let card2=flippedCards2[1];
    if(card1.id===card2.id){
        foundPairs2++;
       
        Fill2(card1.id);
       
    }
    else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.innerText = '';
        card2.innerText = '';
    }
    flippedCards2=[];
}


function Fill2(id){
    for(endCard of endCards2){
     if(endCard==id){
          newCard=document.querySelector(`.endb .${id}:not(.flipped) `);
       
     }
    
     
 
       
    }
      newCard.classList.add("flipped");
     newCard.innerText=id;
      count++;
      if(count==13){
        confetti({
            particleCount: 3000,
            spread: 700,
            origin: { y: 0.6 }
          });
       }
 }
intiate2();




let endCards1=['H','A','P','P','Y'];
let endDiv1=document.querySelector(".endh");
endCards1.forEach((value)=>{
    createCards31(value);
})
function createCards31(value){
    let card=document.createElement("div");
    card.classList.add("card");
    // console.dir(card);
    card.classList.add(value);
    endDiv1.appendChild(card);
    
}

let endCards2=['B','I','R','T','H','D','A','Y'];
let endDiv2=document.querySelector(".endb");
endCards2.forEach((value)=>{
    createCards32(value);
})
function createCards32(value){
    let card=document.createElement("div");
    card.classList.add("card");
    // console.dir(card);
    card.classList.add(value);
    endDiv2.appendChild(card);
    
}
let pop=document.querySelector(".btn");
pop.addEventListener("click",()=>{
    confetti({
        particleCount: 1000,
        spread: 700,
        origin: { y: 0.6 }
      });
})
addEventListener("click",()=>{
    confetti({
        particleCount: 4,
        spread: 100,
        origin: { y: 0.6 }
      });
})