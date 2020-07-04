import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { RouterModule } from '@angular/router';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteVisualizarComponent } from './cliente-visualizar/cliente-visualizar.component';
@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    QuemSomosComponent,
    ProdutosComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClientesComponent,
    ClienteVisualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'contato', component: ContatoComponent},
      {path: 'produtos', component: ProdutosComponent},
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'clientes', component: ClientesComponent},
      {path: 'clientes/:id', component: ClienteVisualizarComponent},
      {path: 'quem-somos', component: QuemSomosComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
