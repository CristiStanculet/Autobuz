Crafty.init(300,300, document.getElementById("game"));

var autobuz= Crafty.e('2D, Canvas, Color, AngularMotion, Motion')
  .attr({x: 0, y: 0, w: 50, h: 20})
  .color('#F00')
  .bind('UpdateFrame', function() {
  if (Crafty.s('Keyboard').isKeyDown('LEFT_ARROW')) {
      var vel = this.velocity();
      vel.x = 15*Math.cos(this.rotation*Math.PI/180);
      vel.y = 15*Math.sin(this.rotation*Math.PI/180);
      this.rotation -= 0.5;
      console.log(this.rotation);
      console.log(this.vx);
};
  if (Crafty.s('Keyboard').isKeyDown('RIGHT_ARROW')) {
      var vel = this.velocity();
      vel.x = 15*Math.cos(this.rotation*Math.PI/180);
      vel.y = 15*Math.sin(this.rotation*Math.PI/180);
      this.rotation += 0.5;
      console.log(this.rotation);
      console.log(this.vx);
};
  if (Crafty.s('Keyboard').isKeyDown('A')) {
      var acc = this.acceleration();
      acc.x = 50*Math.cos(this.rotation*Math.PI/180);
      acc.y = 50*Math.sin(this.rotation*Math.PI/180);
      console.log(this.ax);
      console.log(this.vx);
};});