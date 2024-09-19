const mobile = document.querySelector('.menu-toggle');
const mobileOff = document.querySelector('.menu-off');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function() {
  mobile.classList.toggle("is-active");
  mobileLink.classList.toggle("active");
});
mobileOff.addEventListener("click", function() {
  mobile.classList.remove("is-active");
  mobileLink.classList.remove("active");
});


var scrolling = true;
var currentIndex = 0; 
var stepFilter;
var step ; 

$(window).on('resize', function() {
    step = $(window).width() ; // نعرض 4 عناصر في كل مرة
}); 
$(window).trigger('resize');
$(".back").click(function(e) {
    e.preventDefault();
    currentIndex = Math.max(0, currentIndex - 1); // تأكد أن المؤشر لا يقل عن صفر
    $(".highlight-wrapper").animate({
        scrollLeft: currentIndex * step 
    });
});
$(".next").click(function(e) {
    e.preventDefault();
    currentIndex = Math.min(currentIndex + 1, $(".highlight-card").length - 1); // تأكد أن المؤشر لا يتجاوز عدد العناصر
    $(".highlight-wrapper").animate({
        scrollLeft: currentIndex * step
    });
});
$(window).on('resize', function() {
    stepFilter = $(window).width()  ; // نعرض 4 عناصر في كل مرة
});
$(window).trigger('resize');
$(".back-menus").bind("click" , function(e){
    e.preventDefault();
    currentIndex = Math.max(0, currentIndex - 1);
    $(".filter-wrapper").animate({
        scrollLeft: currentIndex * step / 3
    })
});
$(".next-menus").bind("click" , function(e){
    e.preventDefault();
    currentIndex = Math.min(currentIndex + 1, $(".highlight-card").length - 1); // تأكد أن المؤشر لا يتجاوز عدد العناصر
    $(".filter-wrapper").animate({
        scrollLeft: currentIndex * step
    });
});


const button = document.getElementById('myButton');
const messageBox = document.getElementById('messageBox');

button.addEventListener('click', () => {
  messageBox.classList.toggle('hidden');
  messageBox.classList.toggle('show');
});

menuBtn.addEventListener("click", (e) => {
navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");
menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});


