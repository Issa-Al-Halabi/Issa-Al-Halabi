let btn =document.querySelector(".about .about-grid .btn");

btn.onclick = ()=>{
    let skills =document.querySelector(".about .about-grid .about-content .more-skills");
    skills.classList.toggle("show");
    // change local
    let htmlTag = document.querySelector("html");
    if(htmlTag.lang == "en" ){
        if(skills.classList.contains("show")){
            btn.dataset.local = "Weniger";
            btn.innerHTML = "Less";
        } 
        else{
            btn.dataset.local = "Mehr";
            btn.innerHTML = "More";
        }
    }
    else{
        if(skills.classList.contains("show")){
            btn.dataset.local = "Less";
            btn.innerHTML = "Weniger";
        } 
        else{
            btn.dataset.local = "More";
            btn.innerHTML = "Mehr";
        }
    }
}
let aboutMeSection =document.querySelector(".about-me");

window.onscroll = function() {
        if (window.scrollY >= aboutMeSection.getBoundingClientRect().top  ) {
            let precentages =document.querySelectorAll(".about-grid .my-language .precentage path.color");
            precentages.forEach((precentage)=>{
                precentage.classList.add("show");
            });
        }
}


    
    
    
