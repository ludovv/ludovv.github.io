$(".button-start").click(function(){
    if( $(".buttonmenu").css('display') == 'none') {
        $(".buttonmenu").css("display","block");
    }else{
        $(".buttonmenu").css("display","none");
    }

    
});   

//$(".recicleBin").click(function(){
//    window.close();
//});



window.onload = function obtenerHora(){
    setInterval(function(){
        var d = new Date();
        var hour = d.getHours();
        var minutes = d.getMinutes();
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        if(hour < 10){
            hour = "0" + hour;
        }
        document.getElementById("hora").innerHTML = hour + ":" + minutes;

    }, 1000);
};

$(".botonCerrar").click(function(){
    var repuesta = confirm("¿Desea cerrar esta pagina?");
    if(repuesta == true){
        window.close();
        $(".buttonmenu").css("display","none");

    }else{
        $(".buttonmenu").css("display","none");
    }
});


$(".buttonReboot").click(function(){
    var respuesta = confirm("¿Está seguro que desea reiniciar?");
    if(respuesta == true){
        window.close();
        window.open("https://ludovv.github.io/");
    }else{
        $(".buttonmenu").css("display","none");
    }
});

$(".grid-container-item").click(function(){
    $(".buttonmenu").css("display","none");
    $(".iframes").css("display","none");
    $(".barra").css("display","none");
    
});


/*
$(".mostrarVentana").click(function(){

    if($(".iframes").css("display") == "none"){
        $(".iframes").css("display","block");
        
    }else{
        $(".iframes").css("display","none");
    }
    if($(".barra").css("display") == "none"){
        $(".barra").css("display","block");
    }else{
        $(".barra").css("display","none");
    }
    
    

});


$(".clickNotas").click(function(){

    setTimeout(function()  {
        if($(".iframes").css("display") == "none"){
            $(".iframes").css("display","block");            
        }else{
            $(".iframes").css("display","none");
        }
        if($(".barra").css("display") == "none"){
            $(".barra").css("display","block");
        }else{
            $(".barra").css("display","none");
        }
    }, 100);
});
*/
