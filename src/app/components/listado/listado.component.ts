import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NumberLiteralType, OuterExpressionKinds } from 'typescript';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  @Input() colleccionElementos: any[];
  @Output() deleteEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() modifyEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() viewEmitter: EventEmitter<any> = new EventEmitter<any>();
  public viewMode: number = 1;
  constructor() {}

  ngOnInit(): void {}

  emitDelete(elemento) {
    this.deleteEmitter.emit(elemento);
  }

  emitModify(elemento) {
    this.modifyEmitter.emit(elemento);
  }
  emitView(elemento) {
    this.viewEmitter.emit(elemento);
  }

  handleCambiarVista() {
    this.viewMode = this.viewMode == 1 ? 0 : 1;
    console.log(this.viewMode);
  }
}
