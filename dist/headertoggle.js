var elem = null;
var option ="";
var lastKnownScrollY = 0;
var offset =0;
var tolerance =0;
var position_val = '';

 function headtoggle (elem,option) { 
    this.option = option;
    this.elem   = elem;
	if(option == 'pin')
		position_val = 'fixed';
	else
		position_val = '';
 }
 
 
 function getScrollY(){
      return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}


function updateOnScroll(ev){
    var currentScrollY     = this.getScrollY(),
        toleranceExceeded    = Math.abs(currentScrollY-this.lastKnownScrollY) >= this.tolerance;
      
      if(currentScrollY < 0) { // Ignore bouncy scrolling in OSX
        return;
      }
	  if(toleranceExceeded) {
        if(currentScrollY > this.lastKnownScrollY && currentScrollY >= this.offset) {
          this.elem.style.position = position_val;
        }
        else if(currentScrollY < this.lastKnownScrollY) {
          this.elem.style.position = position_val;
        }
      }
  
      this.lastKnownScrollY = currentScrollY;
}


window.onscroll=updateOnScroll;