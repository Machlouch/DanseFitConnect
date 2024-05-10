package devnatic.danceodyssey.Services;

import devnatic.danceodyssey.DAO.Entities.Annulation;
import devnatic.danceodyssey.DAO.Entities.DanceCourses;
import devnatic.danceodyssey.Repository.AnnulationRepository;
import devnatic.danceodyssey.Repository.DanceCoursesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

public interface IAnnulationService {

    ResponseEntity<Annulation> createAnnulation(Annulation annulation, int courseID);

    List<Annulation> getAllAnnulations();


    }
