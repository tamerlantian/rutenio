import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() placeholder = '';
  @Input() maxLenght: number = 0;
  @Input() minLength: number = 0;
  @Input({ required: true }) control = new FormControl();

  public value: string = '';
  public isDisabled: boolean = false;
}