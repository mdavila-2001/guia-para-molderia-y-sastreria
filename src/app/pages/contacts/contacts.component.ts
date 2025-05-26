import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  contactForm: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Aquí puedes implementar la lógica para enviar el formulario
    console.log('Formulario enviado:', this.contactForm);
    // Reiniciar el formulario
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };
  }
}
