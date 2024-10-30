let monkeys = [];
let scaleFactor = 1.5; 

function setup() {
  createCanvas(600, 600);
  monkeys.push({x: width / 2, y: height / 2});
}

function draw() {
  background(220);
  
  textSize(30);
  text('Monkey Mitosis', 180, 30);

  
  for (let i = 0; i < monkeys.length; i++) {
    drawMonkeyHead(monkeys[i].x, monkeys[i].y, scaleFactor);
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
  
    let newMonkeys = [];
    for (let i = 0; i < monkeys.length; i++) {
      let newX = random(50, width - 50);
      let newY = random(50, height - 50); 
      newMonkeys.push({x: newX, y: newY});
    }
    
    
    monkeys = monkeys.concat(newMonkeys);
  }
}


function drawMonkeyHead(x, y, scaleSize) {
  push();
  translate(x, y); 
  scale(scaleSize); 
  
  
  fill(160, 82, 45); 
  ellipse(-75, -20, 60, 80); 
  ellipse(75, -20, 60, 80);  
  
  fill(255, 224, 189); 
  ellipse(-75, -20, 40, 60); 
  ellipse(75, -20, 40, 60);  


  
  
  fill(160, 82, 45); 
  ellipse(0, 0, 130, 150); 
  
  
  fill(255); 
  ellipse(-30, -20, 40, 60); 
  ellipse(30, -20, 40, 60);  
  
  fill(0); 
  ellipse(-35, -30, 20, 20);
  ellipse(40, -20, 20, 20); 
  
  fill(255); 
  ellipse(-30, -35, 5, 5); 
  ellipse(45, -25, 5, 5);  

  fill(255, 224, 189); 
  ellipse(0, 30, 110, 100); 
  
  
  
  fill(0); 
  ellipse(0, 0, 30, 20); 
  
  
  fill(255, 182, 193); 
  arc(0, 25, 80, 60, 0, PI); 
  
  pop(); 
}