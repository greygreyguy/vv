
let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});


/* Onload demo - dirty timeout */
/*let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
	}, 5500);
});*/
           
           var pop = document.getElementById("overlay");

if ( document.cookie.indexOf("CERTIFIEDAGE18") >= 0 ) 
{
     pop.style.display = "none";
}

document.getElementById("ofAge").onclick = function() 
{
     document.cookie = "CERTIFIEDAGE18=true";
     // should add document.cookie.expires
     // as is, this will just be a session cookie

    pop.style.display = "none";
}     
