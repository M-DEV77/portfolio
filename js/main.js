
 const title = document.getElementsByTagName('title')[0];
 const nome = document.getElementById('nome');
 const foto = document.getElementById('foto');
 const btnCell = document.getElementById('btnCell');
 const menu = document.getElementById('menu');
 let scrX = window.innerWidth
 var nun = 0
 function numbero(){
  nun = 0
 }
numbero();
if(scrX > 768){
  nun = 0
 }
addEventListener('click',()=>{
 
   if(nun===0){
    nun = 1
   }else{
    nun = 0
   }

   
if(nun===1){
  menu.style.display="flex";
  menu.style.height= 20+'vh';
 
}else{
  menu.style.display="none";
  
  
}   

console.log(scrX)

})


 fetch('arquivo.txt')
.then(response => response.text())
.then(text => {
  
  const array = text.split("\n");
  //foto.style.backgroundImage=`url(${array[1]})`
  //nome.innerHTML = array[0];
  //title.innerHTML ='Portfolio: '+array[0];
  console.log(title.innerHTML);
})

