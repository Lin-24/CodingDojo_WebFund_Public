function consultOracle(){
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    var randoIndex = Math.ceil(Math.random()*lifesAnswers.length)-1;
    console.log(lifesAnswers[randoIndex]);
    
    // var trackerArray = [];
    // while(trackerArray.length < lifesAnswers.length){
    //     var randoIndex = Math.ceil(Math.random()*lifesAnswers.length)-1;
    //     if(!trackerArray.includes(randoIndex)){
    //         console.log(lifesAnswers[randoIndex]);
    //         trackerArray.push(randoIndex);
    //     }
    // }
    // console.log(trackerArray);

}

consultOracle();

