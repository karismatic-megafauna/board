"use strict";

function Space() {
  this.north = false;
  this.east = false;
  this.south = false;
  this.west = false;
}

Space.prototype.setWall = function(direction) {
  this[direction] = true;
}
