import { Component, OnInit, Output } from '@angular/core';

import { ElementosService } from '../../services/elementos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  public elementos = [];
  public elementToDelete: any;
  public elementToModify: any;
  public elementToView: any;
  public deletedElement: boolean;

  constructor(private elementsService: ElementosService) {}

  ngOnInit(): void {
    this.getUpdatedCollection();
    //then((elements) => {
    //   elements.forEach((element: any) => {
    //     console.log(element.data());
    //     this.elementos.push({
    //       id: element.id,
    //       data: element.data(),
    //     });
    //   });
    // });
  }
  handleSelectElementToDelete(receivedElement) {
    this.elementToDelete = receivedElement;
  }
  handleSelectElementToModify(receivedElement) {
    this.elementToModify = receivedElement;
  }
  handleSelectElementToView(receivedElement) {
    this.elementToView = receivedElement;
  }

  getUpdatedCollection() {
    this.elementsService
      .getElements()
      .get()
      .then((snapshot) => {
        this.elementos = [];
        snapshot.docs.map((element: any) => {
          this.elementos.push({
            id: element.id,
            data: element.data(),
          });
        });
      });
  }
}
