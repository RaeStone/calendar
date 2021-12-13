import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayComponent } from './holiday/holiday.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 {path: "holidays", component: HolidayComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
