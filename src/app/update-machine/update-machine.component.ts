import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Machine, Utulisation } from '../model/model.component';
import { AuthService } from '../services/auth.service';
import { MachineServices } from '../services/services.component';
@Component({
  selector: 'app-update-machine',
  templateUrl: './update-machine.component.html',
 
})
export class UpdateMachineComponent implements OnInit {
  currentMachine = new Machine();
  utlisation?:Utulisation[];
  id!:number;
  utilusation?:Utulisation;
  constructor(private activatedRoute: ActivatedRoute,
    private router:Router,
    private MachineServices: MachineServices ,private authService :AuthService){ }

    ngOnInit():void {
      if(!this.authService.getToken()){
        this.router.navigate(['login'])
       }
      this.MachineServices.consulterMachine(this.activatedRoute.snapshot.params['id']).subscribe( machin =>
        { console.log(this.activatedRoute.snapshot.params['id'])
          this.currentMachine = machin;
          this.id=this.currentMachine.utulisation.idutili
      
          } ) ;
        this.MachineServices.listeUtilisation().subscribe(utilusation =>{
          this.utlisation=utilusation;
        })
       
          }
  updateMachine()
{ Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    this.currentMachine.utulisation.idutili=this.id;
    this.MachineServices.updateMachine(this.currentMachine).subscribe(mach => {(console.log(this.id))
   this.router.navigate(['machine']);
   },(error) => { alert("Problème lors de la modification !"); }
   );
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
      }
 
}


