import {getTimelines} from "./history.js";
import {getProjects,getProjectCategories} from "./projects.js";
(function ($) {
    "use strict";
    
    // // loader
    // var loader = function () {
    //     setTimeout(function () {
    //         if ($('#loader').length > 0) {
    //             $('#loader').removeClass('show');
    //         }
    //     }, 1);
    // };
    // loader();
    

    // setTimeout(function () {
    //         $('#loader').removeClass('show');
    // }, 5);
    
    // Initiate the wowjs
    new WOW().init();

    // display timelines
    const timeLines = document.querySelector(".timeline");
    timeLines.innerHTML += getTimelines();

    // display projects Filter
    const projectsFilter = document.querySelector("#portfolio-filter");
    projectsFilter.innerHTML += getProjectCategories();
    
    // display projects
    const projects = document.querySelector(".portfolio-container");
    projects.innerHTML += getProjects();
    

    // timeline handle left right classes
    let timelines = document.querySelectorAll(".timeline-item");
    timelines.forEach((timeline,index)=>{
        timeline.classList.add("wow");
        
        if(index % 2 == 0){
            timeline.classList.add("left");
            timeline.classList.add("slideInLeft");
        }else{
            timeline.classList.add("right");
            timeline.classList.add("slideInRight");
        }
    });

    // timeline More button
    let timelineBtn = document.querySelector(".more-timeline .btn");
    if(timelineBtn){
        timelineBtn.onclick = timelinesShow; 
    }
    function timelinesShow(){
        timelines.forEach((timeline)=>{
            timeline.classList.toggle("show");
        });

        // change local
        let htmlTag = document.querySelector("html");
        if(htmlTag.lang == "en" ){
            if(timelines[timelines.length - 1].classList.contains("show")){
                timelineBtn.dataset.local = "Weniger";
                timelineBtn.innerHTML = "Less";
            } 
            else{
                timelineBtn.dataset.local = "Mehr";
                timelineBtn.innerHTML = "More";
            }
        }
        else{
            if(timelines[timelines.length - 1].classList.contains("show")){
                timelineBtn.dataset.local = "Less";
                timelineBtn.innerHTML = "Weniger";
            } 
            else{
                timelineBtn.dataset.local = "More";
                timelineBtn.innerHTML = "Mehr";
            }
        }
    }


    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        
    });

    // Handle category filtering
    $('#portfolio-filter li').on('click', function() {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        var filterValue = $(this).attr('data-filter');
        if (filterValue === '*') {
            portfolioIsotope.isotope({ filter: '*' });
        } else {
            // portfolioIsotope.isotope({ filter: `[data-category="${filterValue}"]` });
            portfolioIsotope.isotope({filter: $(this).data('filter')});
        }
        // Reset showAll state and update the display to the first 6 items
        showAll = false;
        filterItems();

        // Update button text
        UpdateMoreButtonText( $('#moreProjectsToggleBtn'));
    });

    const showLimit = 6;
    var showAll = false; // Track whether to show all items or just a subset

    // Function to toggle visibility of items after the 6th
    function filterItems() {
        const visibleItems = portfolioIsotope.isotope('getFilteredItemElements');
        visibleItems.forEach((item, index) => {
            if (index < showLimit) {
                $(item).addClass('show'); // Ensure first 6 items are shown
            } else {
                $(item).toggleClass('show', showAll); // Toggle visibility for items after the 6th
                // Remove 'wow' and 'fadeInUp' classes for items after the 6th
                if (!showAll) {
                    $(item).removeClass('wow fadeInUp');
                }
            }
        });
        portfolioIsotope.isotope('layout'); // Re-layout Isotope after changes
    }

    // Initial display: only the first 6 items
    filterItems();

    // Button click event to toggle visibility
    $('#moreProjectsToggleBtn').on('click', function() {
        showAll = !showAll; // Toggle the state
        filterItems(); // Update visibility

        // Update button text
        UpdateMoreButtonText($(this));

    });

    const UpdateMoreButtonText = (element) => {
        // Update button text
        let htmlTag = document.querySelector("html");
        let isEnglish = htmlTag.lang === "en";
    
        // Determine the text and data-local attribute values
        let buttonText = showAll ? (isEnglish ? 'Show Less' : 'Weniger zeigen') : (isEnglish ? 'Show More' : 'Mehr anzeigen');
        let dataLocalText = showAll ? (isEnglish ? 'Weniger zeigen' : 'Show Less') : (isEnglish ? 'Mehr anzeigen' : 'Show More');
    
        // Update the text and attribute of the passed element
        $(element).text(buttonText);
        $(element).attr('data-local', dataLocalText);
    };
    


    // tab view
        const tabs = document.querySelectorAll(".tab-links li");
        const tabContents = document.querySelectorAll(".tab");

        tabs.forEach((tab, index) => {
          tab.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove active class from all tabs and tab contents
            tabs.forEach((t) => t.classList.remove("active"));
            tabContents.forEach((content) =>
              content.classList.remove("active")
            );

            // Add active class to clicked tab and corresponding content
            tab.classList.add("active");
            tabContents[index].classList.add("active");
          });
        });

        
        // certificate slick
        const slickContainer = $('.certificate-slick');
        
        // Initialize Slick Carousel
        slickContainer.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 200000,
            dots: true,
            arrows: false,
            centerPadding: '10px',
            responsive: [
            {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3 ,
                        centerPadding: '10px'
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2 ,
                        centerPadding: '10px'
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1, 
                        centerPadding: '10px'
                    }
                }
            ]
        });

})(jQuery);

