import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  copyEmail() {
    const email = 'gustafff93s@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      alert('Correo electrónico copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar el correo electrónico: ', err);
    });
  }
}
