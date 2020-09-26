import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ElementosService } from '../../services/elementos.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
})
export class ModificarComponent implements OnInit {
  @Input() inputElementToModify: any;
  @Output() outputModifiedElement: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  public name: string;
  public manufacturer: string;
  public photoUrl: string;

  constructor(private elementService: ElementosService) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.manufacturer = this.inputElementToModify?.data.manufacturer;
    this.name = this.inputElementToModify?.data.name;
    this.photoUrl = this.inputElementToModify?.data.photo;
  }

  modifyElement(element): void {
    try {
      this.elementService.modifyElement({
        id: element.id,
        data: {
          name: this.name,
          manufacturer: this.manufacturer,
          photo: this.photoUrl,
        },
      });
      this.outputModifiedElement.emit(true);
      this.inputElementToModify = undefined;
    } catch (error) {
      console.log(
        error.message || 'Error al escribir las modificaciones en la base.'
      );
    }
    //   id: elementId,
    //   data: {
    //     name: this.name,
    //     manufacturer: this.manufacturer,
    //     photo: this.photoUrl,
    //   },
    // });
  }
}
