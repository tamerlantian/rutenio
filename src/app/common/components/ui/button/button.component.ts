import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() texto = '';
  @Input() textoCargando = '';
  @Input() type: 'submit' | 'button' = 'submit';
  @Input() clases = 'btn btn-primary';
  @Input() estaCargando = false;
  @Input() estaDeshabilitado = false;
  @Output() emitirBotonClicked: EventEmitter<void>;

  constructor() {
    this.emitirBotonClicked = new EventEmitter<void>();
  }

  presionarBoton() {
    this.emitirBotonClicked.emit();
  }
}
