package ftn.magacinsko.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ftn.magacinsko.entityDTO.PoslovnaGodinaDTO;
import ftn.magacinsko.model.PoslovnaGodina;
import ftn.magacinsko.model.Preduzece;
import ftn.magacinsko.repository.PoslovnaGodinaRepository;
import ftn.magacinsko.repository.PreduzeceRepository;
import ftn.magacinsko.serviceInterface.PoslovnaGodinaServiceInterface;

@Service
@Transactional(rollbackFor=Exception.class)
public class PoslovnaGodinaService implements PoslovnaGodinaServiceInterface {

	@Autowired
	PoslovnaGodinaRepository poslovnaGodinaRepository;
	
	@Autowired
	PreduzeceRepository predrepos;
	
	@Override
	public List<PoslovnaGodinaDTO> findAll() {
		List<PoslovnaGodina> pg = poslovnaGodinaRepository.findAll();
		
		List<PoslovnaGodinaDTO> pgDTO = new ArrayList<PoslovnaGodinaDTO>();
		for(PoslovnaGodina p: pg) {
			pgDTO.add(new PoslovnaGodinaDTO(p));
		}
		return pgDTO;
	}

	@Override
	public PoslovnaGodinaDTO findOne(Integer id) {
		PoslovnaGodina pg = poslovnaGodinaRepository.findOneByBrojGodine(id);
		PoslovnaGodinaDTO pdto = new PoslovnaGodinaDTO(pg);
		return pdto;
	}

	@Override
	public PoslovnaGodinaDTO save(PoslovnaGodinaDTO poslovnaGodinaDTO) {
		Preduzece p = predrepos.findOneByIdPreduzeca(poslovnaGodinaDTO.getPreduzece());
		PoslovnaGodina po = new PoslovnaGodina();
		po.setBrojGodine(poslovnaGodinaDTO.getBrojGodine());
		po.setZakljucena(poslovnaGodinaDTO.getZakljucena());
		po.setPreduzece(p);
		
		po = poslovnaGodinaRepository.save(po);
		
		PoslovnaGodinaDTO dto = new PoslovnaGodinaDTO(po);
		return dto;
	}

	@Override
	public void remove(Integer id) {
		poslovnaGodinaRepository.deleteById(id);

	}

	@Override
	public List<PoslovnaGodinaDTO> findByPreduzece_id(Integer id) {
		List<PoslovnaGodina> pgs = poslovnaGodinaRepository.findByPreduzece_idPreduzeca(id);
		
		List<PoslovnaGodinaDTO> pgdtos = new ArrayList<PoslovnaGodinaDTO>();
		for(PoslovnaGodina p: pgs) {
			PoslovnaGodinaDTO pdto = new PoslovnaGodinaDTO(p);
			pgdtos.add(pdto);
		}
		return pgdtos;
	}

	@Override
	public PoslovnaGodinaDTO findByBrojGodine(Integer brojBodine) {
		PoslovnaGodina pg = poslovnaGodinaRepository.findOneByBrojGodine(brojBodine);
		return new PoslovnaGodinaDTO(pg);
	}

	@Override
	public PoslovnaGodinaDTO findById(Integer id) {
		PoslovnaGodina pg = poslovnaGodinaRepository.findOneByIdGodine(id);
		
		return new PoslovnaGodinaDTO(pg);
	}

	@Override
	public void update(PoslovnaGodinaDTO pgdto) {
		PoslovnaGodina poslovnaGodina = poslovnaGodinaRepository.findOneByBrojGodine(pgdto.getBrojGodine());
		Preduzece preduzece = predrepos.findOneByIdPreduzeca(pgdto.getPreduzece());
		
		poslovnaGodina.setBrojGodine(pgdto.getBrojGodine());
		poslovnaGodina.setZakljucena(pgdto.getZakljucena());
		poslovnaGodina.setPreduzece(preduzece);
	}

}

