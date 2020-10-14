
 var raiz = document.URL.split('/').slice(9, -1).join('/');
 console.log("raiz: " +raiz);
 var status;
 
 if ( raiz.length >= 3) {
    
    // console.log( "9: " + document.URL.split('/').slice(9, -1).join('/')  );
    // var fuente = document.URL.split('/').slice(9, -1).join('/');

    console.log('status: online');
    status = "online";
   
 } else {
  /*  var fuente = document.URL.split('/').slice(2, -1).join('/');
   console.log( "2: " + document.URL.split('/').slice(2, -1).join('/')  ); */
   console.log('status: offline');
   status = "offline";
 }





// if( current_page == "blog" || current_page == "blog_entry" || current_page == "devblog" || current_page == "devblog_entry")
if( current_page == "blog" || current_page == "devblog" ){
  var  header2 =  document.createElement("div");
  header2.setAttribute("id", "header2");
  //incluye nav dentro de #header
 document.getElementById("header").appendChild(header2); 
 
 //  document.getElementById("header").innerHTML += " <nav>" ; 
 document.getElementById("header2").innerHTML += "<div  id='logo_container'><img id='logo' src='../img/logo.png'></div>";
 document.getElementById("header2").innerHTML += " <h1> Julian Filardi </h1>";
 document.getElementById("header2").innerHTML += " <div id='main_navbar'> <a  id='nav_link_home' href='../index.html'> Home </a><a id='nav_link_blog' href='index.html'> blog </a><a id='nav_link_devblog'  href='../devblog/index.html'> devblog </a></div>";


}
else if( current_page == "home" ){
  var  header2 =  document.createElement("div");
  header2.setAttribute("id", "header2");
  //incluye nav dentro de #header
 document.getElementById("header").appendChild(header2); 
 
 //  document.getElementById("header").innerHTML += " <nav>" ; 
 document.getElementById("header2").innerHTML += "<div  id='logo_container'><img id='logo' src='img/logo.png'></div>";
 document.getElementById("header2").innerHTML += " <h1> Julian Filardi </h1>";
 document.getElementById("header2").innerHTML += " <div id='main_navbar'> <a  id='nav_link_home' href='../index.html'> Home </a><a id='nav_link_blog' href='index.html'> blog </a><a id='nav_link_devblog'  href='../devblog/index.html'> devblog </a></div>";


}



/* if( current_page != "home") */
else{
  var navbar_container =  document.createElement("nav");
  navbar_container.setAttribute("id", "main_navbar");
  //incluye nav dentro de #header
 document.getElementById("header").appendChild(navbar_container); 
 
 //  document.getElementById("header").innerHTML += " <nav>" ; 
 document.getElementById("main_navbar").innerHTML += "<a  id='nav_link_home' href='../index.html'> Home </a>";
//  document.getElementById("main_navbar").innerHTML += "<a href='index.html' class='active'> blog </a>";
 document.getElementById("main_navbar").innerHTML += "<a id='nav_link_blog' href='index.html'> blog </a>";
 document.getElementById("main_navbar").innerHTML += "<a id='nav_link_devblog'  href='../devblog/index.html'> devblog </a>" ;
}











if( current_page == "home"){

  //crea el elemento nav



  document.getElementById("nav_link_home").href= "index.html"; 
  document.getElementById("nav_link_blog").href= "blog/index.html";
  document.getElementById("nav_link_devblog").href= "devblog/index.html";
}
if( current_page == "blog" || current_page == "blog_entry"){
 

  document.getElementById("nav_link_home").href= "../index.html"; 
  document.getElementById("nav_link_blog").href= "index.html";
  document.getElementById("nav_link_devblog").href= "../devblog/index.html";
}
if( current_page == "devblog" || current_page == "devblog_entry"){
  document.getElementById("nav_link_home").href= "../index.html"; 
  document.getElementById("nav_link_blog").href= "../blog/index.html";
  document.getElementById("nav_link_devblog").href= "index.html";
}




