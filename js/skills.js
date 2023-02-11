const web_btn = document.querySelector(".btn-web");
const programming_btn = document.querySelector(".btn-programming");
const other_btn = document.querySelector(".btn-others");
const webSkills = document.querySelector(".web-skills");
const programmingSkills = document.querySelector(".programming-skills");
const otherSkills = document.querySelector(".other-skills");
const skillsContainer = document.querySelector(".skills-container");


function showSkills(visible,hide1,hide2){
	if(visible == 'webSkills'){
		programmingSkills.style.display = 'none'
		otherSkills.style.display = 'none'
		skillsContainer.style.height = '800px'
		webSkills.style.display = 'block'
	}
	else if(visible == 'programmingSkills'){
		webSkills.style.display = 'none'
		otherSkills.style.display = 'none'
		skillsContainer.style.height = '320px'
		programmingSkills.style.display = 'block'
	}
	else{
		webSkills.style.display = 'none'
		programmingSkills.style.display = 'none'
		skillsContainer.style.height = '440px'
		otherSkills.style.display = 'block'
	}
}

web_btn.addEventListener("click", ()=>{
	showSkills('webSkills','programmingSkills','otherSkills');
});

programming_btn.addEventListener("click", ()=>{
	showSkills('programmingSkills','webSkills','otherSkills');
});

other_btn.addEventListener("click", ()=>{
	showSkills('otherSkills','webSkills','programmingSkills');
});

