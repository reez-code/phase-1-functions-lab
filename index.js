// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block >= 42) {
    return block - 42;
  } else if (block < 42) {
    return 42 - block;
  }
}

function distanceFromHqInFeet(feet) {
  let distanceInFeet = distanceFromHqInBlocks(feet);
  return distanceInFeet * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  } else if (start < destination) {
    return (destination - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    let chargedDistance = distance - 400;
    return chargedDistance * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}
