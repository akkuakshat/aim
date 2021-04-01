var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9de0e68a-3312-4e24-b3d4-63ab54e5af97","5e907269-d4b3-4d50-aec3-4bc56d02d1ae","4773b91e-326f-415b-b67f-89e30c1d7728","109e56da-ba22-4f9a-b82d-1a52e1c383a9","55522e8d-4461-4d98-8884-f94ce873bcda","33323ed1-88fb-4ab7-842a-9cf6848473a4","6cd88b3e-857b-48a5-a98d-0cfbf4a88f76","d5ebbe36-da3d-493c-b91d-fd15f847fcf0","277d2785-5e2f-4af6-919d-c383f9d5cefd"],"propsByKey":{"9de0e68a-3312-4e24-b3d4-63ab54e5af97":{"name":"gameOver","sourceUrl":"assets/v3/animations/QRlRaO7fA-jHis-RWSm9OktKej-4mYaMVgJNtSBz4RE/9de0e68a-3312-4e24-b3d4-63ab54e5af97.png","frameSize":{"x":381,"y":21},"frameCount":1,"looping":true,"frameDelay":4,"version":"qL2kJAi6CrVUGG.HnsHO6RugzQgZ_hhO","loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":21},"rootRelativePath":"assets/v3/animations/QRlRaO7fA-jHis-RWSm9OktKej-4mYaMVgJNtSBz4RE/9de0e68a-3312-4e24-b3d4-63ab54e5af97.png"},"5e907269-d4b3-4d50-aec3-4bc56d02d1ae":{"name":"restart","sourceUrl":"assets/v3/animations/QRlRaO7fA-jHis-RWSm9OktKej-4mYaMVgJNtSBz4RE/5e907269-d4b3-4d50-aec3-4bc56d02d1ae.png","frameSize":{"x":75,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"vYCbWLP08IO.fyGYHE7QzXzOoZ1DTAWb","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":64},"rootRelativePath":"assets/v3/animations/QRlRaO7fA-jHis-RWSm9OktKej-4mYaMVgJNtSBz4RE/5e907269-d4b3-4d50-aec3-4bc56d02d1ae.png"},"4773b91e-326f-415b-b67f-89e30c1d7728":{"name":"face","sourceUrl":"assets/api/v1/animation-library/gamelab/FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6/category_faces/pupilportrait_03.png","frameSize":{"x":282,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6/category_faces/pupilportrait_03.png"},"109e56da-ba22-4f9a-b82d-1a52e1c383a9":{"name":"body","sourceUrl":null,"frameSize":{"x":128,"y":250},"frameCount":1,"looping":true,"frameDelay":12,"version":"FlBOJlwRL02wYwXmm0l84i0JvfaH4ww2","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":250},"rootRelativePath":"assets/109e56da-ba22-4f9a-b82d-1a52e1c383a9.png"},"55522e8d-4461-4d98-8884-f94ce873bcda":{"name":"bodym","sourceUrl":null,"frameSize":{"x":109,"y":278},"frameCount":1,"looping":true,"frameDelay":12,"version":"MDp0dZmjTfAG9ya0evTwwA2jHeWJ3wh6","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":109,"y":278},"rootRelativePath":"assets/55522e8d-4461-4d98-8884-f94ce873bcda.png"},"33323ed1-88fb-4ab7-842a-9cf6848473a4":{"name":"bow","sourceUrl":null,"frameSize":{"x":96,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"sQmsH5kPTysz3PvcmGCaJQnbWHAMDjW9","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":96},"rootRelativePath":"assets/33323ed1-88fb-4ab7-842a-9cf6848473a4.png"},"6cd88b3e-857b-48a5-a98d-0cfbf4a88f76":{"name":"arrow","sourceUrl":"assets/v3/animations/QRlRaO7fA-jHis-RWSm9OktKej-4mYaMVgJNtSBz4RE/6cd88b3e-857b-48a5-a98d-0cfbf4a88f76.png","frameSize":{"x":96,"y":96},"frameCount":1,"looping":true,"frameDelay":4,"version":"xePPgpY80gw4it2HcSHW4Wtm2EONQj1S","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":96},"rootRelativePath":"assets/v3/animations/QRlRaO7fA-jHis-RWSm9OktKej-4mYaMVgJNtSBz4RE/6cd88b3e-857b-48a5-a98d-0cfbf4a88f76.png"},"d5ebbe36-da3d-493c-b91d-fd15f847fcf0":{"name":"heart","sourceUrl":"assets/api/v1/animation-library/gamelab/VgMQCofeiOzw_StDS_r3OsffccnggBmt/category_icons/heart.png","frameSize":{"x":387,"y":387},"frameCount":1,"looping":true,"frameDelay":2,"version":"VgMQCofeiOzw_StDS_r3OsffccnggBmt","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":387,"y":387},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VgMQCofeiOzw_StDS_r3OsffccnggBmt/category_icons/heart.png"},"277d2785-5e2f-4af6-919d-c383f9d5cefd":{"name":"back","sourceUrl":"assets/api/v1/animation-library/gamelab/R5Ce80jCzTaJSm89_1XamM0fUQk8ISrS/category_backgrounds/texture_07.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"R5Ce80jCzTaJSm89_1XamM0fUQk8ISrS","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/R5Ce80jCzTaJSm89_1XamM0fUQk8ISrS/category_backgrounds/texture_07.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----



