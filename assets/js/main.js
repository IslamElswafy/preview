/***************************************************
==================== JS INDEX ======================
****************************************************
Mobile Menu Js


****************************************************/

(function($) {
    "use strict";

    // Data Js
    $("[data-bg-image]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-bg-image") + ")");
    });

    // Preloader js
    // Preloader js
    let controllersRun = false;
    const runControllers = () => {
        if (controllersRun) return;
        controllersRun = true;
        wowController();
        gsapController();
    };

    $(window).on("load", function() {
        const preLoader = $(".tj-preloader");

        if (preLoader.length) {
            setTimeout(function() {
                setTimeout(function() {
                    preLoader.fadeOut(400);
                    runControllers();
                }, 700);
            }, 2000);
        } else {
            runControllers();
        }
    });

    // Fallback to remove preloader if load event fails or takes too long
    setTimeout(function() {
        const preLoader = $(".tj-preloader");
        if (preLoader.length && preLoader.is(':visible')) {
            preLoader.fadeOut(400);
            runControllers();
        }
    }, 3000);

    $(document).ready(function($) {
        var lastScrollTop = 0;
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll > 500) {
                $(".tj-header-area.header-sticky").addClass("sticky");
                $(".tj-header-area.header-sticky").removeClass("sticky-out");
            } else if (scroll < lastScrollTop) {
                if (scroll < 500) {
                    $(".tj-header-area.header-sticky").addClass("sticky-out");
                    $(".tj-header-area.header-sticky").removeClass("sticky");
                }
            } else {
                $(".tj-header-area.header-sticky").removeClass("sticky");
            }

            lastScrollTop = scroll;
        });

        // Meanmenu Js
        $("#headerMenu").meanmenu({
            meanMenuContainer: ".mobile-menu",
            meanScreenWidth: "991",
            meanExpand: ["<i class='fa-light fa-plus'></i> <i class='fa-light fa-minus'></i>"],
        });

        // Hamburger Menu Js
        $(".menu_bar").on("click", function() {
            $(".menu_bar").toggleClass("menu-bar-toggeled");
            $(".mobile-menu").toggleClass("opened");
            $("body").toggleClass("overflow-hidden");
        });

        $(".mobile-menu ul li a")
            .not(".mean-expand")
            .on("click", function() {
                $(".menu_bar").removeClass("menu-bar-toggeled");
                $(".mobile-menu").removeClass("opened");
                $("body").removeClass("overflow-hidden");
            });

        /*------------------------------------------------------
  	/  OnePage Active Class
  	/------------------------------------------------------*/
        var activeSection = null;

        function updateActiveSection() {
            var windowHeight = $(window).height();
            var windowMiddle = windowHeight / 2;

            $("section").each(function() {
                var section = $(this);
                var sectionTop = section.offset().top;

                // Check if the top of the section is in the middle of the screen
                if (sectionTop <= $(window).scrollTop() + windowMiddle) {
                    activeSection = section.attr("id");
                }
            });

            updateActiveListItem();
        }

        function updateActiveListItem() {
            $(".tj-header-menu ul li a").each(function() {
                var anchor = $(this);
                var listItem = anchor.closest(".menu-item");
                if (anchor.attr("href") === "#" + activeSection) {
                    listItem.addClass("current");
                } else {
                    listItem.removeClass("current");
                }
            });
        }

        $(window).on("scroll", function() {
            updateActiveSection();
        });

        // Initial call to set active section on page load
        updateActiveSection();
    });

    // Accordion Js
    if ($(".accordion-item").length > 0) {
        $(".accordion-item .faq-title").on("click", function() {
            if ($(this).parent().hasClass("active")) {
                $(this).parent().removeClass("active");
            } else {
                $(this).parent().siblings().removeClass("active");
                $(this).parent().addClass("active");
            }
        });
    }

    // Marquee Js
    var slider = new Swiper(".marquee-area--primary .tj-marquee-active", {
        slidesPerView: "auto",
        spaceBetween: 10,
        loop: true,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
        breakpoints: {
            1200: {
                spaceBetween: 50,
            },
            992: {
                spaceBetween: 40,
            },
            768: {
                spaceBetween: 30,
            },
            576: {
                spaceBetween: 20,
            },
        },
    });
    // Marquee slider Js
    if ($(".h5-maquee-slider").length > 0) {
        var swiper = new Swiper(".h5-maquee-slider", {
            slidesPerView: "auto",
            spaceBetween: 30,
            loop: true,
            speed: 5000,
            breakpoints: {
                768: {
                    spaceBetween: 35,
                },

                1024: {
                    spaceBetween: 40,
                },
            },
            allowTouchMove: false,
            autoplay: {
                delay: 1,
                disableOnInteraction: true,
            },
        });
    }
    var slider = new Swiper(".marquee-area--dark .tj-marquee-active", {
        slidesPerView: "auto",
        spaceBetween: 10,
        loop: true,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
            reverseDirection: true,
        },
        breakpoints: {
            1200: {
                spaceBetween: 50,
            },
            992: {
                spaceBetween: 40,
            },
            768: {
                spaceBetween: 30,
            },
            576: {
                spaceBetween: 20,
            },
        },
    });

    // Project Js
    var slider = new Swiper(".tj-project-active", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3.5,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1.5,
            },
            0: {
                slidesPerView: 1.5,
                spaceBetween: 25,
            },
        },
    });

    // Rating Js
    if ($(".fill-ratings span").length > 0) {
        var star_rating_width = $(".fill-ratings span").width();
        $(".star-ratings").width(star_rating_width);
    }

    // hidden item
    $(".hidden-item").hide();
    $(".load-btn").on("click", function(e) {
        e.preventDefault();
        $(".hidden-item").slideDown();
        $(".testimonial_wrap").addClass("overlay-hide");
        $(this).hide();
    });

    var Slice = function(element) {
        var sliceDiv = element;
        var gridX = 4;
        var w = sliceDiv.offsetWidth;
        var h = sliceDiv.offsetHeight;
        var img = sliceDiv.querySelector("img").src;
        var delay = 0.05;

        console.log(w, h, img);

        this.create = function() {
            for (let x = 0; x < gridX; x++) {
                var width = (x * w) / gridX + "px";
                var div = document.createElement("span");
                div.className = "slice-part";
                sliceDiv.appendChild(div);
                div.style.left = width;
                div.style.top = 0;
                div.style.width = w / gridX + "px";
                div.style.height = h + "px";
                div.style.backgroundImage = "url(" + img + ")";
                div.style.backgroundPosition = "-" + width + " 0";
                div.style.backgroundSize = w + "px auto";
                div.style.transitionDelay = x * delay + "s";
            }
        };

        this.create();
    };

    $(window).on('load', function() {
        var sliceElements = document.querySelectorAll(".slice");
        sliceElements.forEach(function(el) {
            new Slice(el);
        });
    });

    // image slider
    const tjSliderImages = document.querySelectorAll(".tj-image-slider .slice");

    if (tjSliderImages.length) {
        let index = 0;

        function showNextImage() {
            tjSliderImages.forEach((slice) => slice.classList.remove("active"));
            tjSliderImages[index].classList.add("active");
            index = (index + 1) % tjSliderImages.length;
        }

        // Initial display
        showNextImage();
        setInterval(showNextImage, 1500);
    }

    function wowController() {
        // WoW Js
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 100,
            mobile: true,
            live: true,
        });
        wow.init();
    }

    /*****************************************************************
================================= GSAP ====================================
********************************************************************/
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    gsap.config({
        nullTargetWarn: false,
    });

    function gsapController() {
        /* Text Effect Animation */
        if ($(".text-anim").length) {
            let staggerAmount = 0.03,
                translateXValue = 20,
                delayValue = 0.1,
                easeType = "power2.out",
                animatedTextElements = document.querySelectorAll(".text-anim");

            animatedTextElements.forEach((element) => {
                let animationSplitText = new SplitText(element, {
                    type: "chars, words",
                });
                gsap.from(animationSplitText.chars, {
                    duration: 1,
                    delay: delayValue,
                    x: translateXValue,
                    autoAlpha: 0,
                    stagger: staggerAmount,
                    ease: easeType,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%"
                    },
                });
            });
        }

        /* Text Effect Animation */
        if ($(".hero-text-anim").length) {
            let staggerAmount = 0.05,
                delayValue = 0.4,
                easeType = "power1.out",
                heroTextElements = document.querySelectorAll(".hero-text-anim");

            heroTextElements.forEach((element) => {
                let animationSplitText = new SplitText(element, {
                    type: "chars, words",
                });
                gsap.from(animationSplitText.chars, {
                    opacity: 0,
                    duration: 0.4,
                    delay: delayValue,
                    ease: easeType,
                    stagger: staggerAmount,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%"
                    },
                });
            });
        }
        const serviceCards = document.querySelectorAll(".tj-service-wrapper");
        serviceCards.forEach((serviceCard, idx) => {
            serviceCard.addEventListener("mouseenter", function() {
                serviceCards.forEach((serviceCardMain) => {
                    serviceCardMain.classList.remove("active");
                });
                this.classList.add("active");
            });
        });
    }
    ////////////////////////////////////////////////////
    // Backtotop Js
    function tjBaackTopController() {
        const scrollElementWrap = $("#tj-back-to-top");
        if (scrollElementWrap.length) {
            const scrollPercentage = () => {
                const scrollTopPos = document.documentElement.scrollTop;
                const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);

                scrollElementWrap.css("background", `conic-gradient( var(--tj-color-theme-primary) ${scrollValue}%, var(--tj-color-common-white) ${scrollValue}%)`);

                // ScrollProgress
                if (scrollTopPos > 100) {
                    scrollElementWrap.addClass("active");
                } else {
                    scrollElementWrap.removeClass("active");
                }

                if (scrollValue < 96) {
                    $("#tj-back-to-top-percentage").text(`${scrollValue}%`);
                } else {
                    $("#tj-back-to-top-percentage").html('<i class="tji-arrow-up-long"></i>');
                }
            };
            $(window).on('scroll', scrollPercentage);
            $(window).on('load', scrollPercentage);

            // Back to Top
            function scrollToTop() {
                document.documentElement.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }

            $("#tj-back-to-top").on("click", scrollToTop);
        }
    }

    tjBaackTopController();
})(jQuery);