var redovi = [];
var counter = 0;
var magacini = [];
var partneri = [];


function ukloniRed(redId){
    //console.log(redId)
    $("#red"+redId).remove();
    redovi.forEach(element => {
        if(element.id == redId){
           // console.log("U ifu sam!")
            const index = redovi.indexOf(element)
            redovi.splice(index,1);
        }
    });
    //console.log("redovi: "+JSON.stringify(redovi));
}

function dodajRed(){
    console.log("Dodavanje novog reda");
    counter = counter + 1;
	var nazivInput = 'nazivInput'+counter;
    var kolicinaInput = 'kolicinaInput'+counter;
    var cenaInput = 'cenaInput'+counter;
    var inputSifraArtikla = 'inputSifraArtikla'+counter;
    var inputJedinicaMere = 'inputJedinicaMere'+counter;
    var inputIznos = 'inputIznos'+counter;
    var redId = counter;
	var red = {
					'id':counter,
					'naziv':nazivInput,
					'kolicina':kolicinaInput,
                    'cena':cenaInput,
                    'vrednost':inputIznos
				}
    redovi.push(red);
    console.log(JSON.stringify(robeUsluge))
    
    if($('#magacinPrijemnica').val() == 0 && prikaziPrijemnicu){
        alert("Izaberite magacin!");
    }
    else if($('#magacinOtpremnica').val() == 0 && prikaziOtpremnicu){
        alert("Izaberite magacin!");
    }
    else if(prikaziMedjumagacinskiPromet && ($('#inputMagacin1').val() == 0 || $('#inputMagacin2').val() == 0)){
        alert("Izaberite magacin!");
    }else if(robeUsluge.length ==0){
        alert("Magacin iz koga zelite uzeti robu je prazan!");
    }else{
        var html = '';
        html += '<tr id="'+ "red"+redId + '">';
        html += '<td style="text-align: center; width: 10%">' + 
                '<input readonly style="text-align: center;" class="form-control" type="text" id="' + inputSifraArtikla + '" value="' + robeUsluge[0].sifra + '">'+
                '</td>';
        html += '<td style="text-align: center;">';
        html += '<select onchange="postaviOstaleKolone('+counter+')" class="form-control" name="nazivRobe" id="' + nazivInput + '">';
        robeUsluge.forEach(element => {
            html += '<option value="' + element.sifra + '">' + element.naziv + '</option>';
        });
        html += '</select>';
        html += '</td>';
        html += '<td style="text-align: center; width: 10%">'  + 
                '<input readonly style="text-align: center;" class="form-control" type="text" id="' + inputJedinicaMere + '" value="' + robeUsluge[0].jedinicaMere + '">'+
                '</td>';
        html += '<td style="text-align: center; width: 10%;"><input onkeyup="racunaj()" style="text-align: center;" id="' + kolicinaInput + '" class="form-control" type="text"></td>';
        if(prikaziOtpremnicu || prikaziMedjumagacinskiPromet){
            html += '<td style="text-align: center; width: 10%;">'
                        +'<input readonly style="text-align: center;" id="' + cenaInput + '" value="' + robeUsluge[0].cena + '" class="form-control" type="text">'
                    +'</td>';
        }else{
            html += '<td style="text-align: center; width: 10%;"><input onkeyup="racunaj()" style="text-align: center;" id="' + cenaInput + '" class="form-control" type="text"></td>';
        }
        html += '<td style="text-align: center; width: 10%;"><input readonly id="'+inputIznos+'" class="form-control" type="text"></td>';
        html += '<td style="text-align: center;"><button onclick="ukloniRed(\'' + redId + '\')" class="btn btn-danger">Ukloni</button></td>';
        html += '</tr>';
    
        $('#sadrzajTabele').append(html);
    }
}


function promenaPreduzeca(){
    var idPreduzeca = $('#inputMagacinPreduzece').val();
    dajMagacine("selectMagacin",idPreduzeca);
}
