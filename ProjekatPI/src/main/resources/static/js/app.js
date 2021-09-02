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