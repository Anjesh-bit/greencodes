import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreenCodesHomeComponent } from './home/green-codes-home/green-codes-home.component';
import { SliderComponent } from './slider/slider.component';
import { FiltersPipe } from './filters.pipe';

import { CommonModalComponent } from './common-modal/common-modal.component';
import { CommonModalModule } from './common-modal/common-modal.module';
import { ContentPipesPipe } from './content-pipes.pipe';
import { ForImageCarousalPipe } from './for-image-carousal.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    GreenCodesHomeComponent,
    SliderComponent,
    FiltersPipe,
    CommonModalComponent,
    ContentPipesPipe,
    ForImageCarousalPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,

    CommonModalModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
