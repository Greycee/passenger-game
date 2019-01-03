var height = 0
var width = 0
var tries = 1
var time = 21
var generatePassengerTime = 2500


var level = window.location.search
level = (level.replace('?', '' ))

if(level === 'easy') {
	generatePassengerTime = 2500
} else {
	generatePassengerTime = 1500
}

function screenResize() {
	height = window.innerHeight
	width = window.innerWidth
}

screenResize()

var timer = setInterval(function () {
	time -= 1
	if (time < 0) {
		clearInterval(timer)
		clearInterval(generatePassenger)
		window.location.href = 'winner.html'
	} else {
	document.getElementById('timer').innerHTML = time
	}
}, 1000)


function randomPosition() {
	//remove previous passenger from screen 
	if(document.getElementById('passenger')){
		document.getElementById('passenger').remove()

	if(tries > 3){
		window.location.href = 'gameover.html'
	}else {
		document.getElementById('t' + tries).src='img/thumbs-down.png'
		tries++
	}
}

	var positionX = Math.floor(Math.random() * width) - 90
	var positionY = Math.floor(Math.random() * height) - 150

    //position < 0? if yes receives 0 as a value, otherwise receives its own value 
	positionX = positionX < 0 ? 0 : positionX 
	positionY = positionY < 0 ? 0 : positionY 

	//generate a random passenger in different sizes and in a random position
	var passenger = document.createElement('img')
	passenger.src = randomPassenger()
	passenger.className= randomSize()
	passenger.style.left = positionX + 'px'
	passenger.style.top = positionY + 'px'
	passenger.style.position = 'absolute'
	passenger.id = 'passenger'
	passenger.onclick = function () {
		this.remove()
	}

	document.body.appendChild(passenger)
}

function randomSize() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'size1'
		case 1:
			return 'size2'
	}
}

function randomPassenger(){
	var passenger = Math.floor(Math.random() * 12)

	switch(passenger) {
		case 0:
			return 'img/passenger1.png'
		case 1:
			return 'img/passenger2.png'
		case 2:
			return 'img/passenger3.png'
		case 3:
			return 'img/passenger4.png'
		case 4:
			return 'img/passenger5.png'
		case 5:
			return 'img/passenger6.png'
		case 6:
			return 'img/passenger7.png'
		case 7:
			return 'img/passenger8.png'
		case 8:
			return 'img/passenger9.png'
		case 9:
			return 'img/passenger10.png'
		case 10:
			return 'img/passenger11.png'
		case 11:
			return 'img/passenger12.png'				
	}
}