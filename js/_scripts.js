jQuery(document).ready(function () {




    if (jQuery("header").length) {
        var scrollTrigger = 100, // px
            activeTop = function () {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    jQuery("header").addClass("active");
                } else {
                    jQuery("header").removeClass("active");
                }
            };
        activeTop();
        jQuery(window).on("scroll", function () {
            activeTop();
        });
    }


    jQuery("#first-nav").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery("#service-time-link").offset().top - 30
        }, 2000);
    });


    jQuery("#third-nav").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery("#expect-link").offset().top - 10
        }, 2000);
    });


    AOS.init(

        {


            offset: 300,
        }
    );

    jQuery(".header-left-content").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery("#collection-kit").offset().top - 100
        }, 2000);
    });
    jQuery(".header-center-content").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery("#Pathology-Services").offset().top - 100
        }, 2000);
    });
    jQuery(".header-right-content").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery("#Test-Works").offset().top - 100
        }, 2000);
    });

    if (jQuery("#back-to-top").length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    jQuery("#back-to-top").addClass("show");
                } else {
                    jQuery("#back-to-top").removeClass("show");
                }
            };
        backToTop();
        jQuery(window).on("scroll", function () {
            backToTop();
        });
        jQuery("#back-to-top").on("click", function (e) {
            e.preventDefault();
            jQuery("html,body").animate({
                scrollTop: 0,
            },
                700
            );
        });
    }





    let lines = document.querySelectorAll("#front line");
    let svg = document.getElementById("loader");
    // Setting proper viewBox for the svg element
    let box = svg.getBBox();
    svg.setAttribute("viewBox", `${box.x} ${box.y} ${box.width} ${box.height}`)

    function run() {
        for (let i = 0; i < lines.length; i += 1) {
            let currLine = lines[i];
            setStyle(currLine, i);
            removeStyle(currLine, i);
        }

        function setStyle(currElement, i) {
            // setting delay 0.06 * i for making sure the next animated element will get styles when the preveios finishes 
            setTimeout(() => {
                currElement.setAttribute('style', `stroke: #498a8d; stroke-dasharray: ${currElement.getTotalLength()}px; stroke-dashoffset: ${currElement.getTotalLength()}px; animation: dash 0.1s ease-out forwards 0.1s; animation-delay: ${0.06 * i}s`)
            }, i);
        }

        function removeStyle(element, i) {
            setTimeout(() => {
                element.removeAttribute("style")
            }, (100 * (i + 2)) - ((i + 1) * 20)); //100 * i + 2 - how fast we want to reset style. Each element is increasing its reset time with increasing i. For making the anumation smoother at the end, we can compensate by substracting (i + 1) * 20. Feel free to play around constants and find your perfect timing
        }
    }

    run();
    setInterval(run, 2000);













});
