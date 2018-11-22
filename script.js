menu.onclick = function myFunction(){
	let x = document.getElementById('myTopnav')
	let menu = document.getElementById('menu')


	if(x.className === "top-nav"){
		x.className += " responsive"
		menu.className+=" responsive"
	}
	else{
		x.className = "top-nav"
		menu.className = "menu-toggle"
	}
}