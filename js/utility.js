const backToTopBtn = document.querySelector(".back-to-top");


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
