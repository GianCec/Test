const sensitivityX = 2;
const sensitivityY = 1;
const sensitivityZ = 0.1;
const scaleFactor = 100;


function mouseDragged() {

    const deltaTheta =
      (-sensitivityX * (mouseX - pmouseX)) / scaleFactor;
    const deltaPhi =
      (sensitivityY * (mouseY - pmouseY)) / scaleFactor;
    cam._orbit(deltaTheta, deltaPhi, 0);
  }
  
  function mouseWheel(event) {
    if (event.delta > 0) {
      cam._orbit(0, 0, sensitivityZ * scaleFactor);
    } else {
      cam._orbit(0, 0, -sensitivityZ * scaleFactor);
    }
  }