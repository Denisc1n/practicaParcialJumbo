import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  @Input() inputElementToView: any;
  public name: string;
  public manufacturer: string;
  public photoUrl: string;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.name = this.inputElementToView?.data.name;
    this.manufacturer = this.inputElementToView?.data.manufacturer;
    this.photoUrl = this.inputElementToView?.data.photo;
  }
  cleanFields(): void {
    this.name = '';
    this.manufacturer = '';
    this.photoUrl = '';
  }
}
