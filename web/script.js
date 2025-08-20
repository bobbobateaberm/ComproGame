



let character="";
let player2 = "";
let quest = "";
let boolans = "";
let ans = "";

let charalist = ["Pharuj Assembler","Kendo Deedo","Piya Mogger"] //["Pharuj Assembler","Kendo Deedo","Piya Mogger"] ["Kendo Deedo"]
const randomIndex1 = Math.floor(Math.random() * charalist.length);
player2 = charalist[randomIndex1];

let kendolist = ["1","2","3","4","5"]
const randomIndex2 = Math.floor(Math.random() * kendolist.length);
questkendo = kendolist[randomIndex2];
console.log("questindexken :" ,questkendo)


let pharujlist = ["1","2","3","4","5"]
const randomIndex3 = Math.floor(Math.random() * pharujlist.length);
questpharuj = pharujlist[randomIndex3];
console.log("questindexpharuj :" ,questpharuj)

let piyalist = ["1","2","3","4","5"]
const randomIndex4 = Math.floor(Math.random() * piyalist.length);
questpiya = piyalist[randomIndex4];
console.log("questindexpiya :" ,questpiya)

let thanalist = ["1","2","3","4","5"]
const randomIndex5 = Math.floor(Math.random() * thanalist.length);
questthana = thanalist[randomIndex5];
console.log("questindexthana :" ,questthana)




function charaselfunc1(){
    document.getElementById("chara1");
    document.getElementById("chara2").style.display="none";
    document.getElementById("charabox2").style.display="none";
    document.getElementById("chara3").style.display="none";
     document.getElementById("charabox3").style.display="none";
    document.getElementById("chara4").style.display="none";
     document.getElementById("charabox4").style.display="none";
    character = "Kendo Deedo";
    let elements = document.getElementsByClassName("charasel");
     for (let i = 0; i < elements.length; i++) {
    elements[i].style.animation = "none";
    }
    document.getElementById("submit").style.display="block";
    document.getElementById("chara1skill").style.display="inline-block";
    


}

function charaselfunc2(){
    document.getElementById("chara2");
    document.getElementById("chara1").style.display="none";
    document.getElementById("charabox1").style.display="none";
    document.getElementById("chara3").style.display="none";
    document.getElementById("charabox3").style.display="none";
    document.getElementById("chara4").style.display="none";
    document.getElementById("charabox4").style.display="none";
    character = "Pharuj Assembler";
     let elements = document.getElementsByClassName("charasel");
     for (let i = 0; i < elements.length; i++) {
    elements[i].style.animation = "none";
}
document.getElementById("submit").style.display="block";
document.getElementById("chara2skill").style.display="inline-block";
}


function charaselfunc3(){
    document.getElementById("chara3");
    document.getElementById("chara1").style.display="none";
    document.getElementById("charabox1").style.display="none";
    document.getElementById("chara2").style.display="none";
    document.getElementById("charabox2").style.display="none";
    document.getElementById("chara4").style.display="none";
    document.getElementById("charabox4").style.display="none";
    character = "Piya Mogger";
     let elements = document.getElementsByClassName("charasel");
     for (let i = 0; i < elements.length; i++) {
    elements[i].style.animation = "none";
}
document.getElementById("submit").style.display="block";
document.getElementById("chara3skill").style.display="inline-block";
}


function charaselfunc4(){
    document.getElementById("chara4");
    document.getElementById("chara1").style.display="none";
    document.getElementById("charabox1").style.display="none";
    document.getElementById("chara2").style.display="none";
    document.getElementById("charabox2").style.display="none";
    document.getElementById("chara3").style.display="none";
    document.getElementById("charabox3").style.display="none";
    character = "Thana Block";
     let elements = document.getElementsByClassName("charasel");
     for (let i = 0; i < elements.length; i++) {
    elements[i].style.animation = "none";
}
document.getElementById("submit").style.display="block";
document.getElementById("chara4skill").style.display="inline-block";
}




function clickfunc(){
    document.getElementById("submit");
    document.getElementById("battle").style.display = "inline-block";
   
    if (player2 === "Thana Block"){
     document.getElementById("player4").style.display = "block";
    }
    else if (player2 === "Piya Mogger"){
     document.getElementById("player3").style.display = "block";
    }
     else if (player2 === "Pharuj Assembler"){
     document.getElementById("player2").style.display = "block";
    }
     else if (player2 === "Kendo Deedo"){
     document.getElementById("player1").style.display = "block";
    }
    document.getElementById("submit").style.display = "none";
     document.getElementById("submitbat").style.display = "block";



}



