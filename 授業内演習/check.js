function checkNumber() {
    let num = document.querySelector('#num');
    if(Number(num.value) !== 10){
        window.alert("true");
    }else{
        window.alert("false");
    }

}

function checkUserInput(){
    let num = document.querySelector('#user_input');
    if(String(num.value) ==="テキストボックス"){
        window.alert("◯");

    }else{
        window.alert("×");
    }
}

/*function checkAge() {
    let age = document.querySelector("#age");
    if(Number(age.value) < 20){
        window.alert("未成年");
    }
    if(Number(age.value >= 20 && age)){
        window.alert("成年");
    }
    if (Number(age.value) > 65){
        window.alert("高齢者");
    }
    if (Number(age.value) < 0){
        window.alert("エラー");
    }

}*/

function checkAge(){
    let age = document.querySelector("#age");
    let ageNumber = Number(age.value);
    let answer = document.querySelector("#answer");

    // 下から条件を書いていった場合
    if(ageNumber <= 0){
        answer.innerHTML = "エラー";
    }else if(ageNumber < 20){
        answer.innerHTML = "未成年";
    }else if(ageNumber < 65){
        answer.innerHTML = "成人";
    }else{
        answer.innerHTML = "高齢者";
    }

    // // 上から条件を書いていた場合
    // if(ageNumber >= 65){
    //   answer.innerHTML = "高齢者";
    // }else if(ageNumber >= 20){
    //   answer.innerHTML = "成人";
    // }else if(ageNumber > 0){
    //   answer.innerHTML = "未成年";
    // }else{
    //   answer.innerHTML = "エラー";
    // }
}

function checkYear() {
    let year = document.querySelector("#year");
    let yearNumber = Number(year.value);
    let answer = document.querySelector("#answer");

    if(yearNumber % 400 === 0){
        answer.innerHTML = "閏年";
    }else if(yearNumber % 100 === 0){
        answer.innerHTML = "平年";
    }else if(yearNumber % 4 === 0){
        answer.innerHTML = "閏年";
    }else{
        answer.innerHTML = "平年";
    }
}