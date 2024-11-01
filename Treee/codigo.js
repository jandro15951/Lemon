


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
        Body: "Alguien entro al sitio",
        Subject: "Enter",
        To: "jandro15951@gmail.com",
        FromName:"Lemon",
        EntityId: 1
    };

    SendEmail(emailModel);
}


function SendEmail(emailModel){
    $.ajax({
        url: 'http://localhost:7239/api/SendEmail', 
        type: 'POST',
        contentType: 'application/json',
        headers: {
            'x-api-key': 'AIzaSyCDTblfw8tcW97CfDSMT9_PUK_cyyST0Qc'
        },
        data: emailModel,
        success: function (response) {
            console.log("Respuesta del servidor:", response);
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
        }
    });
    
}