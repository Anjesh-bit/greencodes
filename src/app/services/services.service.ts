import { ForimageClick, Projectsof } from './../models/dataHome';
import { Injectable } from '@angular/core';
import { interval, NEVER, Subject, Observable } from 'rxjs';
import { startWith, scan, switchMap, map } from 'rxjs/operators';

export interface Counter {
  pause?: boolean;
  CounterValues?: number;
}
@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  allImages!: any[];
  FilterBY: any;
  data!: any[];
  set: any;
  getdata: any;
  AlProjects!: any[];

  AlltheContent!: any[];

  private CounterSubject: Subject<Counter> = new Subject();
  constructor() {}

  getAllimages() {
    return (this.allImages = ForimageClick.slice(0));
  }
  getAllProjects() {
    return (this.AlProjects = Projectsof.slice(0));
  }
  setterName(params: any) {
    this.set = params;
  }
  getterName() {
    this.getdata = this.set;
    return this.getdata;
  }
  setName(params: any) {
    this.set = params;
  }
  getName() {
    this.getdata = this.set;
    return this.getdata;
  }

  initializeInterval(duration: number): Observable<Counter> {
    return this.CounterSubject.pipe(
      startWith({ pause: false, CounterValues: 0 }),
      scan((acc, val) => ({ ...acc, ...val })),
      switchMap((state: any) =>
        state.pause
          ? NEVER
          : interval(duration).pipe(
              map(() => {
                state.CounterValues += 1;
                return state;
              })
            )
      )
    );
  }

  pauseCounter() {
    this.CounterSubject.next({ pause: true });
  }

  resume() {
    this.CounterSubject.next({ pause: false });
  }

  getAllModalsForProjects() {
    return (this.AlltheContent = Projectsof.slice(0));
  }
}
