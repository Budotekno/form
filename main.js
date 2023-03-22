
function kayitGonder()
{
   boslukKontrol();
}

function boslukKontrol()
{
    var txtAd = document.getElementById("txtAd");
    var txtSoyad = document.getElementById("txtSoyad");
    var txtMesaj = document.getElementById("txtMesaj");
    var bilgilendirme = document.getElementById("bilgilendirme");

    

    if (txtAd.value !="" && txtSoyad.value !="" &&  txtMesaj.value !="" )
    { 

        txtAd.style.border= "1px solid #aaa"; 
        txtSoyad.style.border= "1px solid #aaa"  ; 
        txtMesaj.style.border= "1px solid #aaa"  ; 

        
      
        bilgilendirme.innerHTML="Gönderildi :)";
        txtAd.value ="";
        txtSoyad.value="";
        txtMesaj.value="";
        txtAd.focus();
    }
    else
    {
        //txtAd.style.border="1px Solid #232323";


        bilgilendirme.innerHTML="";
        txtAd.focus();
        

        txtAd.style.border= "1px solid #aaa"; 
        txtSoyad.style.border= "1px solid #aaa"  ; 
        txtMesaj.style.border= "1px solid #aaa"  ; 

    
        if (txtMesaj.value =="") {
            txtMesaj.style.border= "1px solid red"  ;    
            txtMesaj.focus();
        }

      

        if (txtSoyad.value =="") {
            txtSoyad.style.border= "1px solid red"  ;      
            txtSoyad.focus();
        }

        if (txtAd.value =="") {
            txtAd.style.border= "1px solid red"  ; 
            txtAd.focus();   
        }
        
     

        

       
    }

  

}