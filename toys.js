toys = "";
objects = [];
status = "";

function preload() {
toys = loadImage("https://mail.google.com/mail/u/0?ui=2&ik=15e0dc2adb&attid=0.1&permmsgid=msg-f:1731213032413722656&th=18068114a38bf820&view=fimg&realattid=546ff563bc7ea5ab_0.1&disp=thd&attbid=ANGjdJ9bIw2yPzm9oCFwpvT_gb5w9KlCGazldSsHU1t95NCXvNYmVuebo9YoUFYvxmtk2zQgVfgDG37p37o7G-UbdnQ0jvcVuK6QF_Ly7LlmLIpRZ2eM-iFdYXTEphg&ats=2524608000000&sz=w1326-h658");
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