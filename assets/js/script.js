function removeFloatShadow(){document.querySelectorAll(".hvr-underline-from-left, .hvr-bob, .hvr-grow").forEach(e=>{e.classList.remove("hvr-underline-from-left","hvr-bob","hvr-grow")})}function handleResize(){(window.innerWidth||document.documentElement.clientWidth)<767&&removeFloatShadow()}$(document).ready(function(){$(".lessons__carousel").slick({slidesToShow:3,slidesToScroll:1,initialSlide:1,centerMode:!0,centerPadding:0,infinite:!1,speed:950,dots:!0,prevArrow:'<button class="slick-prev"><img src="assets/images/icons/slideLeft.svg" alt="Previous"></button>',nextArrow:'<button class="slick-next"><img src="assets/images/icons/slideRight.svg" alt="Next"></button>',responsive:[{breakpoint:767,settings:{autoplay:!1,dots:!0,autoplaySpeed:0,prevArrow:'<button class="prev_arrow"><img src="assets/images/icons/slideLeft.svg" alt="Previous"></button>',nextArrow:'<button class="next_arrow"><img src="assets/images/icons/slideRight.svg" alt="Next"></button>'}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!1,centerPadding:"50px",autoplay:!1,dots:!0,autoplaySpeed:0,prevArrow:'<button class="prev_arrow"><img src="assets/images/icons/slideLeft.svg" alt="Previous"></button>',nextArrow:'<button class="next_arrow"><img src="assets/images/icons/slideRight.svg" alt="Next"></button>'}}]}),$(".partners__carousel").slick({slidesToShow:3,slidesToScroll:1,infinite:!0,speed:950,dots:!0,prevArrow:'<button class="slick-prev"><img src="assets/images/icons/slideLeft.svg" alt="Previous"></button>',nextArrow:'<button class="slick-next"><img src="assets/images/icons/slideRight.svg" alt="Next"></button>',responsive:[{breakpoint:767,settings:{autoplay:!1,dots:!0,autoplaySpeed:0,prevArrow:'<button class="prev_arrow"><img src="assets/images/icons/slideLeft.svg" alt="Previous"></button>',nextArrow:'<button class="next_arrow"><img src="assets/images/icons/slideRight.svg" alt="Next"></button>'}},{breakpoint:576,settings:{slidesToShow:1,autoplay:!1,dots:!0,autoplaySpeed:0,prevArrow:'<button class="prev_arrow"><img src="assets/images/icons/slideLeft.svg" alt="Previous"></button>',nextArrow:'<button class="next_arrow"><img src="assets/images/icons/slideRight.svg" alt="Next"></button>'}}]}),$(window).width()<767&&$(".targets__way").appendTo($(".plan-result_wrapper")),$(window).width()<767&&$(".registration-modal, .modal__close").appendTo($(".overlay"))}),$(window).scroll(function(){700<$(this).scrollTop()?$(".pageup").fadeIn():$(".pageup").fadeOut()}),window.addEventListener("resize",handleResize),handleResize(),window.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".promo__nav"),e=document.querySelectorAll(".promo__link"),s=document.querySelector(".hamburger");s.addEventListener("click",()=>{s.classList.toggle("hamburger_active"),t.classList.toggle("promo__nav_active")}),e.forEach(e=>{e.addEventListener("click",()=>{s.classList.toggle("hamburger_active"),t.classList.toggle("promo__nav_active")})})});const buttons=document.querySelectorAll(".card-btn"),overlay=document.querySelector(".overlay"),modals=document.querySelectorAll(".modal"),aboutEcoAnim=(buttons.forEach(t=>{t.addEventListener("click",()=>{var e=t.dataset.modal;window.innerWidth<767&&modals.forEach(e=>{e.classList.remove("show")}),document.getElementById(e).classList.add("show"),overlay.classList.add("show"),document.body.style.overflow="hidden"})}),document.querySelectorAll(".modal__close").forEach(e=>{e.addEventListener("click",()=>{modals.forEach(e=>{e.classList.remove("show")}),overlay.classList.remove("show"),document.body.style.overflow="auto"})}),window.innerWidth<767&&overlay.removeEventListener("click",()=>{modals.forEach(e=>{e.classList.remove("show")}),overlay.classList.remove("show"),document.body.style.overflow="auto"}),document.querySelectorAll(".about, .ecosystem")),observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("animate__fadeInLeft"),observer.unobserve(e.target))})}),gamedevAnim=(aboutEcoAnim.forEach(e=>{observer.observe(e)}),document.querySelectorAll(".gamedev")),observer2=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("animate__fadeInRight"),observer2.unobserve(e.target))})});var links;gamedevAnim.forEach(e=>{observer2.observe(e)}),window.innerWidth<767&&(links=document.querySelectorAll('a[href^="#"]')).forEach(function(e){e.addEventListener("click",function(e){var t=document.querySelector(this.getAttribute("href"));t&&(e.preventDefault(),window.scrollTo({top:t.offsetTop-80,behavior:"smooth"}))})});