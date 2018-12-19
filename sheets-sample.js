fetch("https://sheets.googleapis.com/v4/spreadsheets/1bULwtvSec8ZKUiJZ8qvPVgKpX0wGKKQXk7wekoP4lbo/values/data?key=AIzaSyCpc-46ZfrDixQdHk51nPde4gJlA06tcD8").then(
    response => {
        return response.json();
    }
).then(
    json => {
        let html = "<ul>";
        console.log(json);

        json.values.forEach( row => {
                html += `<li>${row[0]}, ${row[1]}, ${row[2]}</li>`;
            }
        );

        html += "</ul>";
        document.querySelector("#result").innerHTML = html;
    }
);