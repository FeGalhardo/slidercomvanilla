function invisivel(){

    let largura = window.screen.width;
    let headmobile = document.getElementById("hmobile");

    let corpo = document.getElementsByTagName('body');

    let mobileart = document.getElementById('artdesk');

    let menumobile = document.getElementById('menu-mobile');

    menumobile.style.visibility="hidden";

    mobileart.style.width = largura;

    corpo.style.width = largura;

    headmobile.style.width = largura;






}


function visivel() {

    let menumobile = document.getElementById('menu-mobile');
    let headmobile = document.getElementById("hmobile");
    let iconemenu = document.getElementsByClassName('logo-mobile');
    

    if (menumobile.style.visibility=="hidden") {


          
    
    
        menumobile.style.visibility="visible";
     


    } else{

       

        headmobile.style.height="110px";
        headmobile.style.flexDirection="row";
        menumobile.style.visibility="hidden";
        

    }
  




}

function trocaimgmais(){
   
    

    let img = document.getElementById("img-slider");
    

    if (sessionStorage.sliderparc == undefined) {


        
        sessionStorage.sliderparc = 0;

    }

    if (sessionStorage.sliderparc != undefined) {


        if (sessionStorage.sliderparc == 0) {

            img.setAttribute('src', "./img/itau1.webp");
            sessionStorage.sliderparc = 1;

        }else {

            if (sessionStorage.sliderparc == 1){


                img.setAttribute('src', "./img/members1.webp");
                sessionStorage.sliderparc = 2;



            }else {

                sessionStorage.sliderparc = 0;
                img.setAttribute('src',"./img/bradesco.jpg");


            }



        }


    }

    
    /*

    if (sessionStorage.sliderparc == undefined) {


        img.setAttribute('src', "./img/itau1.webp");

        
        sessionStorage.sliderparc = 1;

    }

    if (sessionStorage.sliderparc  == 1) {


        img.setAttribute('src', "./img/members1.webp");
        
       
        sessionStorage.sliderparc = 2;
    }

    if (sessionStorage.sliderparc  == 2) {


        img.setAttribute('src', "./img/bradesco.jpg");
        sessionStorage.sliderparc = 0;
       

    }

    if (sessionStorage.sliderparc == 0) {


        img.setAttribute('src', "./img/itau1.webp");

        
        sessionStorage.sliderparc = 1;

    }

     */

  
    



}

