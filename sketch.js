var marks = [30,40,45,35];
var sum = 0, avg

function setup() {
  createCanvas(400, 400);
  for(var i=0; i<marks.length; i++){
    sum= marks[i]+sum
  }

  avg= sum/marks.length
  console.log(avg)
}

function draw() {
  background(150);
}