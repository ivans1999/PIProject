package ftn.magacinsko.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ftn.magacinsko.entityDTO.JedinicaMereDTO;
import ftn.magacinsko.model.JedinicaMere;
import ftn.magacinsko.repository.JedinicaMereRepository;
import ftn.magacinsko.serviceInterface.JedinicaMereServiceInterface;

@Service
@Transactional(rollbackFor=Exception.class)
public class JedinicaMereService implements JedinicaMereServiceInterface{

	@Autowired
	JedinicaMereRepository jedinicaMereRepository;
	
	@Override
	public List<JedinicaMereDTO> findAll() {
		List<JedinicaMere> jedinice = jedinicaMereRepository.findAll();
		
		List<JedinicaMereDTO> dtos = new ArrayList<JedinicaMereDTO>();
		for(JedinicaMere j: jedinice) {
			dtos.add(new JedinicaMereDTO(j));
		}
		return dtos;
	}

	@Override
	public JedinicaMereDTO findOneById(Integer id) {
		JedinicaMere jedinicaMere = jedinicaMereRepository.findOneById(id);
		
//		if(jedinicaMere == null) {
////			return new ResponseEntity<JedinicaMereDTO>(HttpStatus.NOT_FOUND);
//		}
		return new JedinicaMereDTO(jedinicaMere);
	}

	@Override
	public JedinicaMereDTO save(JedinicaMereDTO jedinicaMereDTO) {
		JedinicaMere jm = new JedinicaMere();
		jm.setNaziv(jedinicaMereDTO.getNaziv());
		jm.setSkraceniNaziv(jedinicaMereDTO.getSkraceniNaziv());
		
		jm = jedinicaMereRepository.save(jm);
		
		return new JedinicaMereDTO(jm);
	}
	
	@Override
	public void remove(Integer idJediniceMere) {
		
		jedinicaMereRepository.deleteById(idJediniceMere);
	}

	@Override
	public JedinicaMereDTO update(Integer id,JedinicaMereDTO jedinicaMereDTO) {
		
		JedinicaMere jedinicaMere = jedinicaMereRepository.findOneById(id);
		
		jedinicaMere.setNaziv(jedinicaMereDTO.getNaziv());
		jedinicaMere.setSkraceniNaziv(jedinicaMereDTO.getSkraceniNaziv());

		jedinicaMere = jedinicaMereRepository.save(jedinicaMere);
		return new JedinicaMereDTO(jedinicaMere);
	}
}