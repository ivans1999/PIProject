package ftn.magacinsko.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ftn.magacinsko.entityDTO.PreduzeceDTO;
import ftn.magacinsko.model.Preduzece;
import ftn.magacinsko.repository.PreduzeceRepository;
import ftn.magacinsko.serviceInterface.PreduzeceServiceInterface;

@Service
@Transactional(rollbackFor=Exception.class)
public class PreduzeceService implements PreduzeceServiceInterface {

	@Autowired
	PreduzeceRepository preduzeceRepository;
	
	@Override
	public List<PreduzeceDTO> findAll() {
		List<Preduzece> preduzeca = preduzeceRepository.findAll();
		
		List<PreduzeceDTO> preduzeceDTOs = new ArrayList<PreduzeceDTO>();
		for(Preduzece p: preduzeca) {
			preduzeceDTOs.add(new PreduzeceDTO(p));
		}
		return preduzeceDTOs;
	}

	@Override
	public PreduzeceDTO findById(Integer preduzeceId) throws Exception {
		Preduzece preduzece = preduzeceRepository.findOneByIdPreduzeca(preduzeceId);
		
		if(preduzece == null) {
			throw new Exception("Ne postoji preduzeće!");
		}
		return new PreduzeceDTO(preduzece);
	}

	@Override
	public PreduzeceDTO save(PreduzeceDTO preduzeceDTO) {
		Preduzece preduzece = new Preduzece();
		preduzece.setNazivPreduzeca(preduzeceDTO.getNaziv());
		preduzece.setAdresa(preduzeceDTO.getAdresa());
		preduzece.setTelefon(preduzeceDTO.getTelefon());
		preduzece.setPIB(preduzeceDTO.getpIB());
		preduzece.setMIB(preduzeceDTO.getmIB());
		
		preduzece = preduzeceRepository.save(preduzece);
		return new PreduzeceDTO(preduzece);
	}

	@Override
	public void remove(Integer id) {
		preduzeceRepository.deleteById(id);
	}

	@Override
	public Preduzece findOne(Integer preduzeceId) {
		return preduzeceRepository.findOneByIdPreduzeca(preduzeceId);
	}

	@Override
	public PreduzeceDTO update(Integer id,PreduzeceDTO preduzeceDTO) throws Exception{
		Preduzece preduzece = preduzeceRepository.findOneByIdPreduzeca(id);
		System.out.println("\n\tPoziva se funkcija POST");
		if(preduzece == null) {
			throw new Exception("Ne postoji preduzeće!");
		}
		preduzece.setNazivPreduzeca(preduzeceDTO.getNaziv());
		preduzece.setAdresa(preduzeceDTO.getAdresa());
		preduzece.setTelefon(preduzeceDTO.getTelefon());
		preduzece.setPIB(preduzeceDTO.getpIB());
		preduzece.setMIB(preduzeceDTO.getmIB());
		preduzece = preduzeceRepository.save(preduzece);
		return new PreduzeceDTO(preduzece);
	}

}
