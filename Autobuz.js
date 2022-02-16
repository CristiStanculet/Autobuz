Crafty.init(1000,1000, document.getElementById("game"));
var v = 1;
var frana = 0;
var autobuz= Crafty.e('2D, Canvas, Color, AngularMotion, Motion')
  .attr({x: 0, y: 0, w: 50, h: 20})
  .color('#F00')
  .bind('UpdateFrame', function() {
  var viteza = v*this.velocity().magnitude();
  var vel = this.velocity();
  var acc = this.acceleration();
  console.log(frana);
  if(frana != 0 && viteza < 1)
  {
    frana = 0;
    vel.x = 0;
    vel.y = 0;
    acc.x = 0;
    acc.y = 0;

  } 
  if (Crafty.s('Keyboard').isKeyDown('LEFT_ARROW')) {
      vel.x = viteza*Math.cos(this.rotation*Math.PI/180);
      vel.y = viteza*Math.sin(this.rotation*Math.PI/180);
      this.rotation -= 0.5;
};
  if (Crafty.s('Keyboard').isKeyDown('RIGHT_ARROW')) {
      vel.x = viteza*Math.cos(this.rotation*Math.PI/180);
      vel.y = viteza*Math.sin(this.rotation*Math.PI/180);
      this.rotation += 0.5;
};
  if (Crafty.s('Keyboard').isKeyDown('UP_ARROW')) {
      var acc = this.acceleration();
      acc.x = 20*Math.cos(this.rotation*Math.PI/180);
      acc.y = 20*Math.sin(this.rotation*Math.PI/180);
};
  if (Crafty.s('Keyboard').isKeyDown('DOWN_ARROW')) {
      frana = frana+1;
       viteza = v*this.velocity().magnitude();
      var acc = this.acceleration();
      var vel = this.velocity();
      acc.x = -vel.x*frana/viteza;
      acc.y = -vel.y*frana/viteza;
      };
      if(Crafty.s('Keyboard').isKeyDown('B')) {
      var acc = this.acceleration();
      if(viteza == 0) {
        acc.x = -20*Math.cos(this.rotation*Math.PI/180);
        acc.y = -20*Math.sin(this.rotation*Math.PI/180);
        }
};
});