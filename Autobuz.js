Crafty.init(1000,1000, document.getElementById("game"));
var v = 1;
var autobuz= Crafty.e('2D, Canvas, Color, AngularMotion, Motion')
  .attr({x: 0, y: 0, w: 50, h: 20})
  .color('#F00')
  .bind('UpdateFrame', function() {
  var viteza = v*this.velocity().magnitude();
  if (Crafty.s('Keyboard').isKeyDown('LEFT_ARROW')) {
      var vel = this.velocity();
      vel.x = viteza*Math.cos(this.rotation*Math.PI/180);
      vel.y = viteza*Math.sin(this.rotation*Math.PI/180);
      this.rotation -= 0.5;
};
  if (Crafty.s('Keyboard').isKeyDown('RIGHT_ARROW')) {
      var vel = this.velocity();
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
      var acc = this.acceleration();
      console.log(viteza);
      if(viteza > 1) {
      acc.x = -20*Math.cos(this.rotation*Math.PI/180);
      acc.y = -20*Math.sin(this.rotation*Math.PI/180);
      }
      else {
        var vel = this.velocity();
        vel.x = 0;
        vel.y = 0;
        acc.x = 0;
        acc.y = 0;
      }};
      if(Crafty.s('Keyboard').isKeyDown('B')) {
      var acc = this.acceleration();
      console.log(viteza);
      if(viteza == 0) {
        acc.x = -20*Math.cos(this.rotation*Math.PI/180);
        acc.y = -20*Math.sin(this.rotation*Math.PI/180);
        console.log(viteza);
        }
};
});