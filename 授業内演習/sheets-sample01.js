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
            html +=  `<li>${row[0]}</li>`
        });//ここはfunction row

        html += "</ul>";
        document.querySelector("#result").innerHTML = html;
    }
);