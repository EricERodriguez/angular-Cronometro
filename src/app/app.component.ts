import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name = 'Ejercicio con directiva Output';

  mensaje = '';

  actualizar(t) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}
/**
 * Mostrar en el componente 'CronometroComponent' un
 * cronómetro que se actualice cada un segundo, cada
 * vez que su valor es múltiplo de 10 informa al
 * componente padre de dicha situación informando el
 * segundo actual. Para crear el contador pueden
 * usar un setInterval.
 */
