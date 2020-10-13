/*  //crea el elemento nav
 var navbar_container =  document.createElement("nav"); 
 // cre el elemento a
 var navbar_container_a = document.createElement("a"); 

//escribe el texto de a
 navbar_container_a.appendChild(document.createTextNode(" Inicio")); 
 // asigna el link de a
 navbar_container_a.setAttribute("href", "../index.html");

//incluye a dentro de nav
 navbar_container.appendChild(navbar_container_a); 

//incluye nav dentro de el contendor
 document.getElementById("header").appendChild(navbar_container); 

 */












 // document.getElementById("header").innerHTML=" <nav>  <a href='../index.html'> Inicio </a><a href='index.html' class='active'> blog </a><a href='../devblog/index.html'> devblog </a></nav> "






//crea el elemento nav
var navbar_container =  document.createElement("nav");
navbar_container.setAttribute("id", "main_navbar");
 //incluye nav dentro de el contendor
 document.getElementById("header").appendChild(navbar_container); 

//  document.getElementById("header").innerHTML += " <nav>" ; 
 document.getElementById("main_navbar").innerHTML += "<a  id='nav_link_home' href='../index.html'> Inicio </a>";
//  document.getElementById("main_navbar").innerHTML += "<a href='index.html' class='active'> blog </a>";
 document.getElementById("main_navbar").innerHTML += "<a id='nav_link_blog' href='index.html'> blog </a>";
 document.getElementById("main_navbar").innerHTML += "<a id='nav_link_devblog'  href='../devblog/index.html'> devblog </a>" ;
//  document.getElementById("header").innerHTML += "</nav>";

console.log( "href: " + window.location.href);
console.log("location: " + window.location);
// console.log(window.location.hostname);
console.log( "origin: " + window.location.origin);
console.log( "search: " + window.location.search);
console.log( "hash: " + window.location.hash);

/* console.log( document.URL.substr(0,document.URL.lastIndexOf('/'))  );
console.log( "1: " + document.URL.split('/').slice(1, -1).join('/')  );
console.log( "2: " + document.URL.split('/').slice(2, -1).join('/')  );
console.log( "3: " + document.URL.split('/').slice(3, -1).join('/')  );
console.log( "4: " + document.URL.split('/').slice(4, -1).join('/')  );
console.log( "5: " + document.URL.split('/').slice(5, -1).join('/')  );
console.log( "6: " + document.URL.split('/').slice(6, -1).join('/')  );
console.log( "7: " + document.URL.split('/').slice(7, -1).join('/')  );
console.log( "8: " + document.URL.split('/').slice(8, -1).join('/')  );
console.log( "9: " + document.URL.split('/').slice(9, -1).join('/')  ); */
var raiz = document.URL.split('/').slice(9, -1).join('/');
console.log(raiz);
if ( raiz == "julif.github.io") {
   
   console.log( "9: " + document.URL.split('/').slice(9, -1).join('/')  );
   var fuente = document.URL.split('/').slice(9, -1).join('/');
  
} else {
  var fuente = document.URL.split('/').slice(2, -1).join('/');
  console.log( "2: " + document.URL.split('/').slice(2, -1).join('/')  );
}

if( fuente == "julif.github.io"){
  document.getElementById("nav_link_home").href= "index.html"; 
  document.getElementById("nav_link_blog").href= "blog/index.html";
  document.getElementById("nav_link_devblog").href= "devblog/index.html";
}
if( fuente == "julif.github.io/blog"){
  document.getElementById("nav_link_home").href= "../index.html"; 
  document.getElementById("nav_link_blog").href= "index.html";
  document.getElementById("nav_link_devblog").href= "../devblog/index.html";
}
if( fuente == "julif.github.io/devblog"){
  document.getElementById("nav_link_home").href= "../index.html"; 
  document.getElementById("nav_link_blog").href= "../blog/index.html";
  document.getElementById("nav_link_devblog").href= "index.html";
}

//chequear el 2 en github
//chequar el 9 en pc
