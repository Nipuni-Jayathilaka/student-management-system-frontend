import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
  imageUrl: string = `url('/assets/img/noimage.jpg')`
  name: string='';
  address: string='';
  contact: string='';

  constructor (private http: HttpClient){

  }

  updatePicture(file?: HTMLInputElement) :void {//to make the parameter optional(add ? this to the parameter at last)
    if (file && file.files) {
      const blob=file.files.item(0);
      this.imageUrl=`url('${URL.createObjectURL(blob!)}')`
    }else{
      this.imageUrl=`url('/assets/img/noimage.jpg')`;
    }
  }

  saveStudent(frmStudent:NgForm, file: File | null) : void{
      if (!frmStudent.invalid){
        const formData= new FormData();
        formData.append('name',this.name)
        formData.append('address',this.address)
        formData.append('contact',this.contact)
        if(file) formData.append('profile-picture',file.name)
        this.http.post('http://localhost:8080/sms/api/students',formData).subscribe({
          next:value => {
            frmStudent.reset();
            this.updatePicture;
          },
          error: err => {
            alert("Failed to save the student, try again");
            console.error(err)
          }
        });
      }
  }
}
