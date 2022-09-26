// Update the style of the navigation bar after the page is scrolled
let pageList = document.querySelectorAll('.page');

// Update the style of the navigation bar
function updateNavStyle(id) {
  const navItems = document.querySelectorAll('.top-nav-list li a');
  navItems.forEach((item) => {
    item.classList.remove('active');
  });
  const target = document.querySelector(`.top-nav-list li a[href="#${id}"]`);
  target.classList.add('active');
}
const handelPageChange = () => {
  // anti-shake
  if (timer) {
    return;
  }
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  // Get pages in scope
  let page = anchorList.filter((item) => item <= scrollTop);
  const pageId = pageList[page.length - 1].id;
  // Update the style of the navigation bar
  updateNavStyle(pageId);
  timer = setTimeout(() => {
    timer = null;
  }, 20);
};

// Initialize anchor position
let anchorList = [];
for (let i = 0; i < pageList.length; i++) {
  anchorList.push(pageList[i].offsetTop - 100);
}
// Update the style of the navigation bar when the page is swiped
let timer = null;
window.addEventListener('scroll', handelPageChange);
handelPageChange();
