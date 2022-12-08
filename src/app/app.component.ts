import { Component, OnInit, ViewChild } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { AuthService } from "src/app/services/auth.service";

import {
  Directive, HostListener, HostBinding
} from '@angular/core';

@UntilDestroy()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myLastProjectAngular';
  
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  /*How to show and hide*/
  public showSearchForm:boolean = false;
  public showLoginForm:boolean = false;

 
  clickSearchIcon() {
    if ( this.showLoginForm === false ) {
      this.showSearchForm = !this.showSearchForm;
    }   
  }

  clickLoginIcon() {
    if (this.showSearchForm === false) {
      this.showLoginForm = !this.showLoginForm; 
    }
  }
  /*mouseleave | focusout | mousemove*/

  @HostListener('mouseover') onMouseOver() {
    if (this.showLoginForm === true && this.isLogged === true) {
      this.showLoginForm = false;
    }
  }
  /*How to show and hide*/
  /*How to change login to logout*/
  isLogged: boolean = false;

  constructor(
    private observer: BreakpointObserver, 
    private router: Router,
    private authService: AuthService,
    ) {}

  ngOnInit():void {
    this.authService.isLogged.subscribe(
      (res) => (this.isLogged=res)); 
  }

  onLogout():void{
    this.authService.logOut();
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
}
