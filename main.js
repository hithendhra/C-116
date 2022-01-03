noseX=0;
noseY=0;

function preload() 
{
    clown_nose=loadImage('https://i.postimg.cc/pd7NY46g/Clown1.png');
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

function draw()
{
    image(video,0,0,300,300);
    image(clown_nose,noseX-25,noseY-15,50,50);
}

function take_snapshot()
{
    save('my_filter_image.png');
}


function modelloaded()
{
    console.log('Model Loaded');
}

function gotposes(results)
{
  if (results.length > 0)
{
      console.log(results);
  noseX=results[0].pose.nose.x;
  noseY=results[0].pose.nose.y;

      console.log("NOSE X = "+noseX);
      console.log("NOSE Y = "+noseY);
}
}