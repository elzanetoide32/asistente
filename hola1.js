
const decir= texto=>{
	speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
document.querySelector(".modal-img");
addEventListener("click",()=>{
	const micro= document.querySelector(".microfono");
	const modal= document.querySelector(".modal");
	modal.style.animation= "desaparecer 1s forwards";
	micro.style.animation= " apareceryexpandir 1s forwards 0.5s";
	setTimeout(()=>{
		document.body.removeChild(modal);
		decir("bienbenido, a tu asistente virtual");		
		iniciarEscucha();	
		
	},1100);
});

//se inicia la escucha

let rec;
const iniciarEscucha= ()=>{
	if (!("webkitSpeechRecognition" in window)) {
		alert("disculpas, no puedes usar la API");
	}
	 else {		
	 	rec = new webkitSpeechRecognition();
	 	rec.lang = "es-AR";
	 	rec.continuous = true;
	 	rec.interim = true;
	 	rec.start();
		rec.addEventListener("result", iniciar);
	}
function iniciar(event){	
	
	for (let i = event.resultIndex; i < event.results.length; i++){
		
		document.getElementById('texto').innerHTML = event.results[i][0].transcript;
        escucharComando(document.getElementById('texto').innerHTML);     

	}
	

}
		
				
}

// sentencias else if 



const escucharComando= res=>{
	res= res.toUpperCase();	
	

	if( res ==="HOLA"){
		decir("bienvenido puto");
		
	}

	else if(res==="QUIERO MUSICA" ){
		decir("que tipo de musica quieres?");
	}
	else if(res==="RAP"){
		decir("aqui tienes tu rap");
		open("https://www.youtube.com/watch?v=JGL4e2dYQLw&list=LL");
		
			
	}





	else if(res==="DISCORD" ){
		decir("aqui tienes discord");
		open("https://discord.com/channels/@me");
	}

	else if(res==="YOUTUBE"){
		decir("aqui tienes youtube");
		open("https://www.youtube.com/");
		
			
	}

	else if(res==="PRIME VIDEO" ){
		decir("aqui tienes prime video");
		open("https://www.primevideo.com/ref=av_auth_return_redir");
	}

	else if(res==="TWITCH"){
		decir("aqui tienes twitch");
		open("https://www.twitch.tv/");
		
			
	}

	else if(res==="SAN BONIFACIO" ){
		decir("aqui tienes tu colegio luca o martu ");
		open("https://sanbonifacio.kimeln.com.ar/");
	}

	else if(res==="VICENTA VIDAL BOU"){
		decir("aqui tienes tu cole eze");
		open("https://campusvicenta.com/");
		
			
	}
	else if(res==="MAIL"){
		decir("aqui tienes tu mail");
		open("https://mail.google.com/mail/u/0/#inbox");
		
			
	}
		
		
	else{		
		decir("no te entendi");	
		rec.stop();
		iniciarEscucha();
	}

}

