// smoothscroll

const handelSmoothScroll = (event) => {
  event.preventDefault();
  const target = event.target;
  const targetId = target.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  const top = targetElement.offsetTop;
  window.scrollTo({
    top,
    behavior: 'smooth',
  });
  // target add active class
  const navItems = document.querySelectorAll('.top-nav-list li a');
  navItems.forEach((item) => {
    item.classList.remove('active');
  });
  target.classList.add('active');
};

// Listen anchor links
document.querySelectorAll('.smooth-scroll').forEach((link) => {
  link.addEventListener('click', handelSmoothScroll);
});

// document.addEventListener('scroll', smoothScroll);
