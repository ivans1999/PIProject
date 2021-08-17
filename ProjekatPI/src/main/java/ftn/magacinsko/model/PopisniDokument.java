package ftn.magacinsko.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import static javax.persistence.CascadeType.ALL;
import static javax.persistence.FetchType.LAZY;


@Entity
@Table(name = "popisni_dokument")
public class PopisniDokument {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "broj_popisa", nullable = false, unique = true)
	private int brojPopisa;
	
	@Column(name = "datum_popisa", nullable = false)
	private Date datumPopisa;
	
	@Column(name = "status", nullable = false)
	private Status status = Status.F; //Prepravljeno da bude enumeracija
	
	@OneToMany(cascade={ALL}, fetch=LAZY, mappedBy="popisniDokument")
	private List<StavkePopisa> stavkePopisa = new ArrayList<StavkePopisa>();

	@ManyToOne
	@JoinColumn(name="poslovna_godina", referencedColumnName="id_godine", nullable=false)
	private PoslovnaGodina poslovnaGodina;
	
	@ManyToOne
	@JoinColumn(name="magacin", referencedColumnName="sifra_magacina", nullable=false)
	private Magacin magacin;
}

