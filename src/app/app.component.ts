import { Component } from '@angular/core';
import { EmployeService } from './shared/employe.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  cam=true;
  ar=['amor','constancia','disciplina'];
  employeeLis!: Observable<any[]>;
  departmentList!:any;
  array!:any[]
  maxdate!:Date;

 /*  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false; */

   dep=[
    {value: 'steak-0', viewValue: 'dep 1'},
    {value: 'pizza-1', viewValue: 'dep 2'},
    {value: 'tacos-2', viewValue: 'dep 3'},
  ];


  employee :FormGroup=new FormGroup({ // Aqui adentro van los constroles del formulario

    $key: new FormControl(null),
    fullName: new FormControl('', [Validators.required,Validators.maxLength(8)]),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(1),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)

  });

  constructor(private service:EmployeService,private firestore: AngularFirestore,private traer:AngularFirestore){

    // Inicializo el maxdate para q la fecha no sea mayor a la acttual

    this.maxdate=new Date()

  }


  borrar(){
    this.employee.reset()
    this.service.initializeFormGroup
  }

  // AngularFireModule= AngularFireModule
  // AngularFireDatabase= AngularFireStore
  // list=collection
  // firestore=firestore
  // AngularFireList=?****


  getEmployest(){
    this.employeeLis = this.firestore.collection('empleados').valueChanges();

  }


    /*
  getEmployest(){
    this.employeelist=this.firebase.list('employees')
  } */


  insertEmployes(){

    const empleado:any={
      $key: this.employee.value.$key,
      fullName: this.employee.value. fullName,
      email: this.employee.value. email,
      mobile: this.employee.value. mobile,
      city: this.employee.value. city,
      gender: this.employee.value.gender,
      department: this.employee.value.department,
      hireDate: this.employee.value. hireDate,
      isPermanent: this.employee.value.isPermanent
    }

    console.log(this.employee)

    this.service.enviar(empleado).then(()=>console.log('SE ENVIO'))
    this.employee.reset()
    this.service.initializeFormGroup()
  }


 /*  updateEmplyeet(employee:FormGroup){

    this.employeeList.update(employee.key,{})

  }

  deleteEmployest($key:string){

    //this.employeeList.remove($key)
  }
 */
}
