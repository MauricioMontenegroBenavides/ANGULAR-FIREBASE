import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ListEmpleadosComponent } from './componentes/list-empleados/list-empleados.component';
import { CreateEmpleadosComponent } from './componentes/create-empleados/create-empleados.component';


const rutas:Routes=[
  {path:'',redirectTo:'lista',pathMatch:'full'},
  {path:'lista',component:ListEmpleadosComponent},
  {path:'create',component:CreateEmpleadosComponent},
  {path:'editar/:amor',component:CreateEmpleadosComponent},
  {path:'**',redirectTo:'lista',pathMatch:'full'}

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
