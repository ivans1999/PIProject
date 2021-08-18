package ftn.magacinsko.entityDTO;

import java.io.Serializable;

import ftn.magacinsko.model.Magacin;

public class MagacinDTO implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private String naziv;
	private Integer preduzece;
	private String nazivPreduzeca;
	
	public MagacinDTO() {
		super();
	}

	public MagacinDTO(Integer id, String naziv, Integer preduzece, String nazivPreduzeca) {
		super();
		this.id = id;
		this.naziv = naziv;
		this.preduzece = preduzece;
		this.nazivPreduzeca = nazivPreduzeca;
	}
	
	public MagacinDTO(Magacin magacin) {
		this(magacin.getSifraMagacina(), magacin.getNazivMagacina(), magacin.getPreduzece().getIdPreduzeca(), magacin.getPreduzece().getNazivPreduzeca());
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

	public Integer getPreduzece() {
		return preduzece;
	}

	public void setPreduzece(Integer preduzece) {
		this.preduzece = preduzece;
	}

	public String getNazivPreduzeca() {
		return nazivPreduzeca;
	}

	public void setNazivPreduzeca(String nazivPreduzeca) {
		this.nazivPreduzeca = nazivPreduzeca;
	}

}

