package ftn.magacinsko.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import ftn.magacinsko.entityDTO.PrometniDokumentDTO;
import ftn.magacinsko.serviceInterface.PrometniDokumentServiceInterface;

@RestController
@RequestMapping(value = "api/prometni-dokument")
public class PrometniDokumentController {

	@Autowired
	private PrometniDokumentServiceInterface prometniDokumentServiceInterface;
	
	@Autowired
	private PrometniDokumentServiceInterface dokumentService;
	
	@PostMapping
	public ResponseEntity<PrometniDokumentDTO> addPrometniDokument(@RequestBody PrometniDokumentDTO dto){
		PrometniDokumentDTO createdDTO;
		try {
			createdDTO = dokumentService.save(dto);
			return new ResponseEntity<PrometniDokumentDTO>(createdDTO, HttpStatus.OK);
		} catch (Exception e) {
			throw new ResponseStatusException(
			          HttpStatus.NOT_FOUND, e.getMessage(), e);
		}
	}
	
	@GetMapping
	public ResponseEntity<String> getFormatBroj(){
		
		return new ResponseEntity<String>(prometniDokumentServiceInterface.findByMaxid(), HttpStatus.OK);
	}
	
	@GetMapping(value = "/report/{redniBroj}")
	public ResponseEntity<PrometniDokumentDTO> getReport(@PathVariable("redniBroj") String redniBroj){
		return dokumentService.report(redniBroj);
	}
}

