let tweetsHTML ="<ul>";

let appendTweet = function(tweet) {
    tweetsHTML += `<li><div class="ImgBox"><img src=${tweet.avatar} width = "100%"></div> <div class="TextBox"><b>${tweet.name}</b>${tweet.message} ${tweet.tweetedAt}</div></li>`;

};


tweets.forEach(appendTweet);

tweetsHTML += "</ul>";
document.querySelector("#answer").innerHTML = tweetsHTML;

function onClickButton(){
    

}
