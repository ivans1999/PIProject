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
function editRobeIliUsluge(id){
    $('#dodavanjeRobeUsluge').show();
    $("#robeUslugeTable").hide();
    $("#dodavanjeRobeUsluge").show();
    $('#izmeniRobuIliUslugu').show();
    $("#dodajRobuIliUslugu").hide();
    
    function prikaziRobuIliUslugu(){
        $.ajax({
            url:'http://localhost:8080/api/roba-ili-usluga/jedna-roba-ili-usluga/' + id,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',

            success: function(result){
            	dajPreduzeca("selectPreduzeca");
                dajJediniceMere(result.idJedinicaMere);
                var nazivR = $("#nazivInputRobaUsluga");
                var jedinicaMereR = $("#inputJedinicaMere");
                var idRobeUpdate = $('#idRobeIliUslugeUpdate');

                idRobeUpdate.val(result.sifra);
                nazivR.val(result.naziv);
                // jedinicaMereR.val(result.idJedinicaMere);

                },
            error : function(e){
                alert('Doslo je do neke greške!')
                console.log("ERROR: ", e);
            }

        });
    }

    prikaziRobuIliUslugu();
}
function selectRobaIliUsluga(list){
    console.log("selectRobe")
    roba=list;
   
    var inputRobaForMagKart = $("#inputRobaForMagKart");
    var html = "";
    html += '<option value="0"></option>';
    list.forEach(roba => {
        html += '<option value="' + roba.sifra + '">' + roba.naziv + '</option>';
    });

    inputRobaForMagKart.empty();
    inputRobaForMagKart.append(html);

}
function submitUpdateRobaIliUsluga(){
    var id = $("#idRobeIliUslugeUpdate").val();
    var naziv = $("#nazivInputRobaUsluga").val();
    var jedMerR = $("#inputJedinicaMere").val();

    var formData = {
        "naziv": naziv,
        "idJedinicaMere": jedMerR
    }

    console.log(JSON.stringify(formData));

    $.ajax({
        url:'http://localhost:8080/api/roba-ili-usluga/' + id,
        type: 'PUT',
        contentType: 'application/json; charset=utf-8',
        data : JSON.stringify(formData),
        success: function(result){
            alert('Roba ili usluga je uspesno izmenjena!');
            odrediPrikaz('sveRobeUsluge');
        },
        error : function(e){
            alert('Doslo je do neke greške!')
            console.log("ERROR: ", e);
        }
    });
}
function prikaziRobeIliUsluge(list){
    var tbodyRobaUsluga = $('#tbodyRobaUsluga');
    var html='';
    tbodyRobaUsluga.empty();
    list.forEach(ru => {
        html += '<tr>';
        html +=     '<td align="center">'+ru.sifra+'</td>';
        html +=     '<td align="center">';
        // html +=         '<a href="" id="prikaziJedno" result-prID="'+ru.sifra+'">';
        html +=             ru.naziv;
        // html +=         '</a>';
        html +=     '</td>';
        html +=     '<td align="center">'+ru.jedinicaMere+'</td>';
        html +=     '<td align="center">';
	    html +=         '<button type="submit" class="btn btn-warning" style="margin-right: 5%;" onclick="editRobeIliUsluge('+ru.sifra+')">IZMENI</button>';
	    html +=         '<button type="submit" class="btn btn-danger" onclick="deleteRobaIliUsluga('+ru.sifra+')">OBRIŠI</button>';
        html +=      '</td>';
        html +=   '</tr>';
    });
    tbodyRobaUsluga.append(html);
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