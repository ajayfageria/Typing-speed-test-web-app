const allString = ["My name is ajay kumar i belongs to hisar haryana and i have done btech in computer science and engineering",
    "Currently i am working as a software developer at XYZ software in gurgaon",
    "I joined this company in july 2019",
]
const msg = document.getElementById('msg');
const btn = document.getElementById('btn');
const typedWords = document.getElementById('mywords');

let startTime, endTime;

function playGame() {
    let randomNumber = Math.floor(Math.random() * allString.length);
    msg.innerText = allString[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}
const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = (endTime - startTime) / 1000;
    let totalStr = typedWords.value;
    let wordCount = wordCounter(totalStr);
    let speed = Math.round(wordCount / totalTime) * 60;
    let finalMsg = "You typed total at " + speed + " words per minute ";
    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;

}
const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;

}
const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;
    words1.forEach(function(item, index) {
        if (item == words2[index]) {
            count++;
        }
    });
    let errorWords = (words1.length - count);
    return (count + " correct out of " + words1.length + " words and the total number of error are " + errorWords + " ");
}
btn.addEventListener('click', function() {
    if (this.innerText == 'Start') {
        typedWords.disabled = false;
        playGame();
    } else if (this.innerText == "Done") {
        typedWords.disabled = true;
        btn.innerText = "Start";
        endPlay();

    }
})