const backToTopBtn = document.querySelector(".back-to-top");

// Back To Top
window.addEventListener("scroll", ()=>{
	if(window.pageYOffset > 120){
		backToTopBtn.style.opacity = 1;
	}
	
	if(window.pageYOffset < 120){
		backToTopBtn.style.opacity = 0;
	}
	
});

backToTopBtn.addEventListener("click", ()=>{
	window.scrollTo(0,0);
});


// Dark/Light Mode
const modeBtn = document.querySelector(".mode");


function toggleDarkMode(label){
	
}

modeBtn.addEventListener("click", ()=>{
	// document.body.style.background = '#b6b6b6'
	alert("Dark-Mode is not available right now.")
});

