import { style, transition } from '@angular/animations';
import { PROJECTS } from './../../models/dataHome';
import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';
import { CommonModalService } from 'src/app/common-modal.service';

import {
  Component,
  HostListener,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import {
  ArrayHome,
  SERVICE,
  Image,
  Classes,
  TEAM,
  InfoForForm,
  Icons,
  Allprojects,
  ForimageClick,
  Formodal,
} from 'src/app/models/dataHome';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormGroupName,
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-green-codes-home',
  templateUrl: './green-codes-home.component.html',
  styleUrls: ['./green-codes-home.component.css'],
})
export class GreenCodesHomeComponent implements AfterViewInit {
  MenuItemss = '../assets/icons/menu.png';
  Formodal = Formodal;
  Backtotop = '../assets/icons/Backtotop.png';
  CloseModel = '../assets/icons/clo.png';
  frontarrow = '../assets/icons/left-arrow.png';
  backarrow = '../assets/icons/right-arrow.png';
  Expand = '../assets/icons/expand.png';
  courses = ArrayHome;
  services = SERVICE;
  projects = PROJECTS;
  Classes = Classes;
  Team = TEAM;
  ContactForm: any;
  InnerContact: any;
  InfoForm = InfoForForm;
  Icons = Icons;
  Submit1: any;
  FormContact: any;
  ForLastName: any;
  ForphoneNumber: any;
  ForTextarea: any;
  Footer: any;
  InnerFooter: any;
  Image = Image;
  AllPROJECTS = Allprojects;
  counter1 = 1;
  counter2 = 5;
  doc: any;
  te: any;
  ScrolHeight: any;
  NavList: any;
  Homeheight: any;
  Toplink: any;
  List: any;
  modalclose: any;
  FilterByAll!: string;
  Filter: any;
  AllContent!: any[];
  FilterAllLength: any;
  currentIndex: number = 0;
  ImagesSlider!: any[];
  FilterLength!: any[];
  imagefor!: any[];
  //for projects :
  showpicture = {
    All: false,
    ci: false,
    drupal: false,
    ecomm: false,
    magneto: false,
    wordpress: false,
    Condition: true,
  };
  //scroll
  id: any;
  element: any;
  position: any;
  //for project class

