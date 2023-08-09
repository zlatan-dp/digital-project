const animatedElements = document.querySelectorAll('.about-imag-item');
const animatedTasksElements = document.querySelectorAll('.tasks-list-item');
const animatedProjectsElements = document.querySelectorAll('.projects-list-item');

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateElementsOnScroll(elements, animationClass) {
  elements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('animate__animated', animationClass);
    }
  });
}

window.addEventListener('scroll', () => {
  animateElementsOnScroll(animatedElements, 'animate__fadeInUp');
  animateElementsOnScroll(animatedTasksElements, 'animate__flipInY');
  animateElementsOnScroll(animatedProjectsElements, 'animate__zoomIn');
});

window.addEventListener('load', () => {
  animateElementsOnScroll(animatedElements, 'animate__fadeInUp');
  animateElementsOnScroll(animatedTasksElements, 'animate__flipInY');
  animateElementsOnScroll(animatedProjectsElements, 'animate__zoomIn');
});
