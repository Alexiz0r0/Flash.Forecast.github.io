import { Injectable } from '@angular/core';
import { Spinner } from 'ngx-spinner';
import { SpinnerService } from './spinner.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(
    private spinnerService: SpinnerService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.llamarSpinner();
    return next.handle(req).pipe(
      finalize(() => this.spinnerService.detenerSpinner())
    );
  }
}
