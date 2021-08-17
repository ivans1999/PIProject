package ftn.magacinsko.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "stavke_popisa")
public class StavkePopisa {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false, unique = true)
	private int id;
	
	@Column(name = "rbr", nullable = false)
	private int rbr;
	
	@Column(name = "popisana_kolicina", nullable = false)
	private double popisanaKolicina;

	@ManyToOne
	@JoinColumn(name="popisni_dokument_id", referencedColumnName="broj_popisa", nullable=false)
	private PopisniDokument popisniDokument;
	
	@ManyToOne
	@JoinColumn(name="roba_usluga_id", referencedColumnName="sifra", nullable=false)
	private RobaIliUsluga robaIliUsluga;
}

