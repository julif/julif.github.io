
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
 //document.getElementById("header2").innerHTML += "<div  id='logo_container'> <img id='logo' src='../img/logo.svg' alt='Julif logo'></img></div>";



 document.getElementById("header2").innerHTML += " <h1> Julian Filardi </h1>";
//  document.getElementById("header2").innerHTML += " <p id='sub_titulo'> Desarrollador web </p>";
 document.getElementById("header2").innerHTML += " <div id='main_navbar'> <a  id='nav_link_home' href='../index.html'> Home </a><a id='nav_link_blog' href='index.html'> blog </a><a id='nav_link_devblog'  href='../devblog/index.html'> devblog </a></div>";

// document.getElementById("header2").innerHTML += " <div id='main_navbar'> <a  id='nav_link_home' href='../index.html'> Home </a><a id='nav_link_blog' href='index.html'> blog </a><a id='nav_link_devblog'  href='../devblog/index.html'> devblog </a></div>";




}
else if( current_page == "home" ){
  var  header2 =  document.createElement("div");
  header2.setAttribute("id", "header2");
  //incluye nav dentro de #header
 document.getElementById("header").appendChild(header2); 
 
 //  document.getElementById("header").innerHTML += " <nav>" ; 
 document.getElementById("header2").innerHTML += "<div  id='logo_container'><img id='logo' src='img/logo.png'></div>";
 document.getElementById("header2").innerHTML += " <h1> Julian Filardi </h1>";
//  document.getElementById("header2").innerHTML += " <p id='sub_titulo'> Julif </p>";
 document.getElementById("header2").innerHTML += " <div id='main_navbar'> <a  id='nav_link_home' href='../index.html'> Home </a><a id='nav_link_blog' href='index.html'> blog </a><a id='nav_link_devblog'  href='../devblog/index.html'> devblog </a></div>";





}

if( current_page == "home" || current_page == "blog" || current_page == "devblog" ){
   // social links-------------------------------------
 var  social_links =  document.createElement("div");
 social_links.setAttribute("id", "social_links_container");

document.getElementById("header").appendChild(social_links); 
document.getElementById("social_links_container").innerHTML += " <div id='box' class='box'></div>";
document.getElementById("box").innerHTML += " <a href='https://twitter.com/julian_julif' id='twitter_btn'> <!-- twitter --> <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24 'viewBox='0 0 24 24'><path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'/></svg> </a>";
document.getElementById("box").innerHTML += " <a href='https://www.facebook.com/JulifIsBetterThanYourMom/' id='facebook_btn'> <!-- facebook --> <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24 'viewBox='0 0 24 24'><path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'/></svg> </a>"; 
//document.getElementById("box").innerHTML += " <a href='http://julif-art.deviantart.com/' id='deviantart_btn'> <!-- deviantart --> <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24 'viewBox='0 0 24 24'><path d='M20 4.364v-4.364h-4.364l-.435.439-2.179 4.124-.647.437h-7.375v6h4.103l.359.404-4.462 8.232v4.364h4.509l.435-.439 2.174-4.124.648-.437h7.234v-6h-3.938l-.359-.438z'/></svg> </a>";
//document.getElementById("box").innerHTML += " <a href='https://julif-art.tumblr.com/' id='tumblr_btn'>  <!-- tumblr --><svg xmlns='http://www.w3.org/2000/svg 'width='24 'height='24' viewBox='0 0 24 24'><path d='M19.512 17.489l-.096-.068h-3.274c-.153 0-.16-.467-.163-.622v-5.714c0-.056.045-.101.101-.101h3.82c.056 0 .101-.045.101-.101v-5.766c0-.055-.045-.1-.101-.1h-3.803c-.055 0-.1-.045-.1-.101v-4.816c0-.055-.045-.1-.101-.1h-7.15c-.489 0-1.053.362-1.135 1.034-.341 2.778-1.882 4.125-4.276 4.925l-.267.089-.068.096v4.74c0 .056.045.101.1.101h2.9v6.156c0 4.66 3.04 6.859 9.008 6.859 2.401 0 5.048-.855 5.835-1.891l.157-.208-1.488-4.412zm.339 4.258c-.75.721-2.554 1.256-4.028 1.281l-.165.001c-4.849 0-5.682-3.701-5.682-5.889v-7.039c0-.056-.045-.101-.1-.101h-2.782c-.056 0-.101-.045-.101-.101l-.024-3.06.064-.092c2.506-.976 3.905-2.595 4.273-5.593.021-.167.158-.171.159-.171h3.447c.055 0 .101.045.101.101v4.816c0 .056.045.101.1.101h3.803c.056 0 .101.045.101.1v3.801c0 .056-.045.101-.101.101h-3.819c-.056 0-.097.045-.097.101v6.705c.023 1.438.715 2.167 2.065 2.167.544 0 1.116-.126 1.685-.344.053-.021.111.007.13.061l.995 2.95-.024.104z' fill-rule='evenodd' clip-rule='evenodd'/></svg> </a>";
document.getElementById("box").innerHTML += " <a href='https://github.com/julif' id='github_btn'> <!-- github --> <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24 'viewBox='0 0 24 24'><path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/></svg> </a>";
document.getElementById("box").innerHTML += " <a href='https://www.instagram.com/_julif_/' id='instagram_btn'> <!-- instagram --> <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24 'viewBox='0 0 24 24'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/></svg> </a>";
//document.getElementById("box").innerHTML += " <a href='https://ko-fi.com/juli22f?fbclid=IwAR0gsI_8fK69GiAkQN5ZuF9_I0KUtzE8O6pDQu3efmkIXndPeFl4FYv_kK8' id='kofi_btn'> <!-- ko-fi --> <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24 'viewBox='0 0 24 24'><path d='M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z'/></svg> </a>";

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