function clickbatfunc(){
    document.getElementById("submitbat");
    document.getElementById("playerbox").style.display = "inline-block";
     document.getElementById("battleh1").innerHTML = "Opponent";
    console.log("player :",character)

    if (character === "Thana Block"){
     document.getElementById("chara44").style.display = "block";
     document.getElementById("itemcharabox").style.display = "none";
     console.log('succesfully imported', character)
     document.getElementById("submitbat").style.display = "none";
     document.getElementById("questbox").style.display = "block";
     mainquest();

    }
    else if (character === "Piya Mogger"){
     document.getElementById("chara33").style.display = "block";
     document.getElementById("itemcharabox").style.display = "none";
     console.log('succesfully imported', character)
     document.getElementById("submitbat").style.display = "none";
     document.getElementById("questbox").style.display = "block";
     mainquest();
    }
     else if (character === "Pharuj Assembler"){
     document.getElementById("chara22").style.display = "block";
     document.getElementById("itemcharabox").style.display = "none";
     console.log('succesfully imported', character)
     document.getElementById("submitbat").style.display = "none";
     document.getElementById("questbox").style.display = "block";
     mainquest();
    }

     else if (character === "Kendo Deedo"){
     document.getElementById("chara11").style.display = "block";
     document.getElementById("itemcharabox").style.display = "none";
     console.log('succesfully imported', character)
     document.getElementById("submitbat").style.display = "none";
     document.getElementById("questbox").style.display = "block";
     mainquest();
     }
     


}




function mainquest(){
//main quest
     if(player2 === "Kendo Deedo"){
if(questkendo === "1"){
    document.getElementById("questboxken1").style.display = "block";
}
else if(questkendo === "2"){
    document.getElementById("questboxken2").style.display = "block";
}

else if(questkendo === "3"){
    document.getElementById("questboxken3").style.display = "block";
}

else if(questkendo === "4"){
    document.getElementById("questboxken4").style.display = "block";
}
else if(questkendo === "5"){
    document.getElementById("questboxken5").style.display = "block";
}

    }
    if(player2 === "Pharuj Assembler"){
if(questpharuj === "1"){
    document.getElementById("questboxpha1").style.display = "block";
}
else if(questpharuj === "2"){
    document.getElementById("questboxpha2").style.display = "block";
}

else if(questpharuj === "3"){
    document.getElementById("questboxpha3").style.display = "block";
}

else if(questpharuj === "4"){
    document.getElementById("questboxpha4").style.display = "block";
}
else if(questpharuj === "5"){
    document.getElementById("questboxpha5").style.display = "block";
}

    }
     if(player2 === "Piya Mogger"){
if(questpiya === "1"){
    document.getElementById("questboxpiya1").style.display = "block";
}
else if(questpiya === "2"){
    document.getElementById("questboxpiya2").style.display = "block";
}

else if(questpiya === "3"){
    document.getElementById("questboxpiya3").style.display = "block";
}

else if(questpiya === "4"){
    document.getElementById("questboxpiya4").style.display = "block";
}
else if(questpiya === "5"){
    document.getElementById("questboxpiya5").style.display = "block";
}

    }

     if(player2 === "Thana Block"){
if(questthana === "1"){
    document.getElementById("questboxthana1").style.display = "block";
}
else if(questthana === "2"){
    document.getElementById("questboxthana2").style.display = "block";
}

else if(questthana === "3"){
    document.getElementById("questboxthana3").style.display = "block";
}

else if(questthana === "4"){
    document.getElementById("questboxthana4").style.display = "block";
}
else if(questthana === "5"){
    document.getElementById("questboxthana5").style.display = "block";
}

    }


    //main quest
}



function clickansfunc(){


if(player2 === "Kendo Deedo"){
  questkendocheck()
  setTimeout(function() {
    location.reload();
}, 3000); 
}
else if(player2 === "Pharuj Assembler"){
  questpharujcheck()
  setTimeout(function() {
    location.reload();
}, 3000); 
}
else if(player2 === "Piya Mogger"){
  questpiyacheck()
  setTimeout(function() {
    location.reload();
}, 3000); 
}

}






