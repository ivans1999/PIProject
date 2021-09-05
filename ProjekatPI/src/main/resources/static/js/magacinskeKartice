var selectedId;
var kartice = [];

function prikazSvihMagacinskihKartica() {

    var sifraMagacina = $('#inputMagacinForMagKart').val();
    var sifraRobeIliUsluge = $('#inputRobaForMagKart').val();
    var brojPoslovneGodine = $('#inputGodinaForMagKart').val();
    var tabelaMK = $("#magacinskeKarticeTable");
    var tbodyMK = $("#tbodyMagacinskeKartice");
    
    function prikaziMagKart(){
        $.ajax({
            type: "GET",
            contentType : 'application/json; charset=utf-8',
            url : "http://localhost:8080/api/magacinska-kartica/"+sifraMagacina+"/"+sifraRobeIliUsluge+"/"+brojPoslovneGodine,
            success : function(result){
                kartice = result;
                tabelaMK.show();
                tbodyMK.empty();
                for(p in result){
                    
                    tbodyMK.append(
                        '<tr>'
                            +'<td align="center">'+result[p].robaIliUsluga+'</td>'
							+'<td align="center">'+'<button class="btn btn-link" onclick="prikaziOdredjenuMagacinskuKarticu('+result[p].id+')">'+result[p].nazivMagacina+'</button>'+'</td>'
							+'<td align="center">'+result[p].nazivRobeIliUsluge+'</td>'
							+'<td align="center">'+result[p].brojPoslovneGodine+'</td>'
							+'<td align="center">'+result[p].ukupnaKolicina+'</td>'
							+'<td align="center">'+result[p].cena+'</td>'
						+'</tr>'
                    )};
                   
            },
            error :function(e){
                alert('ne valja nesto');
            }
        });
    }
    prikaziMagKart();

    console.log('prikazane sve mag kartice');
}
