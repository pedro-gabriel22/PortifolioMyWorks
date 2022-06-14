







class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, btn1,btn2,btn3) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.mobilebtn1 = document.querySelector(btn1);
      this.mobilebtn2 = document.querySelector(btn2);
      this.mobilebtn3 = document.querySelector(btn3);
      this.activeClass = "active";
   
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.mobilebtn1.classList.toggle(this.activeClass);
      this.mobilebtn2.classList.toggle(this.activeClass);
      this.mobilebtn3.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      this.mobilebtn1.addEventListener("click", this.handleClick);
      this.mobilebtn2.addEventListener("click", this.handleClick);
      this.mobilebtn3.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    '.btn1',
    '.btn2',
    '.btn3',
    
  );
  mobileNavbar.init();
  









  
const menuItems = document.querySelectorAll('.nav-list a[href^="#"]');
const menu = document.querySelectorAll('.nav-text span[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  // Caso queira o nativo apenas
	// window.scroll({
	// top: to,
	// behavior: "smooth",
	// })
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

menu.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});
// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};