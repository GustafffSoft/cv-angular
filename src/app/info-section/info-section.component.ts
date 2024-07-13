import { Component } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss'],
  standalone: true,
})
export class InfoSectionComponent {

  copyEmail() {
    const email = 'gustafff93s@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      alert('Correo electrónico copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar el correo electrónico: ', err);
    });
  }
}
