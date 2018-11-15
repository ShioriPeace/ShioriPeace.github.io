function showModal(){
    document.querySelector("#modal").innerHTML="オサレた";

}

function changeRed(){
    document.querySelector("#modal").style.backgroundColor="#ff0000";
}

function changeYellow(){
    document.querySelector("#modal").style.backgroundColor="#ffea00";

}

function changeGreen(){

   document.querySelector("#modal").style.backgroundColor="#00ff6b";
}

function appendCircle() {
    document.querySelector("#modal").append("◯");
    //document.querySelector("#modal").innerHTML += "◯";
}

function appendCross() {
    document.querySelector("#modal").innerHTML += "×";

}

function plusOne() {
    document.querySelector("#modal").innerHTML ++;
   // document.querySelector("#modal").innerHTML =
      //  Number(document.querySelector("#modal").innerHTML) + 1;
}

function plusFive(){
    document.querySelector("#modal").innerHTML =
        Number(document.querySelector("#modal").innerHTML) + 5;

}

function plusTen(){
    document.querySelector("#modal").innerHTML =
        Number(document.querySelector("#modal").innerHTML) + 10;
}