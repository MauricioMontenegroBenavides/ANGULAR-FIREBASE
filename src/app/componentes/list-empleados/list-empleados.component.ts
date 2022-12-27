import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { EmployeService } from 'src/app/shared/employe.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {

  empleados!:any[]


  constructor(firestore: AngularFirestore,private _empleadoService:EmployeService,private toastr: ToastrService ) {

  }

  ngOnInit(): void {

    this.getEmpleados()
  }

  getEmpleados() {

    this._empleadoService.obtener().subscribe(data => {
      this.empleados = [];
      data.forEach((element: any) => {
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.empleados);
    });
  }


  eliminar(id:string){

      this._empleadoService.eliminarEmpleado(id)
      .then(()=>this.toastr.error('El empelado ha sido eliminado', 'Toastr fun!',{'positionClass':'toast-botton-rigth'}))
  }
}
