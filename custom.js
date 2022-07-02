$(document).ready(function() {
    $('.loadmore').click(function() {
        // console.log($(this).text());
        $(this).text(function(i, text) {
            return text === "Load Less" ? "Load More" : "Load Less";
        })
    });
    $('.skills-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: "<span class='slick-arrow prev-arrow'><i class='fa-solid fa-arrow-left-long'></i></span>",
        nextArrow: "<span class='slick-arrow next-arrow'><i class='fa-solid fa-arrow-right-long'></i></span>",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.project-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<span class='slick-arrow prev-arrow'><i class='fa-solid fa-arrow-left-long'></i></span>",
        nextArrow: "<span class='slick-arrow next-arrow'><i class='fa-solid fa-arrow-right-long'></i></span>",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.testimonial-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: "<span class='slick-arrow prev-arrow'><i class='fa-solid fa-arrow-left-long'></i></span>",
        nextArrow: "<span class='slick-arrow next-arrow'><i class='fa-solid fa-arrow-right-long'></i></span>",
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.eligibility .slickslider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: "<span class='slick-arrow prev-arrow'><i class='fa-solid fa-arrow-left-long'></i></span>",
        nextArrow: "<span class='slick-arrow next-arrow'><i class='fa-solid fa-arrow-right-long'></i></span>",
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            }
        }]
    });
    $('.career-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<span class='slick-arrow prev-arrow'><i class='fa-solid fa-arrow-left-long'></i></span>",
        nextArrow: "<span class='slick-arrow next-arrow'><i class='fa-solid fa-arrow-right-long'></i></span>",

    });

   
    $(".course-cariculum .panel .accordion-toggle").click(function(){
        if($(this).find("i.fa-solid").hasClass("fa-plus")){
            $(this).find("i.fa-solid").removeClass("fa-plus");
            $(this).find("i.fa-solid").addClass("fa-minus");
        }
        else{
            $(this).find("i.fa-solid").removeClass("fa-minus");
            $(this).find("i.fa-solid").addClass("fa-plus");
        }
    })
    
    // Read more script here 
    
});