import apps from "./appsData.js";

let data ;

// get the current lang
let lang =  localStorage.getItem("currLang")??"en";

function getDataOnLoad(){

    // Initiate the wowjs
    new WOW().init();
    
    // Get the current URL
    const url = window.location.href;

    // Create a URL object
    const urlObj = new URL(url);

    // Get the value of the 'appName' parameter
    const appName = urlObj.searchParams.get('appName');


    if (!(apps && appName in apps)) {
        window.location.href ="index.html#portfolio";
    }

    data = apps[appName];
    
    if(data == null ){
        window.location.href ="index.html#portfolio";
    }


    // replace all names
    let names = document.querySelectorAll(".name");

    names.forEach((element)=>{
        translateElement(element,"name");
    });

    // get logo
    getLogoImage()

    // replace disc
    let disc = document.querySelector(".disc");

    if(lang == "de"){
        translateElement(disc,"disc_de","disc");
    }
    else{
        translateElement(disc,"disc","disc_de");
    }

    // set Landing Page
    setLandingPage();

    // create all technologies
    createTechnologies();

    // replace all images
    createImage();

    // create laptop Screen shots 
    if(data["laptop-images"] != null){
        createLaptopImages();
    }

    // to set youtube link
    setYoutubeLink();

    // to create Store Buttons
    if(data["store_buttons"] != null){
        createStoreButtons();
    }
}

window.onload = getDataOnLoad;

function translateElement(element ,key,translatedText = null){

    
    if(translatedText != null){
        element.classList.add("localization");
        element.setAttribute("data-local", data[translatedText]);
    }
    element.innerHTML = data[key];
}

function getLogoImage(){
    let logo = document.querySelector(".logo");
    logo.src = data["logo"];
}

function createImage(){

    let images = data["images"].map((imgDir, index) => {
        return { src: imgDir, alt: `Image ${index}` };
    });

    // Insert dynamic data into the carousel
    const screenshotSlides = document.querySelector("#screenshot_slides");
    
    images.forEach(function(image) {
     // Create a new div element
     const slide = document.createElement("div");
     slide.className = "single_slider";
     
     // Create an img element
     const img = document.createElement("img");
     img.src = image.src;
     img.alt = image.alt;
     
     // Append the img to the div
     slide.appendChild(img);
     
     // Append the div to the container
     screenshotSlides.appendChild(slide);
    });

    
    
    $('.screenshot_active').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: false,
        prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
    

}

// handle laptopb screenshots
function createLaptopImages(){

    // show the laptop screen shots section
    $(".laptop-screenshots").addClass("show");

    let laptopImages = data["laptop-images"].map((imgDir, index) => {
        return `<div><img src="${imgDir}" alt="laptop image ${index}"></div>`;
    });

    $(".laptop-screenshots-images").append(laptopImages.join(''));

    $('.laptop-screenshots-images').slick({
        dots: false, // Disable navigation dots
        infinite: true, // Infinite loop sliding
        speed: 500, // Slide transition speed
        slidesToShow: 2, // Number of slides to show at once
        slidesToScroll: 2, // Number of slides to scroll at once
        adaptiveHeight: true, // Adapts the height to the content
        autoplay: true, // Autoplay slides
        autoplaySpeed: 3000, // Autoplay speed in ms
        centerMode: true, // Centers the current slide
        variableWidth: false, // Disables variable width to fit images inside the container
        arrows: false, // Disable the "Next" and "Previous" buttons
        responsive: [
            {
                breakpoint: 1024, // Tablet or medium-sized devices
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768, // Small tablets or large phones
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, // Most mobile phones
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ] 
    });
}

function createTechnologies(){

    const technologiesContent = document.querySelector(".technologies"); 
    data["technologies"].forEach((technology)=>{
        technologiesContent.innerHTML += `
          <div class="technology" data-content="${technology["name"]}">
            <img
              src="${technology["image"]}"
              alt="${technology["name"]}-logo"
            />
          </div>`;
    });
}

function setYoutubeLink(){
    if(data["youtube"] != null ){

        
        const youtubeLinkSection = document.querySelector("section#video"); 
        youtubeLinkSection.style.display = "block";

        const youtubeLinkElement = document.getElementById("youtube-link"); 
        youtubeLinkElement.href =  data["youtube"];

        //====== Magnific Popup
        
        $('.video-popup').magnificPopup({
            type: 'iframe',
            // other options
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=', // Default: ?v=
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL with the video ID
                    }
                }
            }
        });
    }
}


function setLandingPage(){

    // get landing image text div
    const landingPageImageContainers = document.querySelectorAll("#landing-page-image");
    landingPageImageContainers.forEach(landingPageImageContainer => {
        
        landingPageImageContainer.src =  data["landing_image"];
    });

    // get landing Page text div
    const landingPageTextContainer = document.getElementById("landing-page-text");
    
    if(lang == "en"){
        translateElement(landingPageTextContainer,"landing_page","landing_page_de");
    }else{
        translateElement(landingPageTextContainer,"landing_page_de","landing_page");
    }

    // get buttons div
    const landingPageButtonsContainer = document.getElementById("landing-page-buttons");
   
    data["buttons"].forEach((btn)=>{
        landingPageButtonsContainer.innerHTML += ` <li>
            <a
                class="btn btn2 wow fadeInUp"
                data-wow-delay=".3s"
                target="_blank"
                href="${btn["link"]}"
                > 
                <i class="${btn["icon"]}"></i>
                ${btn["name"]}</a
            >
            </li>`;
    });
}

function createStoreButtons(){

    const downloadSection = document.getElementById("download");
    const storeButtons = document.getElementById("store_buttons");
    
    data["store_buttons"].forEach((btn)=>{
        storeButtons.innerHTML += `<li>
                <a class="btn btn2 d-flex align-items-center mx-1"
                target="_blank"
                href="${btn["link"]}">
                    <span class="icon px-1">
                        <i class="${btn["icon"]}"></i>
                      </span>
                      ${btn["name"]}
                </a>
              </li>`;

              // display the secion
              downloadSection.style.display = "block";
    });
}

// Sticky Navbar
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        document.querySelector('.navbar').classList.add('nav-sticky');
    } else {
        document.querySelector('.navbar').classList.remove('nav-sticky');
    }
});