function questkendocheck(){
    if(questkendo === "1"){

   ans = document.getElementById("ansken1").value;

 if(ans !== "3"){
   boolans = false ;
}
 else if(ans === "3"){
    boolans = true;
 }

    if(boolans === false){
       showlost()
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
console.log(boolans)    
console.log(ans)


}

if(questkendo === "2"){

   ans = document.getElementById("ansken2").value;

 if(ans !== "no"){
   boolans = false ;
}
 else if(ans === "no"){
    boolans = true;
 }

    if(boolans === false){
       showlost()
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
    
console.log(boolans)
console.log(ans)


}
if(questkendo === "3"){

   ans = document.getElementById("ansken3").value;

 if(ans !== "B"){
   boolans = false ;
}
 else if(ans === "B"){
    boolans = true;
 }

    if(boolans === false){
       showlost()
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
        
console.log(boolans)
console.log(ans)


}
if(questkendo === "4"){

   ans = document.getElementById("ansken4").value;

 if(ans !== "B"){
   boolans = false ;
}
 else if(ans === "B"){
    boolans = true;
 }

    if(boolans === false){
       showlost();
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
        
console.log(boolans)
console.log(ans)


}
if(questkendo === "5"){

   ans = document.getElementById("ansken5").value;

 if(ans !== "B"){
   boolans = false ;
}
 else if(ans === "B"){
    boolans = true;
 }

    if(boolans === false){
       showlost()
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
        
console.log(boolans)
console.log(ans)
}

}
function questpharujcheck(){
    if(questpharuj === "1"){

   ans = document.getElementById("anspha1").value;

 if(ans !== "A"){
   boolans = false ;
}
 else if(ans === "A"){
    boolans = true;
 }

    if(boolans === false){
       showlost()
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
    
console.log(ans)


}

if(questpharuj === "2"){

   ans = document.getElementById("anspha2").value;

 if(ans !== "56"){
   boolans = false ;
}
 else if(ans === "56"){
    boolans = true;
 }

    if(boolans === false){
       showlost()
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
    
console.log(boolans)
console.log(ans)


}
if(questpharuj === "3"){

   ans = document.getElementById("anspha3").value;

 if(ans !== "B"){
   boolans = false ;
}
 else if(ans === "B"){
    boolans = true;
 }

    if(boolans === false){
       showlost()
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
        
console.log(boolans)
console.log(ans)


}

if(questpharuj === "4"){

   ans = document.getElementById("anspha4").value;

 if(ans !== "A"){
   boolans = false ;
}
 else if(ans === "A"){
    boolans = true;
 }

    if(boolans === false){
       showlost()
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
        
console.log(boolans)
console.log(ans)


}
if(questpharuj === "5"){

   ans = document.getElementById("anspha5").value;

 if(ans !== "B"){
   boolans = false ;
}
 else if(ans === "B"){
    boolans = true;

 }

    if(boolans === false){
       showlost()
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
        
console.log(boolans)
console.log(ans)


}

}
function questpiyacheck(){
    if(questpiya === "1"){

   ans = document.getElementById("anspiya1").value;

 if(ans !== "A"){
   boolans = false ;
}
 else if(ans === "A"){
    boolans = true;
 }

    if(boolans === false){
       showlost()
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
    
console.log(ans)


}

if(questpiya === "2"){

   ans = document.getElementById("anspiya2").value;

 if(ans !== "A"){
   boolans = false ;
}
 else if(ans === "A"){
    boolans = true;
 }

    if(boolans === false){
       showlost()
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
    
console.log(boolans)
console.log(ans)


}
if(questpiya === "3"){

   ans = document.getElementById("anspiya3").value;

 if(ans !== "John"){
   boolans = false ;
}
 else if(ans === "John"){
    boolans = true;
 }

    if(boolans === false){
       showlost()
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
        
console.log(boolans)
console.log(ans)


}
if(questpiya === "3"){

   ans = document.getElementById("anspiya3-1").value;

 if(ans !== "36"){
   boolans = false ;
}
 else if(ans === "36"){
    boolans = true;
 }

    if(boolans === false){
       showlost()
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
        
console.log(boolans)
console.log(ans)


}
if(questpiya === "4"){

   ans = document.getElementById("anspiya4").value;

 if(ans !== "A"){
   boolans = false ;
}
 else if(ans === "A"){
    boolans = true;
 }

    if(boolans === false){
       showlost()
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
        
console.log(boolans)
console.log(ans)


}
if(questpiya === "5"){

   ans = document.getElementById("anspiya5").value;

 if(ans !== "B"){
   boolans = false ;
}
 else if(ans === "B"){
    boolans = true;

 }

    if(boolans === false){
       showlost()
       console.log(ans)
    }
    else if (boolans === true){
      showwin()
      console.log(ans)
    }
        
console.log(boolans)
console.log(ans)


}

}
function showwin(){
   document.getElementById("questbox").style.display="none";
   document.getElementById("battle").style.display="none";
   document.getElementById("playerbox").style.display="none";
   document.body.style.background="black";
   document.getElementById("win").style.display="block";
    document.getElementById("win").style.animation="lost 4s";
   
}
function showlost(){
   document.getElementById("questbox").style.display="none";
    document.getElementById("battle").style.display="none";
   document.getElementById("playerbox").style.display="none";
   document.body.style.background="white";
   document.getElementById("lost").style.display="block";
   document.getElementById("lost").style.animation="lost 4s";
}