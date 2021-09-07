INSERT INTO PREDUZECE(naziv_preduzeca, adresa, telefon, PIB, MIB) VALUES('Agro promet', 'Ulica Vojvode Stepe 11000 Beograd', '0644224513', 1234, 54321);
INSERT INTO PREDUZECE(naziv_preduzeca, adresa, telefon, PIB, MIB) VALUES('Agro oprema', 'Kneza Mihaila bb 21000 Novi Sad', '065111738', 9876, 56789);


INSERT INTO jedinica_mere(naziv,skraceni_naziv) VALUES ('Metar','m');
INSERT INTO jedinica_mere(naziv,skraceni_naziv) VALUES ('Kilogram','kg');
INSERT INTO jedinica_mere(naziv,skraceni_naziv) VALUES ('Metar kubni','m3');
INSERT INTO jedinica_mere(naziv,skraceni_naziv) VALUES ('Metar kvadratni','m2');
INSERT INTO jedinica_mere(naziv,skraceni_naziv) VALUES ('Litar','l');
INSERT INTO jedinica_mere(naziv,skraceni_naziv) VALUES ('Komad','kom');

INSERT INTO roba_usluga(naziv,jedinica_mere,cena) VALUES ('Kifla',6,50);
INSERT INTO roba_usluga(naziv,jedinica_mere,cena) VALUES ('Jogurt',5,120);
INSERT INTO roba_usluga(naziv,jedinica_mere,cena) VALUES ('Pivo',5,120);
INSERT INTO roba_usluga(naziv,jedinica_mere,cena) VALUES ('Drvo',6,500);
INSERT INTO roba_usluga(naziv,jedinica_mere,cena) VALUES ('Laminat',4,300);
INSERT INTO roba_usluga(naziv,jedinica_mere,cena) VALUES ('Pesak',6,1500);
INSERT INTO roba_usluga(naziv,jedinica_mere,cena) VALUES ('Koza',6,1000);
INSERT INTO roba_usluga(naziv,jedinica_mere,cena) VALUES ('Ugalj',3,2500);

INSERT INTO magacin(naziv_magacina, preduzece) VALUES ('Magacin 1', 1);
INSERT INTO magacin(naziv_magacina, preduzece) VALUES ('Magacin 2', 2);
INSERT INTO magacin(naziv_magacina, preduzece) VALUES ('Magacin 3', 1);

INSERT INTO poslovna_godina(broj_godine, zakljucena, preduzece) VALUES (20222, 1, 1);
INSERT INTO poslovna_godina(broj_godine, zakljucena, preduzece) VALUES (20233, 0, 1);

INSERT INTO magacinska_kartica(pocetno_stanje_kolicinski, promet_ulaza_kolicinski, promet_izlaza_kolicinski, ukupna_kolicina, pocetno_stanje_vrednosno, promet_ulaza_vrednosno, promet_izlaza_vrednosno, ukupna_vrednost, cena, magacin, poslovna_godina, roba_ili_usluga)
VALUE (200, 70, 30, 240,500000, 171000, 78000, 593000, 2471, 1, 2, 8);
INSERT INTO magacinska_kartica(pocetno_stanje_kolicinski, promet_ulaza_kolicinski, promet_izlaza_kolicinski, ukupna_kolicina, pocetno_stanje_vrednosno, promet_ulaza_vrednosno, promet_izlaza_vrednosno, ukupna_vrednost, cena, magacin, poslovna_godina, roba_ili_usluga)
VALUE (500, 350, 400, 450,375000, 259000, 304000, 330000, 734, 1, 1, 7);
INSERT INTO magacinska_kartica(id, pocetno_stanje_kolicinski, promet_ulaza_kolicinski, promet_izlaza_kolicinski, ukupna_kolicina, pocetno_stanje_vrednosno, promet_ulaza_vrednosno, promet_izlaza_vrednosno, ukupna_vrednost, cena, magacin, poslovna_godina, roba_ili_usluga)
VALUE (3, 1.2, 1.6, 1.8, 1.1,1.1, 1.1, 1.1, 1.1, 1.1, 1, 2, 3);

INSERT INTO magacinska_kartica(cena, pocetno_stanje_kolicinski, pocetno_stanje_vrednosno, promet_izlaza_kolicinski, promet_izlaza_vrednosno, promet_ulaza_kolicinski, promet_ulaza_vrednosno, ukupna_kolicina, ukupna_vrednost, magacin, poslovna_godina, roba_ili_usluga)
VALUES(20, 0, 0, 0, 0, 200, 4000, 200, 4000, 1, 2, 4);


INSERT INTO poslovni_partner(naziv_partnera,adresa_partnera,broj_telefona,email,PIB,MIB,preduzece) VALUES ('NazivPartnera1','Adresa1','123456789','dummy@dummy.com',123456,222333,1);
INSERT INTO poslovni_partner(naziv_partnera,adresa_partnera,broj_telefona,email,PIB,MIB,preduzece) VALUES ('NazivPartnera2','Adresa2','987654321','dummy@dummy.com',654321,333222,2);
INSERT INTO poslovni_partner(naziv_partnera,adresa_partnera,broj_telefona,email,PIB,MIB,preduzece) VALUES ('NazivPartnera3','Adresa3','223456433','dummy@dummy.com',789087,111222,1);

INSERT INTO promet_magacinske_kartice(redni_broj, cena, datum_prometa, dokument, kolicina, smer, vrednost, vrsta_prometa, magacinska_kartica)
VALUES('1-2021', 20, '2021-03-18', 'Primka', 200, 'U', 4000, 'PR', 4);

INSERT INTO prometni_dokument(datum, redni_broj, status, vrsta_dokumenta, sifra_magacina_izlaz, poslovna_godina, poslovni_partner, id_preduzeca, sifra_magacina_ulaz) 
VALUES('2021-03-18', '1-2021', 1, 0, NULL, 2, 1, 1, 1);

INSERT INTO stavka_dokumenta(kolicina,cena,vrednost,prometni_dokument,roba_usluga)
VALUES(20, 200, 4000, 1, 4);
