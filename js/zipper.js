
window.onload = function(){
	'use strict';
	// --------------------- menu movement ---------------------------

	var menu = document.getElementById('nav');

	menu.addEventListener('click', function(){
		if(menu.style.marginTop == '-20px'){
			menu.style.marginTop = '-520px';
			menu.style.transition = 'all 500ms linear';
		}
		else{
			menu.style.marginTop = '-20px';
			menu.style.transition = 'all 500ms linear';
		}
	}, false);

	// ------------------- zipper movement ---------------------------
	var zipper = document.getElementById('zip');
	var instruct = document.getElementById('instruct');
	var left = document.getElementById('left');
	var right = document.getElementById('right');

	zipper.addEventListener('click', function(){
		if( zipper.style.marginTop == '100px'){
			zipper.style.marginTop = '1530px';
			zipper.style.transition = 'all 500ms linear';

			instruct.innerHTML = 'Tap zipper to lock';
			instruct.style.transition = 'all 1s';
			
			left.style.transition = 'all 500ms linear';
			left.style.borderTopRightRadius = '450px';

			right.style.transition = 'all 500ms linear';
			right.style.borderTopLeftRadius = '450px';
		}
		else{
			zipper.style.marginTop = '100px';
			zipper.style.transition = 'all 500ms linear';
			
			instruct.innerHTML = 'BagLocked';
			instruct.style.transition = 'all 500ms ease-in';

			left.style.transition = 'all 500ms linear';
			left.style.borderTopRightRadius = '0px';

			right.style.transition = 'all 500ms linear';
			right.style.borderTopLeftRadius = '0px';
		}
		
	}, false);
}

