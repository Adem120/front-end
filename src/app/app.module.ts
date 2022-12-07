import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { MachineComponent } from './machine/machine.component';
import { FormsModule } from '@angular/forms';
import { UpdateMachineComponent } from './update-machine/update-machine.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UtilisationComponent } from './utilisation/utilisation.component';
import { AddUtilusationComponent } from './add-utilusation/add-utilusation.component';
import { UpdateUtilusationComponent } from './update-utilusation/update-utilusation.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddMachineComponent,
    MachineComponent,
    UpdateMachineComponent,
    UtilisationComponent,
    AddUtilusationComponent,
    UpdateUtilusationComponent,
    RechercheParCategorieComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParNomComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
useClass : TokenInterceptor,
multi : true} 
 ],

  bootstrap: [AppComponent]
})
export class AppModule { }