var score=0;
var lives=1;

var END = 0;
var PLAY=1;
var gameState = PLAY;

var back=createSprite();
back.setAnimation("back");

var bow = createSprite(200,380,20,20);
bow.setAnimation("bow");
back.scale=2;

var arrow=createSprite(200,390,20,20); 
arrow.setAnimation("arrow");

var arrowg = createGroup();

var restart= createSprite(200,250);
restart.setAnimation( "restart");
restart.visible=false;


var tar1 = createSprite(30,48,20,10);
tar1.setAnimation( "face");
tar1.scale=0.1;

var tar2= createSprite(370,130,60,10);
tar2.setAnimation("body");
tar2.scale=0.3;

var tar3 = createSprite(50,250,30,30);
tar3.setAnimation("bodym");
tar3.scale=0.4;


  velocity();



function draw() {
  background("back");
  stroke( "black");
   drawSprites();
 
   textSize(20);  
   strokeWeight( 2);
   
  serve();

  createEdgeSprites();
    tar1.bounceOff(leftEdge);
  tar1.bounceOff(rightEdge);
  
  tar2.bounceOff(leftEdge);
  tar2.bounceOff(rightEdge);
 
  tar3.bounceOff(leftEdge);
  tar3.bounceOff(rightEdge);
   
  text("Score: "+ score, 300, 40);
  text("lives:" + lives,60,40);
  

  
  bow.x=World.mouseX;
  arrow.x=World.mouseX;
  
    if(arrowg.isTouching(tar1)){
    score=score+4;
    arrowg.destroyEach();
    playSound("assets/category_explosion/8bit_explosion.mp3");
    
  }
  
   if(arrowg.isTouching(tar2)){
    score=score+2;
    arrowg.destroyEach();
    playSound("assets/zapsplat_impacts_body_hit_baseball_bat_hard_whack_crack_crunch_44146.mp3");
  }
  
   
   if(arrowg.isTouching(tar3)){
  score = score+1;
   arrowg.destroyEach();
playSound("assets/zapsplat_impacts_body_hit_baseball_bat_hard_whack_crack_crunch_44146.mp3");
   
  }
  if(arrowg.isTouching(topEdge)){
    lives=lives-1;
  }
if(mousePressedOver(restart))
{
  reset();
}
  if(lives===0){
    fill("yellow");
    text( "gameover" ,170,200);
    arrowg.destroyEach();
    tar1.velocityX=0;
    tar2.velocityX=0;
    tar3.velocityX=0;
    bow.velocityX=0;
    restart.visible=true;
  }
 

}
  
 function serve()
 {
    if(keyDown("space"))
{
  
   createArrow();
    
 
}
 }
  
 function velocity()
 {
   tar1.velocityX=-3;
tar2.velocityX=3;
tar3.velocityX=-3;
   
 }
 

function createArrow()
{
  var arrow = createSprite(200,390,20,20);
  arrow.x=bow.x;
 
  arrow.setAnimation("arrow");
  arrow.velocityY=-16;
  arrow.lifetime=100;
  arrowg.add(arrow);
  return arrow;
  
  
}


function reset()
{
score=0;
lives=1;
serve();
restart.visible=false;
velocity();
}


  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
