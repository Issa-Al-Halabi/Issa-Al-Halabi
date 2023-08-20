
let data ;


function getDataOnLoad(){
    data =JSON.parse(sessionStorage.getItem("app"));
    lang =  localStorage.getItem("currLang")??"en";
    if(data == null ){
        window.location.href ="index.html";
    }
    else{

        // replace all names
        let names = document.querySelectorAll(".name");

        names.forEach((element)=>{
            getProjectData(element,"name");
        });

        // get logo
        getLogoImage()

        // replace disc
        let disc = document.querySelector(".disc");

            if(lang == "de"){
                getProjectData(disc,"disc_de");
            }
            else{
                getProjectData(disc,"disc");
            }

        // replace all images
        createImage();

        // get youtube link
        youtube();

        // get github link
        github();

        // get view WebSite link
        viewWebSite();
    }


    
}
getDataOnLoad();


function getProjectData(element ,key){
    element.innerHTML = data[key];
}

function getLogoImage(){
    let logo = document.querySelector(".logo");
    logo.src = data["logo"];
}

function createImage(){
    let carouselInner = document.querySelector(".carousel-inner");

    data["images"].forEach((imgDir ,index)=>{
        let carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if(index == 0){
            carouselItem.classList.add("active");
        }
        
        let img = document.createElement("img");
        img.classList.add("d-block");
        img.classList.add("slider-img");
        img.src = imgDir;
    
        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    });

}

function youtube(){
    if(data["youtube"]){
        let youtubeBtn = document.querySelector(".youtube-btn");
        youtubeBtn.href = data["youtube"];
        youtubeBtn.classList.add("show");
    }
}

function github(){
    let githubBtn = document.querySelector(".github");
    githubBtn.href = data["github"];
}
function viewWebSite(){
    if(data["view-webSite"]){
        let webSiteLink = document.querySelector(".view-webSite");
        webSiteLink.href = data["view-webSite"];
        webSiteLink.classList.add("show");
    }
}





