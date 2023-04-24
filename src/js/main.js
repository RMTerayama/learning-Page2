var cont =1;
VanillaTilt.init(document.querySelectorAll(".vantagens"));
VanillaTilt.init(document.querySelectorAll(".linguagem"));


new TypeIt("#animated", {
    speed: 150,
    loop: true,

  })  
  .type("HTML", { delay: 800 })
  .delete(4)
  .type("CSS",{ delay: 800 })
  .delete(3)
  .type("User Interface (UI)", { delay: 800 })
  .delete(19)
  .type("Responsive Design",{ delay: 800 })
  .delete(17)
  .type("Front-End",{ delay: 800 })
  .pause(1500)
  .delete(9)
  .go();


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
