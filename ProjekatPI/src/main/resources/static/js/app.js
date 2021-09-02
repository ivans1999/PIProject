var prikaziOtpremnicu = false;
var prikaziPrijemnicu = false;
var prikaziMedjumagacinskiPromet = false;

var prikaziPreduzeca = false;
var prikaziMagacinskeKartice = false;
var dodajPreduzece = false;

var prikaziMagacine = false;
var dodajMagacin = false;

var prikaziJediniceMere = false;
var dodajJedinicuMere = false;

var prikaziFormuZaDodavanjeRobeUsluge = false;
var prikaziSveRobeUsluge = false;
var prikaziPrometeMagacinskihKartica = false;
var preduzeca = [];

//podaci za prikaz magacinske kartice
var magacinskeKarticeTablesPrikazi = false;

//podaci za prikaz prometa magacinske kartice
var prikazPromMagaKartPrikazi = false;


//Podaci za prikaz partnera
var prikazSvihPoslovnihPartnera = false;
var prikazFormeZaDodavanjePoslovnogPartnera = false;

var prikaziPoslovneGodine = false;
var dodajPoslovnunGodinu = false;


function odrediPrikaz(id){
    dodavanjePreduzeca = false;
    prikaziPreduzeca = false;   
    dodavanjeMagacina = false;
    prikaziMagacine = false;   
    prikaziMagacinskeKartice = false;
    prikaziOtpremnicu = false;
    prikaziPrijemnicu = false;
    prikaziMedjumagacinskiPromet = false;
    dodavanjeRobeUsluge = false;
    prikaziPrometeMagacinskihKartica = false;
    prikaziSveRobeUsluge = false;
    prikaziFormuZaDodavanjeRobeUsluge = false;    
    prikaziJediniceMere = false;
    dodavanjeJediniceMere = false;

    prikazSvihPoslovnihPartnera = false;
    prikazFormeZaDodavanjePoslovnogPartnera = false;

    prikaziPoslovneGodine = false;
    dodavanjePoslovneGodine = false;

    magacinskeKarticeTablesPrikazi = false;
    prikazPromMagaKartPrikazi = false;

    if(id === "otpremnica"){
        prikaziOtpremnicu = true;
    }else if( id === "prijemnica"){
        prikaziPrijemnicu = true;
    }else if(id === "medjumagacinskiPromet"){
        prikaziMedjumagacinskiPromet = true; 
    }else if(id === "svaPreduzeca"){
        prikaziPreduzeca = true; 
    }else if(id === "dodajPreduzece"){
        dodavanjePreduzeca = true;        
    }else if(id === "sviMagacini"){
        prikaziMagacine = true;
    }else if(id === "dodajMagacin"){
    	dodavanjeMagacina = true;    	
    }else if(id === "sveRobeUsluge"){
        prikaziSveRobeUsluge = true;
    }else if(id === "dodavanjeRobeUsluge"){
        prikaziFormuZaDodavanjeRobeUsluge = true;
    }else if(id === "sviPrometiMagKart"){
        prikaziPrometeMagacinskihKartica = true;
    }else if(id === "sveMagacinskeKartice"){
        prikaziMagacinskeKartice = true;
    }else if(id === "sviPartneri"){
        
        prikazSvihPoslovnihPartnera = true;
    }else if(id === "dodajPartnera"){
        prikazFormeZaDodavanjePoslovnogPartnera = true;

    }else if(id === "svePoslovneGodine"){
        prikaziPoslovneGodine = true;
    }else if(id === "dodajPoslovnuGodinu"){
    	dodavanjePoslovneGodine = true;

    }else if(id === "sveJediniceMere"){
    	prikaziJediniceMere = true;    	
    }else if(id === "dodajJedinicuMere"){
    	dodavanjeJediniceMere = true;   	    	
    }else if(id === "prikaziOvuKarticu"){
    	magacinskeKarticeTablesPrikazi = true;
    }
    else if(id === "prikazPromMagaKart"){
    	prikazPromMagaKartPrikazi = true;
    }
    prikazi();
}
function prikazi(){
    redovi.forEach(element => {
        console.log("red"+element.id);
        $("#red"+element.id).remove();
    });
    redovi = [];
    var prometniDokment = $("#prometniDokment");
    var prijemnica = $("#prijemnica");
    var otpremnica = $("#otpremnica");
    var medjumagacinskiPromet = $("#medjumagacinskiPromet");
    var preduzecaTable = $("#preduzecaTable");
    var dodajPreduzece = $("#dodajPreduzece");
    var magaciniTable = $("#magaciniTable");
    var dodajMagacin = $("#dodajMagacin");
    var dodavanjeRobeUsluge = $("#dodavanjeRobeUsluge");
    var robeUslugeTable = $('#robeUslugeTable');
    var prometMagKart = $("#prometiMagacinskihKarticaTable");
    var magacinskeKartice = $("#magacinskeKarticeTable");
    
    var jedinicaMereTable = $("#jedinicaMereTable");
    var dodajJedinicuMere = $("#dodajJedinicuMere");

    var poslovniPartneri = $("#poslovniPartneri");
    var dodavanjePoslovnogPartnera = $("#dodavanjePoslovnogPartnera");

    var poslovneGodineTable = $("#poslovneGodineTable");
    var dodajPoslovnuGodinu = $("#dodajPoslovnuGodinu");
    var prikazPromMagaKartice = $("#prikazPromMagaKartice");
    var magacinskeKarticeTables = $("#magacinskeKarticeTables");
    var selectMagacinForMagKart = $("#selectMagacinForMagKart")
    // proba
    var selectRobaForMagKart = $("#selectRobaForMagKart");
    var selectGodinaForMagKart = $("#selectGodinaForMagKart");

    otpremnica.hide();
    prijemnica.hide();
    medjumagacinskiPromet.hide();
    preduzecaTable.hide();
    dodajPreduzece.hide();
    prometniDokment.hide();
    magaciniTable.hide();
    dodajMagacin.hide();
    magacinskeKartice.hide();
    prometMagKart.hide();
    dodavanjeRobeUsluge.hide();
    robeUslugeTable.hide();
    
    jedinicaMereTable.hide();
    dodajJedinicuMere.hide();

    poslovniPartneri.hide();
    dodavanjePoslovnogPartnera.hide();

    poslovneGodineTable.hide();
    dodajPoslovnuGodinu.hide();

    prikazPromMagaKartice.hide();
    magacinskeKarticeTables.hide();

    selectMagacinForMagKart.hide();

    selectRobaForMagKart.hide();
    selectGodinaForMagKart.hide();
    if(prikaziPrijemnicu || prikaziOtpremnicu || prikaziMedjumagacinskiPromet){
        dajRobuIliUsluge();
    }   
    if(prikaziPrijemnicu){
        dajPoslovnePartnere('selectPoslovniPartner');
        dajPreduzeca("selectPreduzeca");
        dajMagacine("selectMagacin",1);
        prometniDokment.show();
        prijemnica.show();
        formatirajBroj();
    }else if(prikaziOtpremnicu){
        dajPoslovnePartnere('selectPoslovniPartner');
        dajPreduzeca("selectPreduzeca");
        dajMagacine("selectMagacin",1);
        prometniDokment.show();
        otpremnica.show();
        formatirajBroj();
    }else if(prikaziMedjumagacinskiPromet){
        //console.log("prikaziMedjumagacinskiPromet");
        dajPreduzeca("selectPreduzeca");
        prometniDokment.show();
        medjumagacinskiPromet.show();
        formatirajBroj();
    }else if(prikaziPreduzeca){
        prikazSvihPreduzeca();
    }else if(dodavanjePreduzeca){
        $('#naziv').val("");
        $('#adresa').val("");
        $('#brojTelefona').val("");
        $('#pib').val("");
        $('#mib').val("");
        $('#btnDodajPreduzece').show();
        $('#updatePreduzece').hide();
        dodajPreduzece.show();
    }else if(dodavanjeMagacina){
        $("#nazivMagacina").val("");
        $('#btnDodajMagacin').show();
        $('#izmeniMagacin').hide();
    	dajPreduzeca("selectPreduzeca");
    	dodajMagacin.show();
    }else if(prikaziMagacine){
        
        prikazSvihMagacina();
    }else if(prikaziSveRobeUsluge){
        dajRobuIliUsluge("svaRobaIliUsluge");
        robeUslugeTable.show();
    }else if(prikaziFormuZaDodavanjeRobeUsluge){
        $("#nazivInputRobaUsluga").val("");
        $("#dodajRobuIliUslugu").show();
        $("#izmeniRobuIliUslugu").hide();
        dajPreduzeca("selectPreduzeca");
        dajJediniceMere();
        dodavanjeRobeUsluge.show();
    }else if(prikaziPrometeMagacinskihKartica){
         console.log("prikazSvihPrometaMagKartica")
         prikazPromMagaKartice.show();
         prikazSvihPrometaMagKartica();
    }else if(prikaziMagacinskeKartice){
        selectMagacinForMagKart.show();
        selectRobaForMagKart.show();
        selectGodinaForMagKart.show();
        dajMagacine('selectMagacin', 0);
        dajRobuIliU('svaRobaU');
        dajPoslGod('svePoslGodine');
        prikazSvihMagacinskihKartica();
    }else if(prikaziPoslovneGodine){
        prikazSvihPoslovnihGodina();
    }else if(dodavanjePoslovneGodine){
    	dajPreduzeca("selectPreduzeca");
    	dodajPoslovnuGodinu.show();
    }
    else if(prikazSvihPoslovnihPartnera){
        prikazSvihPartnera();
    }
    else if(prikazFormeZaDodavanjePoslovnogPartnera){
        $("#nazivInputPoslovnogPartnera").val("");
        $("#adresaInputPoslovnogPartnera").val("");
        $("#telefonInputPoslovnogPartnera").val("");
        $("#emailInputPoslovnogPartnera").val("");
        $("#pibInputPoslovnogPartnera").val("");
        $("#mibInputPoslovnogPartnera").val("");
        $('#btnDodajMagacin').show();
        $('#izmeniMagacin').hide();
        dajPreduzeca("selectPreduzeca");
        dodavanjePoslovnogPartnera.show();
    }else if(dodavanjeJediniceMere){
        $('#nazivJediniceMere').val("");
        $('#btnDodajPoslovnogPartnera').show();
        $('#izmeniPoslovnogPartnera').hide();
    	dodajJedinicuMere.show();
    }else if(prikaziJediniceMere){       
    	prikazSvihJedinicaMere();
    }else if(prikazPromMagaKartPrikazi){
        console.log('evo me sad u else if-u kad je prikazPromMagaKartPrikazi = true');
        // prikazPromMagaKart.show(); 
        // prikazPromMagaKartice.show();   
    	prikazPromMagacinskeKarticeTables();
    }else if(magacinskeKarticeTablesPrikazi){ 
        magacinskeKarticeTables.show();      
    	// magacinskeKarticeTablesP();
    }
}