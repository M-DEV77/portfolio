
 const title = document.getElementsByTagName('title')[0];
 const nome = document.getElementById('nome');
 const foto = document.getElementById('foto');
 fetch('arquivo.txt')
.then(response => response.text())
.then(text => {
  
  const array = text.split("\n");
  foto.style.backgroundImage=`url(${array[1]})`
  nome.innerHTML = array[0];
  title.innerHTML ='Portfolio: '+array[0];
  console.log(title.innerHTML);
})

