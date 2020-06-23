// 1. When a user presses the record button, start recording actions
// 2. When recording, push an object with the important data to the array
//			- Clear the array before starting a new recording
// 3. Stop a recording by pressing the same button
//			- Print all of the position to the console using forEach: 123px 345px
// 4. Replay the recording by iterating through the Array and move a custom cursor to the position that was recorded
//			- Ensure there is not current a recording going on (various ways to prevent that case)


// Variables/data
let isRecording = false // not recording at the beginning
let mouseMoves = []
let timer = 0;          // timer set to zero

// DOM elements
const $cursor = document.getElementById('cursor') //getting the value
const $startAndStop = document.getElementById('startAndStop') 
const $replayRecording = document.getElementById('replayRecording')

// Each movement of the mouse
window.addEventListener('mousemove', (event) => {
	if (isRecording) {
		mouseMoves.push ({xValue: event.clientX, yValue: event.clientY}) // Record the data to the Array
		console.log(event.clientX, event.clientY, event.timeStamp)
		
	  // this is one of many ways to prevent recording
	  // consider you may also use removeEventListener() as well
       // ----- To do  ---------
	}
})

	// Examples:
	// {x: 123, y:212, t:0},
	// {x: 220, y:317, t:100},
	// {x: 126, y:218, t:145},

// Start/stop the recording
$startAndStop.addEventListener('click', (event) => {
	isRecording = !isRecording; 
	if (isRecording) {
	mouseMoves = [];
	// console.log(mouseMoves);
	}

})

// Replay recording

	function record (count) {
        if (count < (mouseMoves.length - 1)) {    // MouseMoves is an array of stored coordinates
            setTimeout (function(){
				$cursor.style.setProperty('--x', mouseMoves[count].xValue)
				$cursor.style.setProperty('--y', mouseMoves[count].yValue)
                count++;    // Behave like loop
                record (count);    // Call recursively
            }, 100);
		}
		else {
			mouseMoves = [];
		}
        
	}
	$replayRecording.addEventListener('click', (event) => {
    record (0);    // Call function
	
	// Set the x and y for each mouse move recorded (123, 456 are examples)
	// $cursor.style.setProperty('--x', 123)
	// $cursor.style.setProperty('--y', 456)
})