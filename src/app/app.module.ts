import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { LogrosComponent } from './componentes/logros/logros.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { LoginComponent } from './componentes/login/login.component';
import { HysskillsComponent } from './componentes/hysskills/hysskills.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercadeComponent,
    AptitudesComponent,
    ExperienciasComponent,
    EducacionComponent,
    LogrosComponent,
    RedesComponent,
    BannerComponent,
    LoginComponent,
    HysskillsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
