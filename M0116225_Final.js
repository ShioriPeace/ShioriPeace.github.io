/*fetch("https://sheets.googleapis.com/v4/spreadsheets/1vvNBYDw8iaPidm7Z4-UtGLY8-Y2Yf5hzu2v5v7m1vHA/values/sheet1!A1:C6?key=AIzaSyDGu3-jXAEgxc9ywdeeFWXw9e8QGE3uk2c").then(
    response => {
        return response.json();
    }
).*/

fetch("https://sheets.googleapis.com/v4/spreadsheets/1bULwtvSec8ZKUiJZ8qvPVgKpX0wGKKQXk7wekoP4lbo/values/data!A2:E26?key=AIzaSyCpc-46ZfrDixQdHk51nPde4gJlA06tcD8").then(
    response => {
        return response.json();
    }
).then(
    json => {
        /*let html = "<ul>";
        console.log(json);
        //ここに何か書く


       json.values.forEach(row =>{ //jsonの中のvalueというところに入っているのを全て取り出す→その中のrowという配列の中を取り出す
            html +=  `<li><${row[0]},${row[1]},${row[2]}</li>`
        });//ここはfunction row

        html = "</ul>";*/

        /* let html = `    <div class="col-4">
       <div class="card mx-auto" style="width: 18rem;">
         <img class="card-img-top" src="octnalAudio.png" alt="カードの画像">
         <div class="card-body">
           <h5 class="card-title">OCTNAL AUDIO TABLE</h5>
           <p class="card-text">CDを机に置くだけで音楽プレーヤーのように再生できるIoTデバイス</p>
           <a href="#" class="btn btn-primary">詳しくはこちら</a>
         </div>
       </div>
     </div>`;*/

        let JsonCard = "";
        json.values.forEach(row => {
            JsonCard += `<div class="col-4">
      <div class="card mx-auto" style="width: 18rem;">
        <img class="card-img-top" src= "${row[3]}" alt="カードの画像">
        <div class="card-body">
          <h5 class="card-title">${row[0]}</h5>
          <p class="card-text">${row[1]}</p>
          <a href="#" class="btn btn-primary">詳しくはこちら</a>
        </div>
      </div>
    </div>`;

            // JsonCard += `<li><div class="row"><div class="col-4"><div class="card mx-auto" style="width: 18rem;"><div class="card-img-top"><img src="http://${row[3]}" alt="">
            // <div class="card-title">${row[0]}</div></div></div></div></li>`
        });


        document.querySelector("#contents").innerHTML = JsonCard;

        let SlidePhoto = "";
        json.values.forEach(row =>{
            SlidePhoto += `<div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src= "${row[4]}" >
      </div>
       </div>`

        });

        document.querySelector("#contents").innerHTML = SlidePhoto;
    });



/*let card = `<div class="col-4">
      <div class="card mx-auto" style="width: 18rem;">
        <img class="card-img-top" src="iroiro_320.jpg" alt="カードの画像">
        <div class="card-body">
          <h5 class="card-title">いろ色メモリアル</h5>
          <p class="card-text">カメラで写したモノの色で絵が描けるAndroidアプリ</p>
          <a href="#" class="btn btn-primary">詳しくはこちら</a>
        </div>
      </div>
    </div>`;*/

// function onClickTest() {
//     document.querySelector("#contents").innerHTML += card;
//
// }?





