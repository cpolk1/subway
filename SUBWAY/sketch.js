
let magazine, myPara, myTrain, myButton, X = -200, Y = 400;
let lightFlick = 243;
let xPos = -1000
let peopleSlider;
let trainCounter = 90;
let trainStopped = false;
let hasNotStopped = true;

function setup() {


  var canvas = createCanvas(900, 650);
  //positions canvvas
  canvas.parent('sketch.js');

  for (var y = 0; y <= height; y += 40) {
          for (var x = 0; x <= width; x += 40) {
            fill(255, 140);
            rect(x, y, 40, 40);
      }
  }
    peopleSlider = createSlider(0, 20, 5);

    myPara = createP("C TRAINS WILL NOT BE STOPPING AT THIS STATION");
        myButton = createButton("NEXT TRAIN")
        myButton.mousePressed(theTrain)

        magazine = createImg("https://contentmarketinginstitute.com/wp-content/uploads/2014/01/magazine-rack-content-shock.jpg");

       magazine.hide();

      input = createInput();
      input.position(0, 950);

      button = createButton('submit');
      button.position(input.x + input.width, 950);
      button.mousePressed(greet);

      greeting = createElement('h2', 'FILE A COMPLAINT');
      greeting.position(0, 900);

      textAlign(LEFT);
      textSize(25);

        let ratButton = createButton("OH EW")
      ratButton.mousePressed(drawRat);

  }

    function draw() {



       //lights far
        stroke(0);
        strokeWeight(2);
        fill(243, 242, 204);
        rect(0,0, 900, 30);



        //subway tracks far
        fill(74, 62, 62);
        rect( 0, 150, 900, 200);
        fill(0);
        rect( 0, 200, 900, 300);
        fill(255,0,0,43);
        rect(0, 130, 900, 20);

        //subway platform
        fill(169);
        rect( 0, 300, 900, 470);

        //subway warning line far
        strokeWeight(0);
        fill(229,223, 42);
        rect( 0, 290, 900, 10);
        stroke(255);
        strokeWeight(3);
        line( 0, 300, 900, 300);

        //subway booth
        fill(174);
        stroke(0);
        strokeWeight(1);
        rect(150, 0, 350, 350);
          //booth sign
        fill(0);
        strokeWeight(1);
        rect(160, 60, 330, 100);
        textSize(25);
        fill(255);
        text('N E W S  S T A N D', 220, 85);

          //window in the booth
        fill(134, 127, 127);
        strokeWeight(1);
        rect(160, 90, 330, 100);
        rect(160, 95, 330, 100);
        rect(160, 100, 330, 100);
        rect(160, 105, 330, 100);
        fill(255);
        rect(160, 115, 330, 100);
        fill(80, 76, 68);
        rect(315, 115, 30, 5);
        rect(160, 200, 330, 20);

        //clock
        rect(245, 180, 60, 20);
        fill(223);
        rect(250.5, 182.5, 48.5, 14);

        var H = hour();
        var M = minute();
        var S = second();
        textSize(11);
        noStroke();
        fill(0);
        text('\n' + ' ' + nf(H, 2) + ':' + nf(M, 2) + ':' + nf(S, 2), 251.45, 180.5);

        //display counter
        fill(255);
        rect( 160, 225, 330, 120);
        image(magazine, 168, 230, magazine.width*.85, magazine.height*.5);

      //subway pillars
        stroke(145);
        strokeWeight(1.25);
        fill(180);
        rect(30, 0, 80, 420, 20);

        fill(180);
        rect(680, 0, 80, 420, 20);

          //pillar signs
        stroke(0);
        strokeWeight(1);
        fill(255);
        rect(40, 180, 60, 100);
          //sign content
        fill(0);
        rect(40, 180, 60, 20);
        fill(255, 171, 0);
        circle(55, 215, 10);
        textSize(15);
        fill(255);
        text('C', 49, 220);
        textSize(10);
        fill(255);
        text('SERVICE', 48, 195);
        fill(0);
        line( 45, 230, 92, 230);
        line( 45, 235, 92, 235);
        line( 45, 240, 92, 240);
        line( 45, 245, 92, 245);
        line( 45, 250, 92, 250);
        line( 45, 255, 65, 255);

         //lights close
        stroke(0);
        strokeWeight(2);
        fill(lightFlick);
        rect(0,0, 900, 30, 10);

        fill(160);
        rect(110, 0, 10, 32);
        rect(250, 0, 10, 32);
        rect(390, 0, 10, 32);

        //subway sign
        fill(74, 62, 62);
        strokeWeight(1);
        rect(400, 0, 750, 70);
        fill(255, 171, 0);
        circle(450, 35, 20);
        textSize(25);
        fill(255);
        text('C', 441, 44);
        text('NEW CITY STATION', 575, 35);
        textSize(15);
        text('LOCAL TO OLD COUNTRY LANE - VILLAGE STREET', 500, 59);


        //subway warning line
        strokeWeight(0);
        fill(250,244,7);
        rect( 0, 460, 900, 500);
        stroke(255);
        strokeWeight(8);
        line( 0, 455, 900, 455);


        //subway tracks close
        strokeWeight(0);
        fill(74, 62, 62);
        rect( 0, 480, 900, 700);
        fill(0);
        rect( 0, 570, 900, 700);



        rat(0, 650);

//train and people
      if (myTrain && !trainStopped) {
        myTrain.position(xPos, 400);
          xPos += 10;
        if (xPos > width * 2) {
          xPos = -1000 * random (1, 10);
          hasNotStopped = true;
        }
        else if(xPos >= width/2 - 500 && hasNotStopped)
        {
          hasNotStopped = false;
          trainStopped = true;

        }
       }

        if(trainStopped)
        {
          const r = peopleSlider.value();
        for(var i = 1; i <= r; i++)
        {
           drawPerson();
        }
           trainCounter--;
          if(trainCounter <= 0)
          {
            trainStopped = false;
            trainCounter = 90;
          }
        }

      }

      function mousePressed() {

        myPara.html("TAKE THE 35 AND TRANSFER TO THE C LINE AT COURT SQUARE");

        myPara.style('color', '#ff0000');


      }

      function theTrain () {

         if(myTrain)
         {
          myTrain.remove()
         }
       myTrain = createImg("https://requestreduce.org/images/car-clipart-animated-16.png");
          xPos = -1000
         myTrain.position(xPos,300);

       }

 function keyPressed () {
      if (keyCode === UP_ARROW) {
        lightFlick = 240;
      } else if (keyCode === DOWN_ARROW) {
        lightFlick = 115;
      }
    }
  //complaint box
    function greet() {
      const complaint = input.value();
      greeting.html('Thank you for contacting the MTA!');
      input.value('');
      }
  //rat design
    function rat() {
      push();
      translate(X,Y);
      fill(0);
       arc(67, 43, 10, 20, PI, TWO_PI);
       arc(60, 60, 40, 40, PI, TWO_PI);
      strokeWeight(2);
      stroke(0);
       line(20, 60, 80, 60);
      pop();
    }

  function drawRat() {
      X = random (0, 650);
      Y = 400

}

//people
  function drawPerson() {
      tempx = random (0, 900);
      tempy = random (300, 400);
    fill(0,0,0);
      //fill(250,244,7);
     circle(tempx,tempy, 20);

      //
      ellipse(tempx, tempy+55, 30, 80);
    }
