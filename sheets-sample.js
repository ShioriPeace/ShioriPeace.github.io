/*fetch("https://sheets.googleapis.com/v4/spreadsheets/1vvNBYDw8iaPidm7Z4-UtGLY8-Y2Yf5hzu2v5v7m1vHA/values/sheet1!A1:C6?key=AIzaSyDGu3-jXAEgxc9ywdeeFWXw9e8QGE3uk2c").then(
    response => {
        return response.json();
    }
).*/

fetch("https://sheets.googleapis.com/v4/spreadsheets/1bULwtvSec8ZKUiJZ8qvPVgKpX0wGKKQXk7wekoP4lbo/values/data?key=AIzaSyAHmMpbMqePjuQXzThfIjZ4zAFkwaFHxTE").then(
    response => {
        return response.json();
    }
).then(
    json => {
        let html = "<ul>";
        console.log(json);
        //ここに何か書く

        json.values.forEach(row =>{ //jsonの中のvalueというところに入っているのを全て取り出す→その中のrowという配列の中を取り出す
          html +=  `<li><${row[0]},${row[1]}.${row[2]}</li>`
        });//ここはfunction row

        html = "</ul>";
        document.querySelector("#result").innerHTML = html;
    }
);