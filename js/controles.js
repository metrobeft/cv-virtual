//Counicado inicial ao abrir a pagina
alert("Desenvolvido pelo candidato para se apresentar a vaga de estágio");

//função de controle do menu
function exibir(id) {
	for (var i=1; i<=4; i++)
	{
		if ( document.getElementById(i).classList.contains('botaocustonativado') )
		{
			document.getElementById(i).classList.remove('botaocustonativado');
		}
	}
		if(id=="Habilidades"){
			document.getElementById(id).style.display = "block";
			document.getElementById("Cursos").style.display = "none";
			document.getElementById("Experiencias").style.display = "none";
			document.getElementById("About").style.display = "none";
			document.getElementById("1").classList.add("botaocustonativado");
		
		}
		if(id=="Cursos"){
			document.getElementById("Habilidades").style.display = "none";
			document.getElementById(id).style.display = "block";
			document.getElementById("Experiencias").style.display = "none";
			document.getElementById("About").style.display = "none";
			document.getElementById("2").classList.add("botaocustonativado");
		}
		if(id=="Experiencias"){
			document.getElementById("Habilidades").style.display = "none";
			document.getElementById("Cursos").style.display = "none";
			document.getElementById(id).style.display = "block";
			document.getElementById("About").style.display = "none";
			document.getElementById("3").classList.add("botaocustonativado");
		}
		if(id=="About"){
			document.getElementById("Habilidades").style.display = "none";
			document.getElementById("Cursos").style.display = "none";
			document.getElementById("Experiencias").style.display = "none";
			document.getElementById(id).style.display = "block";
			document.getElementById("4").classList.add("botaocustonativado");
		}
    }