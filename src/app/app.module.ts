import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ElementosService } from './services/elementos.service';
import { ListadoComponent } from './components/listado/listado.component';
import { BorrarComponent } from './components/borrar/borrar.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListadoComponent,
    BorrarComponent,
    DetalleComponent,
    ModificarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ElementosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
