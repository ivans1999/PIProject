package ftn.magacinsko.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ftn.magacinsko.entityDTO.JedinicaMereDTO;
import ftn.magacinsko.serviceInterface.JedinicaMereServiceInterface;

@RestController
@RequestMapping(value = "api/jedinica-mere")
public class JedinicaMereController {

	@Autowired
	private JedinicaMereServiceInterface jedinicaMereServiceInterface;
	
	@GetMapping
	public ResponseEntity<List<JedinicaMereDTO>> getJediniceMere(){
		return ResponseEntity.ok().body(jedinicaMereServiceInterface.findAll());
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<JedinicaMereDTO> getJedinicuMere(@PathVariable("id") Integer id){

		return ResponseEntity.ok().body(jedinicaMereServiceInterface.findOneById(id));
	}
	
	@PostMapping
	public ResponseEntity<JedinicaMereDTO> addMagacin(@RequestBody JedinicaMereDTO jedinicaMereDTO){

		return ResponseEntity.ok().body(jedinicaMereServiceInterface.save(jedinicaMereDTO));
	}
	
	@PutMapping(value = "/{id}", consumes = "application/json")
	public ResponseEntity<Void> updateJedMere(@RequestBody JedinicaMereDTO jedinicaMereDTO, @PathVariable("id") Integer id) throws ParseException{
		try {
			jedinicaMereServiceInterface.update(id,jedinicaMereDTO);
			return  ResponseEntity.noContent().build();
		} catch (Exception e) {
			return ResponseEntity.notFound().build();
		}
//		return new ResponseEntity<JedinicaMereDTO>(new JedinicaMereDTO(jedinicaMere), HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteJedMere(@PathVariable("id") Integer id){
		jedinicaMereServiceInterface.remove(id);
		return  ResponseEntity.noContent().build();
	}
}

