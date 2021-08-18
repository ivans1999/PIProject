package ftn.magacinsko.serviceInterface;

import java.util.List;

import ftn.magacinsko.entityDTO.RobaIliUslugaDTO;

public interface RobaIliUslugaServiceInterface {

	public List<RobaIliUslugaDTO> findAll();
	
	public List<RobaIliUslugaDTO> findByMagKartica(Integer id);
	
	public RobaIliUslugaDTO save(RobaIliUslugaDTO robaIliUslugaDTO);
	
	public RobaIliUslugaDTO findOneBySifra(Integer id);
	
	public RobaIliUslugaDTO getOne(Integer id);
	
	public void delete(Integer i);
	
	public RobaIliUslugaDTO update(Integer id, RobaIliUslugaDTO dto);
}

