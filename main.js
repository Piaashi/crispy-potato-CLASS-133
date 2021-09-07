img="";
status1="";
objects=[];
function setup()
{
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status:dectecting objects";
}

function modelLoaded()
{
 console.log("modelLoaded");
 status1=true;
 objectDetector.detect(img,gotResult)
}


function draw()
{
image(img,0,0,640,420);
if(status1!="")
{for(i=0;i<objects.length;i++)
{
 document.getElementById("status1").innerHTML="staus object detected";
 fill("#FF0000");
 percent=floor(objects[i].confidence*100);
 text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y)
 noFill();
 rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}

































}


}


function preload()
{
 img=loadImage("dog_cat.jpg");

}

function gotResult(error,results)
{
 if(error)
 {
     console.log(error);
 }
 console.log(results)
 objects=results;
}