import { Component } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { AppConstants } from "../../shared/utils/app-constants";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-contact',
  imports:[FormsModule, CommonModule],
  standalone: true,
  templateUrl: './index.component.html',
})
export default class ContactComponent {
  
  serviceId: string = import.meta.env[AppConstants.SERVICE_ID];
  templateId: string = import.meta.env[AppConstants.TEMPLATE_ID];
  publicKey: string = import.meta.env[AppConstants.PUBLIC_KEY];
  isLoading: boolean = false;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;

  message = {
    name:'',
    email: '',
    content: ''
  };


  handleSubmit(form: NgForm) {
    this.isLoading = true;
    emailjs.send(this.serviceId, this.templateId, form.value, this.publicKey).then(
      response => {
        this.isLoading = false;
        this.showSuccessMessage = true;
        form.resetForm();
      }, err => {
        this.isLoading = false;
        this.showErrorMessage = true;
      }
    )
  }
}
