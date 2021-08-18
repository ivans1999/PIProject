package ftn.magacinsko.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ftn.magacinsko.model.MagacinskaKartica;

public interface MagacinskaKarticaRepository extends JpaRepository<MagacinskaKartica, Integer>{

	MagacinskaKartica findOneById(Integer id);
	MagacinskaKartica findOneByRobaIliUsluga_sifraAndPoslovnaGodina_brojGodineAndMagacin_sifraMagacina(Integer sifraRobeUsluge,Integer brojGodine, Integer sifraMagacina);
	MagacinskaKartica findOneByMagacin_sifraMagacinaAndRobaIliUsluga_sifra(Integer sifraMagacina,Integer sifraRobeIliUsluge);
	
	List<MagacinskaKartica> findByRobaIliUsluga_sifraAndPoslovnaGodina_brojGodineAndMagacin_sifraMagacina(Integer sifraRobeUsluge,Integer brojGodine, Integer sifraMagacina);
	List<MagacinskaKartica> findByMagacin_sifraMagacinaAndRobaIliUsluga_sifra(Integer sifraMagacina,Integer sifraRobeIliUsluge);
	List<MagacinskaKartica> findByMagacin_sifraMagacinaAndPoslovnaGodina_brojGodine(Integer sifraMagacina,Integer brojGodine);
	List<MagacinskaKartica> findByPoslovnaGodina_brojGodineAndRobaIliUsluga_sifra(Integer brojGodine,Integer sifraRobeIliUsluge);
	List<MagacinskaKartica> findByMagacin_sifraMagacina(Integer sifraMagacina);
	List<MagacinskaKartica> findByPoslovnaGodina_brojGodine(Integer brojGodine);
	List<MagacinskaKartica> findByRobaIliUsluga_sifra(Integer sifraRobeIliUsluge);
}
