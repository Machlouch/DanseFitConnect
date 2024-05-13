import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DanceOdyssey';
  addCourseForm: FormGroup;
  selectedVideo: File | null = null;

  constructor(private formBuilder: FormBuilder, private courseService: CourseService) {
    this.addCourseForm = this.formBuilder.group({
      // Définir les contrôles de formulaire ici
    });
  }

  onVideoSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.selectedVideo = fileList[0];
    }
  }

  onSubmit() {
    if (this.addCourseForm.valid) {
      const formData = new FormData();
      for (const key in this.addCourseForm.value) {
        formData.append(key, this.addCourseForm.value[key]);
      }
      if (this.selectedVideo) {
        formData.append('video', this.selectedVideo, this.selectedVideo.name);
      }

      this.courseService.uploadCourse(formData).subscribe(
        // Gérer la réponse du service
      );
    }
  }

}
