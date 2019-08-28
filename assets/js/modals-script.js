document.addEventListener('DOMContentLoaded', () => {

	// Get all "modal" elements
	const $modals = Array.prototype.slice.call(document.querySelectorAll('.modal-btn'), 0);
  
	// Check if there are any navbar burgers
	if ($modals.length > 0) {
	  // Add a click event on each of them
	  $modals.forEach( el => {
		el.addEventListener('click', () => {
            
		  // Get the target from the "data-target" attribute
		  const target = el.dataset.target;
          const $target = document.getElementById(target);
          const html = document.querySelector('html');

          $target.classList.add('is-active');
          html.classList.add('is-clipped');

          document.querySelector(`div#${target} > .modal-background`).addEventListener('click', (e) => {
            e.preventDefault();
            $target.classList.remove('is-active');
            html.classList.remove('is-clipped');
          });
          document.querySelector(`div#${target} button.delete`).addEventListener('click', (e) => {
            e.preventDefault();
            $target.classList.remove('is-active');
            html.classList.remove('is-clipped');
          });
          
		});
	  });
	}
  
  });