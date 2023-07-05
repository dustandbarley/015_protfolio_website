
// Get all elements with class 'nav'
const navElements = document.querySelectorAll('.nav');

// Add event listeners to each 'nav' element
navElements.forEach(navElement => {
  navElement.addEventListener('mouseover', () => {
    navElement.style.backgroundColor = '#f6dbb3';
  });

  navElement.addEventListener('mouseout', () => {
    navElement.style.backgroundColor = '';
  });
});

const navText = document.querySelectorAll('.nav a');

navText.forEach(navText => {
    navText.addEventListener('mouseover', () => {
        navText.style.color = 'black';
    });

    navText.addEventListener('mouseout', () => {
        navText.style.color = '';
    });
});