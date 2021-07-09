import { transition, trigger, style, animate } from '@angular/animations';
import {
  Component,
  OnChanges,
  OnInit,
  Input,
  HostListener,
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],

  animations: [
    trigger('SliderAnimation', [
      transition('void=>*', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  Allitems: any = [];
  Allimages: any;
  currentRoute: any;
  Images: any;
  FilterBy!: string;
  currentIndex: number = 0;
  FilterLength!: any;
  FilterAllLength!: any;
  CounterValues!: string;
  time = 5;
  interval!: Subscription;
  constructor(
    private Service: ServicesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.Onchange();
    this.Get();
    this.InitInterval();
  }

  InitInterval() {
    if (this.interval) {
      this.interval.unsubscribe();
    }
    this.interval = this.Service.initializeInterval(this.time * 10).subscribe(
      (res) => {
        this.CounterValues = res.CounterValues + '%';
        if (res.CounterValues === 100) {
          this.next();
        }
      }
    );
  }

  Onchange() {
    this.Allimages = this.Service.getAllimages();
    this.Allitems = this.Allimages;
    this.FilterBy = this.Service.getterName();
  }
  Get() {
    this.FilterAllLength = this.Service.getterName();
    this.FilterLength = this.Allitems.filter((items: any) => {
      return items.imageCatagories === this.FilterBy;
    });
    this.FilterAllLength = this.FilterLength.length;
  }

  next() {
    if (this.currentIndex < this.FilterAllLength - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    
    this.InitInterval();
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.FilterAllLength - 1;
    }
    this.InitInterval();
  }
  @HostListener('mouseenter')
  onmoseEnter() {
    this.Service.pauseCounter();
  }
  @HostListener('mouseleave')
  onmoseLEAVE() {
    this.Service.resume();
  }

}
