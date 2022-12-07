import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Machine, Utulisation } from '../model/model.component';
import {MachineServices} from '../services/services.component';
@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.css']
})
export class AddMachineComponent implements OnInit {

  newMachine = new Machine();
  utlisation!:Utulisation[]
  id!:number;
  utilusation!:Utulisation;
  constructor(private machineService: MachineServices,private activatedRoute: ActivatedRoute,private router:Router) { }
  addMachine(){
    this.newMachine.utulisation = this.utlisation.find(utilusation => utilusation.idutili == this.id)!;
    console.log(this.newMachine.utulisation)
  this.machineService.ajouterMachine(this.newMachine).subscribe(machin =>{console.log(machin);
  this.router.navigate(['machine']);
  Swal.fire(
    'Machine ajouter avec succé!',
    'You clicked the button!',
    'success'
  )
});
  

}
  ngOnInit():void {
    
       console.log(this.id)
      this.machineService.listeUtilisation().subscribe(utilusation =>{
        this.utlisation=utilusation;
      })}

}
