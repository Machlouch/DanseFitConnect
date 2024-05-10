package devnatic.danceodyssey.DAO.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import devnatic.danceodyssey.DAO.ENUM.Category;
import devnatic.danceodyssey.DAO.ENUM.Coech;
import devnatic.danceodyssey.DAO.ENUM.Groups;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Collection;
import java.util.List;
import java.util.Set;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DanceCourses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int courseID;
    String courseName;
    String description;
    @Enumerated(EnumType.STRING)
    Category category;

    @Enumerated(EnumType.STRING)
    Groups groups;

    String coach;



    int durationInHours;
    String requiredSkillLevel;
    String dateCourse;
    String videoUrl;

    @ManyToMany(mappedBy = "dancecourses", cascade = CascadeType.ALL)
    private Set<Dancer> dancers;
    @OneToMany(mappedBy = "danceCourse", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Annulation> annulations;

}