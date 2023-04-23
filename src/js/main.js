var cont =1;
VanillaTilt.init(document.querySelectorAll(".vantagens"));
VanillaTilt.init(document.querySelectorAll(".linguagem"));

setInterval(()=>{
    proximoComent();
},3500);

function proximoComent(){
 cont++;
 if(cont>4){
    cont=1;
 }
 document.getElementById('slide'+cont).checked =true
}