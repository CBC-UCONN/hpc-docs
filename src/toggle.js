// Code to toggle the chevron up or down on buttons with chevron 

// Select all elements with the db-toggle class
document.addEventListener('DOMContentLoaded', function() {
  const toggleElements = document.querySelectorAll('.chevron-toggle');
  
  // Add click event listener to each toggle element
  toggleElements.forEach(function(element) {
      element.addEventListener('click', function() {
          // Find the child element with the bi class
          const iconElement = this.querySelector('.bi');
          
          if (iconElement) {
              // Toggle between chevron-down and chevron-up classes
              if (iconElement.classList.contains('bi-chevron-down')) {
                  iconElement.classList.remove('bi-chevron-down');
                  iconElement.classList.add('bi-chevron-up');
              } else if (iconElement.classList.contains('bi-chevron-up')) {
                  iconElement.classList.remove('bi-chevron-up');
                  iconElement.classList.add('bi-chevron-down');
              }
          }
      });
  });
});