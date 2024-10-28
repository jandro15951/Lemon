
document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.play().catch(function(error) {
        console.log('Error playing audio:', error);
    });
});


$(document).ready(function () {

    SendSomeOneIsHere();

});


function Yes(){
   
    alert("Bueno jeje saludos")

}

function No(){
    // var emailModelVale = {
    //     Message: "Bueno, confirmo que con esto te dejo de molestar, espero que realmente esto sea lo ultimo que sabras de mi, lindo viaje :) ",
    //     Subject: "No",
    //     To: "valefersan123@gmail.com"
    // };

    // SendEmail(emailModelVale);




    var emailModel = {
        Message: "Dijo que no jaja",
        Subject: "Respuesta",
        To: "jandro15951@gmail.com"
    };


    hide();

    SendEmail(emailModel);
   


}

function hide(){
   var  element = $("#hide");

   element.hide();
}

function SendSomeOneIsHere(){

    var emailModel = {
        Message: "Alguien entro al sitio",
        Subject: "Enter",
        To: "jandro15951@gmail.com"
    };

    SendEmail(emailModel);
}


function SendEmail(emailModel){
    $.ajax({
        url: 'https://localhost:7001/api/Send', 
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(emailModel),
        success: function (response) {
            console.log("Respuesta del servidor:", response);
          
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
  
        }
    });
}