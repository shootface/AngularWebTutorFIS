import{Component} from '@angular/core';
@Component({
    selector:'app-login',
    templateUrl: './login.component.html'
})
export class logincomponent{
}
class usuarioBasic{
    private usu:string;
    private pas:string; 
    constructor(us:string ,pas:string){
        this.usu = us;
        this.pas = pas;
    }
}
class usuarioEstudiante extends usuarioBasic{
    constructor(us:string,pas:string){
        super(us,pas);
    }
    tipo(){
        return 1;
    }
}
class usuarioTutor extends usuarioBasic{
    constructor(us:string,pas:string){
        super(us,pas);
    }
    tipo(){
        return 2;
    }
}
interface factoryAbUsuario{
    crearUsuario(us:string,pas:string,tipe:number):usuarioBasic;
}
class factoryUsuario implements factoryAbUsuario{
    crearUsuario(us:string,pas:string,tipe:number){
        if(tipe==1){
            return new usuarioEstudiante(us,pas);
        }else if(tipe==2){
            return new usuarioTutor(us,pas);
        }
    }
}
