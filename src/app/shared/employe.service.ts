import { Injectable } from '@angular/core';


import { FormGroup,FormControl, Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
 export class EmployeService {

  constructor(private db:AngularFirestore) { }


    enviar(empleado:any){

     return this.db.collection('empleados').add(empleado)
    }

    form :FormGroup=new FormGroup({ // Aqui adentro van los constroles del formulario

      $key: new FormControl(null),
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
      city: new FormControl(''),
      gender: new FormControl('1'),
      department: new FormControl(0),
      hireDate: new FormControl(''),
      isPermanent: new FormControl(false)

    });

    initializeFormGroup() {
      this.form.setValue({
        $key: null,
        fullName: '',
        email: '',
        mobile: '',
        city: '',
        gender: '1',
        department: 0,
        hireDate: '',
        isPermanent: false
      });
    }


    enviarEmpleado(empleado:any){

      return this.db.collection('empleadosNuevos').add(empleado)
    }


    obtener(){

      return this.db.collection('empleadosNuevos',ref=>ref.orderBy('fechacrea','asc')).snapshotChanges()
    }

    eliminarEmpleado(id:string){

      return this.db.collection('empleadosNuevos').doc(id).delete()
    }

    editar(id:string){

      return this.db.collection('empleadosNuevos').doc(id).snapshotChanges()
    }

    actualizar(id:string,data:any){

      return this.db.collection('empleadosNuevos').doc(id).update(data)
    }
}

