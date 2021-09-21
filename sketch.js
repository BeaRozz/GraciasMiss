var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crea la primera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50){ 
    plinkos.push(new Plinko(j,75));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  //crea la tercera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  
  //crea la cuarta fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
    
  }
  //muestra las partículas 
  for (var p = 0; p < particles.length; p++){
    
    particles[p].display();
  }
  /*for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }*/
   
  //muestra las divisiones
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  
}
