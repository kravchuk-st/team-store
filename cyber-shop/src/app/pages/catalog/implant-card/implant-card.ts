import { Component, input, output } from '@angular/core';
import { ImplantDto } from '../../../core/models/implant.model';

@Component({
  selector: 'app-implant-card',
  host: { class: 'block h-full' },
  templateUrl: './implant-card.html',
})
export class ImplantCard {
  readonly implant = input.required<ImplantDto>();
  readonly inCart = input(false);

  readonly add = output<ImplantDto>();

  onAdd(): void {
    if (this.inCart()) {
      return;
    }
    this.add.emit(this.implant());
  }
}
