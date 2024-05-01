// This sample sketch loads the webcam and shows it on the screen, dancing and spinning.

// You can try this in the p5js web editor instead at this URL:
// https://editor.p5js.org/wxs/sketches/SqpdyZVCG

// Slight modification of https://editor.p5js.org/codingtrain/sketches/JjRoa1lWO
let video;
let capture;

function setup() {
  createCanvas(1024, 768);
  navigator.mediaDevices.enumerateDevices()
	.then(gotDevices);
 
}
const devices = [];

function gotDevices(deviceInfos) {
  for (let i = 0; i !== deviceInfos.length; ++i) {
	const deviceInfo = deviceInfos[i];
	if (deviceInfo.kind == 'videoinput') {
      devices.push({
          label: deviceInfo.label,
          id: deviceInfo.deviceId
      });
	}
  }
  console.log("devices:", devices);
  let supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  console.log(supportedConstraints);
  var constraints = {
	video: {
  	deviceId: {
    	exact: devices[0].id
  	},
	},
    audio: false
  };
  capture = createCapture(constraints);
  capture.size(320, 240);
  capture.hide()
}

function draw() {
  if (capture) {
	background(255);
	translate(300,300);
    
	for (let i = 0; i < 4; i++) {
  	push();
  	rotate(millis()*(i+1)*1.3/1000.0);
  	translate((i*100)%1024, (i*110)%768);
  	image(capture, -150, -150, 300, 300);
  	pop();
	}
	//filter(INVERT);

  }
}



