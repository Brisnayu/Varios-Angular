import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-avatar-form',
  templateUrl: './avatar-form.component.html',
  styleUrl: './avatar-form.component.scss'
})
export class AvatarFormComponent {
  profileForm: FormGroup;
  imageUrl: string = 'assets/mini-hera.png';

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      username: [''],
      email: [''],
      bio: ['']
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
