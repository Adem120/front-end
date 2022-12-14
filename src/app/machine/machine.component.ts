import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Machine } from '../model/model.component';
import { AuthService } from '../services/auth.service';
import { MachineServices } from '../services/services.component';
@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',

})
export class MachineComponent implements OnInit {
  machine! : Machine[];


    constructor(private machineservice: MachineServices ,private router:Router,public authService:AuthService) {
     // this.machine= machineservice.listeMachine();
  }
  ngOnInit(){
     
    this.machineservice.listeMachine().subscribe(machin => {
      console.log(machin);
      this.machine = machin;
  });}
 
  supprimerMachine(machin: Machine)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
  this.machineservice.supprimerMachine(machin.idMachine).subscribe(() => {

  console.log("produit supprimé");
  });
 
  }
  this.router.navigate(['machine']).then(() => {
    window.location.reload();
    });
    })}
  }