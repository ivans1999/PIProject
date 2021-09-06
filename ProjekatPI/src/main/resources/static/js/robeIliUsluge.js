var robeUsluge = [];

function dajRobuIliUsluge(text){
    var sifraMagacinaIzlaz = 0;
    if(prikaziOtpremnicu){
        sifraMagacinaIzlaz = $('#magacinOtpremnica').val();
    }else if(prikaziMedjumagacinskiPromet){
        sifraMagacinaIzlaz = $('#inputMagacin1').val();
    }
    
    var u = "";
    if(prikaziOtpremnicu || prikaziMedjumagacinskiPromet){
        u = "http://localhost:8080/api/roba-ili-usluga/"+sifraMagacinaIzlaz
    }else{
        u = "http://localhost:8080/api/roba-ili-usluga";
    }
    $.ajax({
        type: "GET",
        contentType : 'application/json; charset=utf-8',
        url : u,
        success : function(result){
            if(text === "svaRobaIliUsluge"){
                prikaziRobeIliUsluge(result);
            }else{
                robeUsluge = result;
            }
        },
        error :function(e){
            console.log("Greska!!!");
        }
    });
}
function submitRobaUsluga(){
    var naziv = "";
    naziv = $("#nazivInputRobaUsluga").val();
    var jedinicaMere = $("#inputJedinicaMere");
    if(naziv===""){
        alert("Morate uneti naziv robe ili usluge");
    }else {
        var formData = {
            "naziv": naziv,
            "idJedinicaMere": jedinicaMere.val()
        }
        
        $.ajax({
            url : 'http://localhost:8080/api/roba-ili-usluga',
            type : "POST",
            contentType: 'application/json; charset=utf-8',
            data : JSON.stringify(formData),
            success: function(){
                alert('Roba ili usluga uspesno dodata');
                odrediPrikaz('sveRobeUsluge');
            },
            error : function(e){
                alert('greska se desila');
                console.log("ERROR: ", e);
            }
        });
    }
}
function deleteRobaIliUsluga(id){
    $.ajax({
        url:'http://localhost:8080/api/roba-ili-usluga/' + id,
        type: 'DELETE',
        contentType: 'application/json; charset=utf-8',
        success: function(result){
            alert('Uspjesno obrsana roba ili usluga');
            odrediPrikaz('sveRobeUsluge');
        },
        error : function(e){
            alert('Doslo je do neke greške!')
            console.log("ERROR: ", e);
        }
    });
}