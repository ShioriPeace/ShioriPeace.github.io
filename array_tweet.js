let tweetsHTML ="<ul>";


let appendTweet = function(tweet) {
    tweetsHTML += `<li><div class="ImgBox"><img src=${tweet.avatar} alt="" style="width: 100%" class="well"></div> <div class="TextBox"><b>${tweet.name}</b><br>${tweet.message} <br>${tweet.tweetedAt}</div></li>`;
};


tweets.forEach(appendTweet);

tweetsHTML += "</ul>";

document.querySelector("#answer").innerHTML = tweetsHTML;



function onClickButtonSaburo() {
    let tweetsHTML ="<ul>";
    let appendTweet = function (tweet) {
        if(tweet.name === '三郎BOT'){
            tweetsHTML +=  `<li><div class="ImgBox"><img src=${tweet.avatar} alt="" style="width: 100%"></div> <div class="TextBox"><b>${tweet.name}</b><br>${tweet.message} <br>${tweet.tweetedAt}</div></li>`;

        }

    };

    tweets.forEach(appendTweet);
    tweetsHTML += "</ul>";
    document.querySelector("#answer").innerHTML = tweetsHTML;

   /* let Saburo = tweets.filter(x => x.name === '三郎BOT');
    document.querySelectorAll("#answer").innerHTML = Saburo;
    console.log(Saburo);*/
}

function onClickButton() {
    let tweetsHTML ="<ul>";
    let appendTweet = function (tweet) {
        if(tweet.name === '次郎'){
            tweetsHTML +=  `<li><div class="ImgBox"><img src=${tweet.avatar} alt="" style="width: 100%"></div> <div class="TextBox"><b>${tweet.name}</b><br>${tweet.message} <br>${tweet.tweetedAt}</div></li>`;
        }
    };

    tweets.forEach(appendTweet);
    tweetsHTML += "</ul>";
    document.querySelector("#answer").innerHTML = tweetsHTML;

}

function onClickButtonTaro() {
    let tweetsHTML ="<ul>";
    let appendTweet = function (tweet) {
        if(tweet.name === '太郎'){
            tweetsHTML +=  `<li><div class="ImgBox"><img src=${tweet.avatar} alt="" style="width: 100%"></div> <div class="TextBox"><b>${tweet.name}</b><br>${tweet.message} <br>${tweet.tweetedAt}</div></li>`;
        }
    };
    tweets.forEach(appendTweet);
    tweetsHTML += "</ul>";
    document.querySelector("#answer").innerHTML = tweetsHTML;
}


function onClickButtonAll() {
    let tweetsHTML ="<ul>";
    let appendTweet = function (tweet) {
            tweetsHTML +=  `<li><div class="ImgBox"><img src=${tweet.avatar} alt="" style="width: 100%"></div> <div class="TextBox"><b>${tweet.name}</b><br>${tweet.message} <br>${tweet.tweetedAt}</div></li>`;

    };
    tweets.forEach(appendTweet);
    tweetsHTML += "</ul>";
    document.querySelector("#answer").innerHTML = tweetsHTML;

}


