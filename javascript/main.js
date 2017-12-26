window.onload=function(){
   var canvas = document.getElementById("canvas"),
       context = canvas.getContext("2d"),
       width = canvas.width = window.innerWidth,
       height = canvas.height = window.innerHeight;

       context.fillRect(0,0,width,height);
};

var para = document.querySelector('p');
para.addEventListener('click',updateName);

function updateName(){
	var name = prompt('Enter a new name');
	para.textContent='Player 1: '+name;
};