import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { ElementosService } from '../../services/elementos.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css'],
})
export class BorrarComponent implements OnInit {
  @Input() inputElementToDelete: any;
  @Output() outputDeletedElement: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  constructor(private elementsService: ElementosService) {}

  ngOnInit(): void {}

  ngOnChange(): void {}

  deleteElement(): void {
    try {
      this.elementsService.deleteElement(this.inputElementToDelete.id);
      this.outputDeletedElement.emit(true);
      this.inputElementToDelete = undefined;
    } catch (error) {
      console.log(error.message || 'Error al Eliminar.');
    }
  }
}
