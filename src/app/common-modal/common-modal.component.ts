import { style } from '@angular/animations';
import { CommonModalService } from './../common-modal.service';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  Renderer2,
  ElementRef,
  Input,
} from '@angular/core';

import { ServicesService } from '../services/services.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommonModalComponent implements OnInit {
  @Input() id!: string;
  private element: any;
  FilterByAll!: string;

  AllContent!: any[];
  FilterAllLength: any;
  currentIndex: number = 0;
  ImagesSlider!: any[];
  FilterLength!: any[];
  imagefor!: any[];
  ShowElementWrapper: any;
  constructor(
    private modalService: CommonModalService,
    private el: ElementRef,
    private Service: ServicesService
  ) {
    this.element = el.nativeElement;
    console.log(this.element);
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    document.body.appendChild(this.element);

    this.element.addEventListener('click', (el: any) => {
      if (el.target.className === 'jw-modal') {
        this.close();
      }
    });

    this.modalService.add(this);
   
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    this.ShowElementWrapper.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    this.ShowElementWrapper.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }

  @ViewChild('wrapper') ElementShow!: ElementRef;

  ngAfterViewInit() {
    this.ShowElementWrapper = this.ElementShow.nativeElement;
  }

}
