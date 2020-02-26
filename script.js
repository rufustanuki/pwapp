document.addEventListener('DOMContentLoaded', function() {

	document.getElementById("dice").addEventListener("click", function( event ) {
		var min = Math.ceil(1);
		var max = Math.floor(7);
		var result = Math.floor(Math.random() * (max - min)) + min;
		
		var li = document.createElement('li');
		li.textContent = result;
		var ul = document.getElementById("result");
		if(ul.firstChild !== null){
			ul.insertBefore(li,ul.firstChild);
		}else{
			ul.appendChild(li);
		}
		if(ul.children.length > 10){
			ul.removeChild(ul.lastElementChild);
		}
	});

	if (window.matchMedia('(display-mode: standalone)').matches) {
		console.log("alrady installed");
	}else{
		console.log("not installed");
	}
		
});
