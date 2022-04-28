shoe = "";
objects = [];
status = "";

function preload() {
shoe = loadImage("https://mail.google.com/mail/u/0?ui=2&ik=15e0dc2adb&attid=0.5&permmsgid=msg-f:1731213032413722656&th=18068114a38bf820&view=fimg&realattid=546ff563bc7ea5ab_0.5&disp=thd&attbid=ANGjdJ_F1kbj25n2VdaSgVebAuOM5L-i6ywA0Ua_rm70_fULX0k1OQVga7t8mL3EE6ngcWKEugrjnHnnaE3FFoDCBFSx7QkdwGq39JiqM0mBFr3ghFLfhzKNfH_7gCE&ats=2524608000000&sz=w1326-h658")
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