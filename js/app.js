
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

        // to  create all Buttons
        createButtons();
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

function createButtons(){
    let buttons = document.querySelector(".buttons");
        console.log(data["buttons"].length);
        let buttonsContent = "";
        data["buttons"].forEach((btn)=>{
            console.log(btn["name"]);
            buttonsContent += `
            <a href="${btn['link']}"
            class="btn btn-primary py-3 px-5 mt-3 ${btn['class']} show wow zoomIn"
            target="_blank"
            data-wow-delay="0.9s">${btn['name']} <i class="${btn['icon']}"></i></a>`;
    });
    buttons.innerHTML = buttonsContent;
}