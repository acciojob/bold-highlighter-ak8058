function highlight() {
    //Write your code here
	document.querySelectorAll('strong').forEach(el=>{
		el.style.color='rgb(0, 128, 0)';
	});
}


function return_normal() {
    //Write your code here
	document.querySelectorAll('strong').forEach(el=>{
		el.style.color='rgb(0, 0, 0';
	});
    
}
