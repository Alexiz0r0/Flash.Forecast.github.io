import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  constructor( private readonly fb:FormBuilder){

  }
  isSubmittedBtn: boolean = false;
  contactForm!:FormGroup;
  msgThx!: string;

  onSubmit(): void{
    
    console.log(this.contactForm.value);
    if (this.contactForm.valid){
      this.msgThx = "Gracias por contactarnos";
      this.isSubmittedBtn = true;
    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(10)]],
      correo: ['',[Validators.required,Validators.email]],
      mensaje: ['',[Validators.required,Validators.maxLength(250)]]
    })
  }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

}
