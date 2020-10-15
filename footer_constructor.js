//document.getElementById("footer").innerHTML=" <div class='footer_copyrigth_container'><linea>© Copyright 2019 - <span id='current_year'> julif</linea> <linea>- All Rights Reserved</linea></div>";
document.getElementById("footer").innerHTML=" <div class='footer_copyrigth_container'><linea>© Julif  <span id='current_year'></linea>  </div>";
// document.getElementById("footer").innerHTML=" <div class='footer_copyrigth_container'><linea>© Julif 2019 - <span id='current_year'> julif</linea> <linea> --- All Rights Reserved</linea></div>";
document.getElementById("current_year").innerHTML = new Date().getFullYear();
