package ftn.magacinsko.model;

import static javax.persistence.CascadeType.ALL;
import static javax.persistence.FetchType.LAZY;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "jedinica_mere")
public class JedinicaMere {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_jedinice_mere", nullable = false, unique = true)
	public Integer id;
	
	@Column(name = "naziv", nullable = false)
	public String naziv;
	
	@Column(name = "skraceni_naziv", nullable = false)
	public String skraceniNaziv;
	
	@OneToMany(cascade={ALL}, fetch=LAZY, mappedBy="jedinicaMere")
	private List<RobaIliUsluga> robeIliUsluge = new ArrayList<RobaIliUsluga>();
	
	public JedinicaMere() {
		super();
	}
	
	public JedinicaMere(Integer id, String naziv, String skraceniNaziv, List<RobaIliUsluga> robeIliUsluge) {
		super();
		this.id = id;
		this.naziv = naziv;
		this.skraceniNaziv = skraceniNaziv;
		this.robeIliUsluge = robeIliUsluge;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public String getSkraceniNaziv() {
		return skraceniNaziv;
	}

	public void setSkraceniNaziv(String skraceniNaziv) {
		this.skraceniNaziv = skraceniNaziv;
	}

	public List<RobaIliUsluga> getRobeIliUsluge() {
		return robeIliUsluge;
	}

	public void setRobeIliUsluge(List<RobaIliUsluga> robeIliUsluge) {
		this.robeIliUsluge = robeIliUsluge;
	}
}
