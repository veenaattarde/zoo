function setup() {
  createCanvas(400, 400);
  background(255);

  // Face
  fill(255);
  stroke(0);
  ellipse(200, 200, 180, 180); // Head

  // Ears
  fill(0);
  ellipse(140, 120, 50, 50); // Left ear
  ellipse(260, 120, 50, 50); // Right ear

  // Eye patches
  fill(0);
  ellipse(160, 190, 40, 60); // Left patch
  ellipse(240, 190, 40, 60); // Right patch

  // Eyes
  fill(255);
  ellipse(160, 190, 20, 30); // Left eye white
  ellipse(240, 190, 20, 30); // Right eye white

  fill(0);
  ellipse(160, 190, 10, 10); // Left pupil
  ellipse(240, 190, 10, 10); // Right pupil

  // Nose
  fill(0);
  triangle(195, 220, 205, 220, 200, 230);

  // Mouth
  noFill();
  stroke(0);
  arc(195, 235, 10, 10, 0, PI);
  arc(205, 235, 10, 10, 0, PI);
}