  FilterAll!: string;
  //for the draggable
  isDown = false;
  startX: any;
  scrollLeft: any;
  MouseDown: any;
  ForModal: any;
  CredentialsofGreenforms = new FormGroup({
    FirstName: new FormControl(),
    LastName: new FormControl(),
    email: new FormControl(),
    number: new FormControl(),
    password: new FormControl(),
    textarea: new FormControl(),
  });
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => {
      observer.next(new Date().getFullYear().toString());
    }, 1000);
  });
  constructor(
    private FormBuild: FormBuilder,
    private router: Router,
    private Service: ServicesService,
    private renderer: Renderer2,
    private CommonModal: CommonModalService
  ) {}

  ngOnInit() {
    this.FormClasses();
    this.CreatBuildForm();
  }

  @ViewChild('innerslide11') ForSlides!: ElementRef;
  @ViewChild('list') listmodal!: ElementRef;

  showImage() {
    this.List.style.visibility = 'visible';
  }
  FormClasses() {
    this.ContactForm = this.Classes[0].ContactForm;
    this.InnerContact = this.Classes[0].InnerContact;
    this.Submit1 = this.Classes[0].Submit;
    this.FormContact = this.Classes[0].ForForm;
    this.ForLastName = this.Classes[0].lastName;
    this.ForphoneNumber = this.Classes[0].phoneNumber;
    this.ForTextarea = this.Classes[0].textarea;
    this.Footer = this.Classes[0].Footer;
    this.InnerFooter = this.Classes[0].FooterInner;
  }

  CreatBuildForm() {
    this.FormBuild.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      email: ['', Validators.email],
      number: ['', Validators.required, Validators.minLength(10)],
      textarea: ['', Validators.required],
    });
  }

  @ViewChild('navbar') nameElement!: ElementRef;
  @ViewChild('HomeList') nameElementref!: ElementRef;
  @ViewChild('teams') teamofshow!: ElementRef;
  @ViewChild('innerslideForModal') Modal!: ElementRef;
  @ViewChild('close') Modalclose!: ElementRef;
  ngAfterViewInit() {
    this.NavList = this.nameElement.nativeElement;

    this.Toplink = this.nameElementref.nativeElement;

    this.te = this.teamofshow.nativeElement;
    this.MouseDown = this.ForSlides.nativeElement;
    this.ForModal = this.Modal.nativeElement;
    this.List = this.listmodal.nativeElement;
    this.modalclose = this.Modalclose.nativeElement;

    this.MouseDownn();
    this.MouseEnter();
    this.MouseUp();
    this.MouseMove();

    //for the modal

    this.MouseDownnmodal();
    this.MouseEntermodal();
    this.MouseUpmodal();
    this.MouseMovemodal();

    this.GetAllContent();
    this.getAllimages();
  }
  MouseDownn() {
    this.renderer.listen(this.Modal.nativeElement, 'mousedown', (event) => {
      this.isDown = true;
      this.startX = event.pageX - this.ForModal.offsetLeft;
      this.scrollLeft = this.ForModal.scrollLeft;
    });
  }

  MouseEnter() {
    this.renderer.listen(this.Modal.nativeElement, 'mouseenter', (event) => {
      this.isDown = false;
      this.Modal.nativeElement.style.cursor = 'grab';
    });
  }
  MouseUp() {
    this.renderer.listen(this.Modal.nativeElement, 'mouseup', (event) => {
      this.isDown = false;
    });
  }

  MouseMove() {
    this.renderer.listen(this.Modal.nativeElement, 'mousemove', (event) => {
      if (!this.isDown) return;
      event.preventDefault();
      const mouse = event.pageX - this.ForModal.offsetLeft;
      const relative = mouse - this.startX;

      this.ForModal.scrollLeft = this.scrollLeft - relative;
    });
  }
  //for the modal

  MouseDownnmodal() {
    this.renderer.listen(this.ForSlides.nativeElement, 'mousedown', (event) => {
      this.isDown = true;
      this.startX = event.pageX - this.MouseDown.offsetLeft;
      this.scrollLeft = this.MouseDown.scrollLeft;
    });
  }

  MouseEntermodal() {
    this.renderer.listen(
      this.ForSlides.nativeElement,
      'mouseenter',
      (event) => {
        this.isDown = false;
        this.ForSlides.nativeElement.style.cursor = 'grab';
      }
    );
  }
  MouseUpmodal() {
    this.renderer.listen(this.ForSlides.nativeElement, 'mouseup', (event) => {
      this.isDown = false;
    });
  }

  MouseMovemodal() {
    this.renderer.listen(this.ForSlides.nativeElement, 'mousemove', (event) => {
      if (!this.isDown) return;
      event.preventDefault();
      const mouse = event.pageX - this.MouseDown.offsetLeft;
      const relative = mouse - this.startX;

      this.MouseDown.scrollLeft = this.scrollLeft - relative;
    });
  }
  Submit() {}
  @HostListener('document:scroll')
  onScroll() {
    this.Homeheight = this.NavList.getBoundingClientRect().height;

    this.ScrolHeight = window.pageYOffset;

    if (this.ScrolHeight > this.Homeheight) {
      this.NavList.classList.add('fixed-nav');
    } else {
      this.NavList.classList.remove('fixed-nav');
    }

    if (this.ScrolHeight > this.Homeheight) {
      this.Toplink.classList.remove('top-link');
      this.Toplink.classList.add('show-link');
    } else {
      this.Toplink.classList.remove('show-link');
    }
  }
  //for buttons

  ForBTnAll(params: any) {
    if (params == 'all') {
      this.showpicture.All = true;
      this.showpicture.ci = false;
      this.showpicture.drupal = false;
      this.showpicture.ecomm = false;
      this.showpicture.magneto = false;
      this.showpicture.wordpress = false;
      this.showpicture.Condition = false;
    }
  }

  ForBTnAllCi(params: string) {
    if (params == 'ci') {
      this.showpicture.ci = true;
      this.showpicture.All = false;
      this.showpicture.drupal = false;
      this.showpicture.ecomm = false;
      this.showpicture.magneto = false;
      this.showpicture.wordpress = false;
      this.showpicture.Condition = false;
    }
  }
  ForBTnAllDR(params: string) {
    if (params == 'dr') {
      this.showpicture.drupal = true;
      this.showpicture.All = false;
      this.showpicture.ci = false;
      this.showpicture.ecomm = false;
      this.showpicture.magneto = false;
      this.showpicture.wordpress = false;
      this.showpicture.Condition = false;
    }
  }
  ForBTnAlleC(params: string) {
    if (params == 'ec') {
      this.showpicture.ecomm = true;
      this.showpicture.All = false;
      this.showpicture.drupal = false;
      this.showpicture.ci = false;
      this.showpicture.magneto = false;
      this.showpicture.wordpress = false;
      this.showpicture.Condition = false;
    }
  }
  ForBTnAllMag(params: string) {
    if (params == 'ma') {
      this.showpicture.magneto = true;
      this.showpicture.All = false;
      this.showpicture.drupal = false;
      this.showpicture.ci = false;
      this.showpicture.ecomm = false;
      this.showpicture.wordpress = false;
      this.showpicture.Condition = false;
    }
  }
  ForBTnAllword(params: string) {
    if (params == 'wo') {
      this.showpicture.wordpress = true;
      this.showpicture.All = false;
      this.showpicture.drupal = false;
      this.showpicture.ci = false;
      this.showpicture.magneto = false;
      this.showpicture.ecomm = false;
      this.showpicture.Condition = false;
    }
  }

  //for projects

  Bradmorebuilders(params: any) {
    this.FilterAll = params;
    this.Service.setterName(this.FilterAll);
    this.router.navigate(['/slider']);
  }
  CanyoLake(params: any) {
    this.FilterAll = params;
    this.Service.setterName(this.FilterAll);
    this.router.navigate(['/slider']);
  }

  MonsterWebPlanner(params: any) {
    this.FilterAll = params;
    this.Service.setterName(this.FilterAll);
    this.router.navigate(['/slider']);
  }

  NorthWest(params: any) {
    this.FilterAll = params;
    this.Service.setterName(this.FilterAll);
    this.router.navigate(['/slider']);
  }
  Tensinpen(params: any) {
    this.FilterAll = params;
    this.Service.setterName(this.FilterAll);
    this.router.navigate(['/slider']);
  }

  Comalfloweshop(params: any) {
    this.FilterAll = params;
    this.Service.setterName(this.FilterAll);
    this.router.navigate(['/slider']);
  }
  Travelmoon(params: any) {
    this.FilterAll = params;
    this.Service.setName(this.FilterAll);
    this.router.navigate(['/slider']);
  }
  Bradmorebuilders1(params: string, id: string) {
    this.FilterByAll = params;

    this.FilterLength = this.imagefor.filter((items: any) => {
      return items.imageCatagories === this.FilterByAll;
    });

    this.FilterAllLength = this.FilterLength.length;
    this.CommonModal.open(id);
  }
  CanyoLake1(params: string, id: string) {
    this.FilterByAll = params;

    this.FilterLength = this.imagefor.filter((items: any) => {
      return items.imageCatagories === this.FilterByAll;
    });

    this.FilterAllLength = this.FilterLength.length;
    this.CommonModal.open(id);
  }
  MonsterWebPlanner1(params: string, id: string) {
    this.FilterByAll = params;

    this.FilterLength = this.imagefor.filter((items: any) => {
      return items.imageCatagories === this.FilterByAll;
    });

    this.FilterAllLength = this.FilterLength.length;
    this.CommonModal.open(id);
  }
  NorthWest1(params: string, id: string) {
    this.FilterByAll = params;

    this.FilterLength = this.imagefor.filter((items: any) => {
      return items.imageCatagories === this.FilterByAll;
    });

    this.FilterAllLength = this.FilterLength.length;

    this.CommonModal.open(id);
  }
  Tensinpen1(params: string, id: string) {
    this.FilterByAll = params;

    this.FilterLength = this.imagefor.filter((items: any) => {
      return items.imageCatagories === this.FilterByAll;
    });

    this.FilterAllLength = this.FilterLength.length;
    this.CommonModal.open(id);
  }
  Comalfloweshop1(params: string, id: string) {
    this.FilterByAll = params;

    this.FilterLength = this.imagefor.filter((items: any) => {
      return items.imageCatagories === this.FilterByAll;
    });

    this.FilterAllLength = this.FilterLength.length;
    this.CommonModal.open(id);
  }
  Travelmoon1(params: string, id: string) {
    this.FilterByAll = params;

    this.FilterLength = this.imagefor.filter((items: any) => {
      return items.imageCatagories === this.FilterByAll;
    });

    this.FilterAllLength = this.FilterLength.length;
    this.CommonModal.open(id);
  }
  GetAllContent() {
    this.AllContent = this.Service.getAllModalsForProjects();
  }
  getAllimages() {
    this.ImagesSlider = this.Service.getAllimages();
    this.imagefor = this.ImagesSlider;
  }
  next() {
    if (this.currentIndex < this.FilterAllLength - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    console.log(this.FilterAllLength);
  }
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.FilterAllLength - 1;
    }
  }
  //for scroll

  home(event: any) {
    event.preventDefault();
    this.List.style.visibility = 'hidden';
    this.id = event.currentTarget.getAttribute('href').slice(1);
    this.element = <HTMLInputElement>document.getElementById(this.id);
    this.Homeheight = this.NavList.getBoundingClientRect().height;
    this.position = this.element.offsetTop - this.Homeheight;

    const fixednav = this.NavList.classList.contains('fixed-nav');
    if (!fixednav) {
      this.position = this.position - this.Homeheight;
    }

    window.scrollTo({
      left: 0,
      top: this.position,
      behavior: 'smooth',
    });
  }

  about(event: any) {
    event.preventDefault();
    this.List.style.visibility = 'hidden';

    this.id = event.currentTarget.getAttribute('href').slice(1);
    this.element = <HTMLInputElement>document.getElementById(this.id);
    this.Homeheight = this.NavList.getBoundingClientRect().height;
    this.position = this.element.offsetTop - this.Homeheight;

    const fixednav = this.NavList.classList.contains('fixed-nav');
    if (!fixednav) {
      this.position = this.position - this.Homeheight;
    }

    window.scrollTo({
      left: 0,
      top: this.position,
      behavior: 'smooth',
    });
  }
  projectss(event: any) {
    event.preventDefault();
    this.List.style.visibility = 'hidden';
    this.id = event.currentTarget.getAttribute('href').slice(1);
    this.element = <HTMLInputElement>document.getElementById(this.id);
    this.Homeheight = this.NavList.getBoundingClientRect().height;
    this.position = this.element.offsetTop - this.Homeheight;

    const fixednav = this.NavList.classList.contains('fixed-nav');
    if (!fixednav) {
      this.position = this.position - this.Homeheight;
    }

    window.scrollTo({
      left: 0,
      top: this.position,
      behavior: 'smooth',
    });
  }

  contactus(event: any) {
    event.preventDefault();
    this.List.style.visibility = 'hidden';
    this.id = event.currentTarget.getAttribute('href').slice(1);
    this.element = <HTMLInputElement>document.getElementById(this.id);
    this.Homeheight = this.NavList.getBoundingClientRect().height;
    this.position = this.element.offsetTop - this.Homeheight;

    const navfixed = this.NavList.classList.contains('fixed-nav');
    if (!navfixed) {
      this.position = this.position - this.Homeheight;
    }

    window.scrollTo({
      left: 0,
      top: this.position,
      behavior: 'smooth',
    });
  }
  Services(event: any) {
    event.preventDefault();
    this.List.style.visibility = 'hidden';
    this.id = event.currentTarget.getAttribute('href').slice(1);
    this.element = <HTMLInputElement>document.getElementById(this.id);
    this.Homeheight = this.NavList.getBoundingClientRect().height;
    this.position = this.element.offsetTop - this.Homeheight;

    const navfixed = this.NavList.classList.contains('fixed-nav');
    if (!navfixed) {
      this.position = this.position - this.Homeheight;
    }

    window.scrollTo({
      left: 0,
      top: this.position,
      behavior: 'smooth',
    });
  }
  //backtotop
  BacktoTop(event: any) {
    event.preventDefault();

    this.element = this.Toplink;

    this.Homeheight = this.NavList.getBoundingClientRect().height;

    this.position = this.element.offsetTop - 40 * this.Homeheight;

    window.scrollTo({
      left: 0,
      top: this.position,
      behavior: 'smooth',
    });
  }
  openModal(id: string) {
    this.CommonModal.open(id);
  }

  closeModal(id: string) {
    this.CommonModal.close(id);
  }
}
