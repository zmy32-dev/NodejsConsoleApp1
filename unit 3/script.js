var bulletX = 30;
var onFly = false;
function moveBullet() {
	if(onFly){
	   bulletX += 5;
	if(bulletX >= 200){
		bulletX = 30;
		onFly = false;
	}
	else {
		setTimeout(moveBullet, 50);
	}
	bullet.style.left = bulletX + "px";
	}
}
function keyHandler(e){
    console.log(e)
	if(e.code == "Space" && !onFly) {
	    onFly = true;
		moveBullet();
	}
	if(e.code == "Escape" && onFly) {
	    onFly = false;
		bulletX = 30;
		bullet.style.left = bulletX + "px";
	}
}