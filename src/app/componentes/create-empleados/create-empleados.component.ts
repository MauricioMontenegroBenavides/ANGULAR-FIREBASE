import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from 'src/app/shared/employe.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-empleados',
  templateUrl: './create-empleados.component.html',
  styleUrls: ['./create-empleados.component.css']
})


export class CreateEmpleadosComponent implements OnInit {

  crearempleado :FormGroup=new FormGroup({ // Aqui adentro van los constroles del formulario

    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    salario: new FormControl('', Validators.required),
    documento: new FormControl('', Validators.required),
  });

  submited=false
  loading=false
  id!:string|null;

  constructor(private servi:EmployeService,private amor:Router,private toastr: ToastrService,

    private aroute:ActivatedRoute) {

      this.id=this.aroute.snapshot.paramMap.get('amor')

      console.log(this.id)

  }

  ngOnInit(): void {

    this.esEditar()
  }

  agregareditar(){

    if(this.crearempleado.invalid){

      return;
    }

    if(this.id===null){

        this.agregar()
    }else{

        this.editarempleado(this.id)
    }
  }

  agregar(){
   this.loading=true;

   if(this.crearempleado.status=='INVALID'){

    return;
   }

   this.toastr.success('El empelado ha sido agregado con éxito', 'Toastr fun!',{'positionClass':'toast-botton-left'});

   const empleado:any={
    nombre:this.crearempleado.value.nombre,
    apellido: this.crearempleado.value.apellido,
    salario: this.crearempleado.value.salario,
    documento: this.crearempleado.value.documento,
    fechacrea:new Date(),
    fechaActua:new Date(),
   }

   this.servi.enviarEmpleado(empleado).then(m=>this.amor.navigate(['/lista']))

  }

  editarempleado(id:string){

    const empleado:any={
      nombre:this.crearempleado.value.nombre,
      apellido: this.crearempleado.value.apellido,
      salario: this.crearempleado.value.salario,
      documento: this.crearempleado.value.documento,
      fechacrea:new Date(),
      fechaActua:new Date(),
     }
    if(this.id!=null){
      this.servi.actualizar(this.id,empleado).then(m=>this.amor.navigate(['/HomePage']))
    }
  }

  esEditar(){

    if(this.id!==null){

      this.servi.editar(this.id).subscribe((data:any)=>{

        this.crearempleado.setValue({// Con este metodo seteo valores

          nombre:data.payload.data().nombre,
          apellido:data.payload.data().apellido,
          documento:data.payload.data().documento,
          salario:data.payload.data().salario

        })
      })
    }

  }

}
