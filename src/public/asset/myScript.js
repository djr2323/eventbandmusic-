    const buyBtns = document.querySelectorAll('.js-buy-ticket')
    const modal = document.querySelector('.js-modal')
    const modalContainer = document.querySelector('.js-modal-container')
    const close = document.querySelector('.js-close-ticket')
    var menu = document.querySelector('.js-menu')
    var header = document.getElementById('header')
    var headerHeight = header.clientHeight
    function Buy_ticket_modal(){
        modal.classList.add('open')
    }
    function hideTicket(){
        modal.classList.remove('open')
    }
    for(const buyBtn of buyBtns ){
        buyBtn.addEventListener('click',Buy_ticket_modal)
    }
    close.addEventListener('click',hideTicket)
    modal.addEventListener('click',hideTicket)
    modalContainer.addEventListener('click',function (event){
        event.stopPropagation();
    })
    /*đóng mở menu*/
    menu.onclick = function (){
        var isClosed = header.clientHeight === headerHeight;
        if(isClosed){
            return header.style.height = '230px';
        } else {
            return header.style.height = null;
        }
    }
    console.log(menu);

    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

    for(var menuItem of menuItems){
        
        menuItem.addEventListener('click',function(Event) {
            var isParentMenu= this.nextElementSibling && this.nextElementSibling.classList.contains("subnav");
            if(isParentMenu){
                Event.preventDefault();
            } else {
                header.style.height=null;
            }
        console.log(menuItem);
        })
    }


alertBuyticket = ()=>{
    window.alert("mua thanh cong")
}
/* slide show */

showSlide = (n)=>{
    let slides = document.getElementsByClassName("slider");
    if(n > slides.length) {slideIndex=1}
    if(n<1 ){slideIndex=slides.length};
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display="block";

    console.log(slideIndex);
}
let slideIndex = 1;
showSlide(slideIndex);
plusSlides = (n)=>{
    showSlide(slideIndex += n);
}

console.log(slideIndex)
