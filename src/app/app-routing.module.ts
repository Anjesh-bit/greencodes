import { CommonModalComponent } from './common-modal/common-modal.component';
import { SliderComponent } from './slider/slider.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreenCodesHomeComponent } from './home/green-codes-home/green-codes-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'green-codes-home', pathMatch: 'full' },
  { path: 'green-codes-home', component: GreenCodesHomeComponent },
  { path: 'slider', component: SliderComponent },
  {path:'common-modal',component:CommonModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
