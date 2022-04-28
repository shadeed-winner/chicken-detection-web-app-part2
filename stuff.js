stuff = "";
objects = [];
status = "";

function preload() {
stuff = loadImage("https://mail.google.com/mail/u/0?ui=2&ik=15e0dc2adb&attid=0.2&permmsgid=msg-f:1731213032413722656&th=18068114a38bf820&view=fimg&realattid=546ff563bc7ea5ab_0.2&disp=thd&attbid=ANGjdJ_iuGJfNK77mr-PqPPkeuZCa6SoE_z7Z_zQvxAmbh5nH5tc7xIP2poos7qi_yJbc8AAMB7w7gE-rnDiLWyUTawxiA73A55bPoLmdHbuYwmEPiM8_l7bUfv3G1k&ats=2524608000000&sz=w1326-h658");
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