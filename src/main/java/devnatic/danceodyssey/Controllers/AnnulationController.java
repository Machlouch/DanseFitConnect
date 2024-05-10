package devnatic.danceodyssey.Controllers;

import devnatic.danceodyssey.DAO.Entities.Annulation;
import devnatic.danceodyssey.DAO.Entities.DanceCourses;
import devnatic.danceodyssey.Services.AnnulationService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/annulation")
@CrossOrigin(origins = "*")
public class AnnulationController {


    @Autowired
    private AnnulationService annulationService;

    @PostMapping("/add/{courseID}")
    public ResponseEntity<Annulation> createAnnulation(@RequestBody Annulation annulation,@PathVariable int courseID) {
        return annulationService.createAnnulation(annulation, courseID);
    }

    @GetMapping("/getAllA")
    public List<Annulation> getAllAnnulations() {
        return annulationService.getAllAnnulations();
    }






}
