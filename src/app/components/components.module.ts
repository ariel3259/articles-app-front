import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    TableComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    NavBarComponent
  ]
})
export class ComponentsModule { }
