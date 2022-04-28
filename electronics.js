electronics = "";
objects = [];
status = "";

function preload() {
electronics = loadImage("https://mail.google.com/mail/u/0?ui=2&ik=15e0dc2adb&attid=0.3&permmsgid=msg-f:1731213032413722656&th=18068114a38bf820&view=fimg&realattid=546ff563bc7ea5ab_0.3&disp=thd&attbid=ANGjdJ80MlgKJGL0TLMJyLqpHz1yXXPWV3B70iaQ6cBMqBCIev2vQvmgEAgJdSrmHH3EfHKqWdBWx-Inhfko_VKXZQZWcY9BAQ9eW8ysAQSt5ia4mQD5X14MamnykPY&ats=2524608000000&sz=w1326-h658");
}

function setup() {
canvas = createCanvas(300,300);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(toys, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}