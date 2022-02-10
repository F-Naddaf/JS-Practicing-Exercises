'use strict';

//--------------------------switch statement--------------------------

const trafficLight = {
  possibleStates: ['green', 'orange', 'red', 'purple'],
  stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log('The traffic light is on', currentState);
  switch (currentState) {
    case 'green':
      trafficLight.stateIndex = 1;
      break;
    case 'orange':
      trafficLight.stateIndex = 2;
      break;
    case 'red':
      trafficLight.stateIndex = 3;
      break;
    case 'purple':
      trafficLight.stateIndex = 0;
      cycle++;
      break;
  }
}

//--------------------------if statement--------------------------

const trafficLight = {
  possibleStates: ['green', 'orange', 'red', 'purple'],
  stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log('The traffic light is on', currentState);
  trafficLight.stateIndex++;
  if (trafficLight.stateIndex === trafficLight.possibleStates.length) {
    trafficLight.stateIndex = 0;
    cycle++;
  }
}
