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


//
// Dark mode feature
// Select all elements where dark mode required
//

// Toast Message
function showToast(mode){
  const toastContainer = document.querySelector(".toast-container")
  const toastText = document.querySelector("#toast-text")
  toastContainer.style.opacity = 1
  if(mode == 'dark'){
    toastText.textContent = '✅ Dark mode enabled'
  }
  else{
    toastText.textContent = '✅ Light mode enabled'
  }
  setTimeout(function() {
    toastContainer.style.opacity = 0
  }, 1500);
}

const body = document.body;
const intro = document.querySelector('.intro');
const aboutText = document.querySelector('#about-text');
const sectionLabelh3 = document.querySelectorAll('.section-label h3');
const sectionLabelhr = document.querySelectorAll('.section-label > hr');
const socialIcons = document.querySelectorAll('.fab');

  
let isDarkMode = false
modeBtn.addEventListener("click", ()=>{
  if(isDarkMode){
    // remove dark mode class
    body.classList.remove('bg-dark')
    intro.classList.remove('text-light')
    aboutText.classList.remove('text-light')
    sectionLabelh3.forEach(el=>{
      el.classList.remove('bg-light')
      el.classList.remove('text-dark')
    })
    sectionLabelhr.forEach(el=>{
      el.classList.remove('bg-light')
    })
    socialIcons.forEach(el=>{
      el.classList.remove('text-light')
    })
    // Add light mode class
    body.classList.add('bg-light')
    intro.classList.add('text-dark')
    aboutText.classList.add('text-dark')
    sectionLabelh3.forEach(el=>{
      el.classList.add('bg-dark')
      el.classList.add('text-light')
    })
    sectionLabelhr.forEach(el=>{
      el.classList.add('bg-dark')
    })
    socialIcons.forEach(el=>{
      el.classList.add('text-dark')
    })
    isDarkMode = false
    showToast('light')
    return;
  }
  
  
  // Enabling dark mode...
  isDarkMode = true
  // Remove light mode class
  body.classList.remove('bg-light')
  intro.classList.remove('text-dark')
  aboutText.classList.remove('text-dark')
  sectionLabelh3.forEach(el=>{
    el.classList.remove('bg-dark')
    el.classList.remove('text-light')
  })
  sectionLabelhr.forEach(el=>{
    el.classList.remove('bg-dark')
  })
  socialIcons.forEach(el=>{
    el.classList.remove('text-dark')
  })
  // Add dark mode class
  body.classList.add('bg-dark')
  intro.classList.add('text-light')
  aboutText.classList.add('text-light')
  sectionLabelh3.forEach(el=>{
    el.classList.add('bg-light')
    el.classList.add('text-dark')
  })
  sectionLabelhr.forEach(el=>{
    el.classList.add('bg-light')
  })
  socialIcons.forEach(el=>{
    el.classList.add('text-light')
  })
  // 
  showToast('dark')
});

