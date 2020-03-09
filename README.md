![GA logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
# Project #0: King Kong Crush EM All!

### 1. Wireframes
	- link: https://app.moqups.com/fvbS12DWvT/view/page/a9de4d023
![LOTR](image/Image%203-5-20%20at%2011.32%20PM.jpg)

### 2. User Flows
	- the user press "w" to control the charactor go up; press "s" to control it go down
	- When King Kong touches the plane, it disappear
	- If King Kong misses one plane, game over

### 3. Language I used
	-HTML/ CSS/ Javascript

### 4. Approach
	- create a "canvas", which is like a game scene
	- refresh the scene by using "clearRect" every couple of miliseconds and update the scene
	- use "onkeydown" and "onkeyup" to control the charactor to move
	- the plane moves on x axis, every couple of miliseconds "clearRect" the old one and add a new one on the screan
	- compare the position of the plane and the charactor to define if the player win a point or game over

### 5. To Improve
	- can add a start page or a restart button
	- increase difficulty, let the plane moves faster and faster by time/ or multiply planes come out at the same time
	- player hit space and the charactor will wave his arm, when his arm hits the plane, count 1 point, if not hit on the plane, it will go through the charactor and game over
	- can place the charactor in the center and use "left" and "right" keys to change attack direction