import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

import { ChartOptions, ChartType, ChartData, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit{

  constructor (private courseService : CourseService,
    private router : Router){}

    Courses : any;

  


    
    


    

    
    
   

    statistics: any;
 
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartData: ChartData<'bar'> = {
      labels: [], // Les labels des axes, par exemple ['Jan', 'Feb', 'Mar']
      datasets: [
        { data: [], label: 'Dataset Label' } // Les données du graphique
      ]
    };

    public categories = ['ZOMBA', 'SALSA', 'Ballet', 'HIPHOP', 'TANGO']; // Les options de catégorie


    

  ngOnInit(): void {

  this.loadStatistics();
  
  this.AllCourses();
  this. changerEtat(this.Courses.courseID);
  }

    public course : Course= {
      courseID: 0,
      courseName: "",
      description: "",
      category: "",
      durationInHours: 0,
      requiredSkillLevel: "",
      videoUrl: "" 
     
    }

       
    AllCourses(){

      this.courseService.getAllCourses().subscribe(
        (data) =>{
          this.Courses=data;
          console.log(this.Courses)
        },(err) =>{
          console.log("ERROR WHILE FETCHING COMPETITION LIST ");
        }
      )
    }
    changerEtat(courseID: any): void {
      if (courseID !== undefined) { 
        this.courseService.changerEtat(courseID).subscribe({
          next: () => {
            alert('Acceptation annulation avec susses ');
            window.location.reload(); // Actualise la page
            this.router.navigate(['/admin/add-course']);


          },
          error: (erreur) => {
            console.error('Erreur lors de la suppression du cours', erreur);
          }
        });
      } else {
        console.error('courseID est undefined');
      }

      this.router.navigate(['/admin/add-course']);
    }





    refus(courseID: any): void {
      if (courseID !== undefined) { 
        this.courseService.refus(courseID).subscribe({
          next: () => {
            alert('Acceptation annulation avec susses ');
         
          


          },
          error: (erreur) => {
            console.error('Erreur lors de la suppression du cours', erreur);
          }
          
        }
      );
     
      } else {
        console.error('courseID est undefined');
      }

      this.router.navigate(['/admin/add-course']);
    }
    
    onFileSelected(event: any) {
      const file = event.target.files[0];
      if (file) {
        // Ici, vous feriez l'upload du fichier et obtiendriez l'URL de la vidéo
        // Pour l'exemple, nous allons juste simuler l'obtention d'une URL
        this.course.videoUrl = "C:\Users\hmach\Videos\WhatsApp Video.mp4";
      }



    }


public barChartOptions: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true, // Mettez cela à false si vous ne voulez pas afficher la légende
    },
  },
  scales: {
    y: { // Utilisez 'yAxes' au lieu de 'y' si vous utilisez une version de Chart.js antérieure à la 3
      beginAtZero: true,
      ticks: {
        stepSize: 1,
        callback: function(value) {
          // Cette fonction détermine ce qui est affiché sur l'axe des ordonnées.
          // Convertir la valeur en nombre et la retourner en tant que chaîne de caractères assure l'affichage de nombres entiers.
          return Number(value).toString();
        }
      }
    }
  }
};


    loadStatistics(): void {
      this.courseService.getCourseStatisticsByCategory().subscribe(data => {
        this.barChartData.labels = Object.keys(data);
        this.barChartData.datasets[0].data = Object.values(data);
      //  this.pieChartData.datasets[0].backgroundColor = ['red', 'blue', 'green', 'yellow']; // Adaptez selon le nombre de catégories
      }, error => {
        console.error('Erreur lors du chargement des statistiques :', error);
      });
    }
    




    addCourse(){
      this.courseService.addCourse(this.course).subscribe(
        (Response:any) =>{
          console.log(this.course);
          alert("course added")
        },
        (error: HttpErrorResponse) => {
          console.log(error.message)
        }
        
      )
    }
}
