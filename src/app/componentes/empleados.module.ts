import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmpleadosComponent } from './create-empleados/create-empleados.component';
import { ListEmpleadosComponent } from './list-empleados/list-empleados.component';
import { RoutingModule } from '../routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [CreateEmpleadosComponent,ListEmpleadosComponent ],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule,


  ],
  exports:[
    CreateEmpleadosComponent,
    ListEmpleadosComponent,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class EmpleadosModule { }
