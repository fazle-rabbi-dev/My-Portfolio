const open_menu_btn = document.querySelector(".nav-menu");
const nav_bar = document.querySelector(".nav-bar");
const close_menu_btn = document.querySelector(".close-nav");
const header = document.querySelector("header");


function toggleNavBar(label){
	if(label == 'open'){
		if(nav_bar.classList.contains('close')){
			nav_bar.classList.remove('close');
		}
		nav_bar.classList.add(label);
	}
	else{
		if(nav_bar.classList.contains('open')){
			nav_bar.classList.remove('open');
		}
		nav_bar.classList.add(label);
	}
}

open_menu_btn.addEventListener("click", ()=>{
	toggleNavBar('open');
});

close_menu_btn.addEventListener("click", ()=>{
	toggleNavBar('close');
});



// Hide Header When ScrollDown

function hideHeader(label){
	if(label == 'hide'){
		header.style.opacity = '0';
	}
	else{
		header.style.opacity = '1';
	}
}


let last_scroll_top = 0;
window.addEventListener("scroll", ()=>{
   let current_scroll_top = window.pageYOffset;
	if(last_scroll_top < current_scroll_top){
		hideHeader('hide');
		toggleNavBar('close');
	}else{
		hideHeader('show');
	}
	last_scroll_top = current_scroll_top <= 0 ? 0 : current_scroll_top;
	
});



