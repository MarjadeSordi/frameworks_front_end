import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MostraMeusTreinosComponent } from './mostra-meus-treinos/mostra-meus-treinos.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormParaTreinoComponent } from './form-para-treino/form-para-treino.component';

const rotas: Routes = [
  {
    path: 'tabela', component: MostraMeusTreinosComponent
  },
  {
    path: 'formulario', component: FormParaTreinoComponent
  },
  { path: '',  component: HomePageComponent },
  {
    path: 'editar/:id', component: FormParaTreinoComponent
  },
  { path: '**', component: PageNotFoundComponent }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
