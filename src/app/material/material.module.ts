import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';

import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatGridListModule

  ],
  exports:[

    MatToolbarModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
