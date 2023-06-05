
obt = [];


function setup(){
    canvas = createCanvas(600,400);
    canvas.center();
    model = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("st").innerHTML = "Notified:-- Object detecting";
}

function modelLoaded(){
    console.log("Model is linked");
    model.detect(dc,  showResult);
}

function showResult(error,result){
    if(error){
         console.log(error);
    }
    else{
        console.log(result);
        obt = result;
        }
} 


function preload(){
    people = loadImage("pea.jpg");
    dc = loadImage("dc.jpg");
}
function draw(){
   image(dc, 0, 0, 600, 400);
   for(i = 0; i < obt.length; i++)
   {
    document.getElementById("st").innerHTML = "Notified:-- Object detected";
    stroke("purple");
    noFill();
    strokeWeight(2);
    rect(obt[i].x, obt[i].y-30, obt[i].width, obt[i].height);
    conf = Math.floor(obt[i].confidence * 100);
    text(obt[i].label + conf + "%", obt[i].x, obt[i].y-30 );
   }
}