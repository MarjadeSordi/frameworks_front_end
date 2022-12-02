import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MostraMeusTreinosComponent } from './mostra-meus-treinos/mostra-meus-treinos.component';
import { HomePageComponent } from './home-page/home-page.component';

const rotas: Routes = [
  {
    path: 'tabela', component: MostraMeusTreinosComponent
  },
  {
    path: 'formulario', component: FormProdutosComponent
  },
  { path: '',  component: HomePageComponent },
  {
    path: 'editar/:id', component: FormProdutosComponent
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
