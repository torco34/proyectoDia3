const boton = document.querySelectorAll(".lis")
const navbar =document.querySelector(".navbar")
// console.log(boton);
for(let i=0; i<boton.length; i++){
	boton[i].addEventListener("click", function(){
		// this.style.background=this.getAttribute("date-color")
		
		this.style.color=this.getAttribute("date-color")
		// console.log(boton[i])
		
		
	})
};
function Mostrar(){
	document.getElementById("caja").style.display = "block"
 }

 function Ocultar(){
	document.getElementById("caja").style.display = "none"
 }
