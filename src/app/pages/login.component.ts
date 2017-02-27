import {Component} from "@angular/core";
import {Headers} from "@angular/http";
import {Observable} from "rxjs";
import {ApiService} from "../services/api.service";
import {Router} from "@angular/router";

@Component({
    selector: 'page-login',
    templateUrl: '../templates/pages/login.component.html'
})


export class LoginComponent {

    constructor(
        private api: ApiService,
        private router: Router
    ) {}


    login: string = "";
    password: string = "";

    ngOnInit() {

    }

    onSubmit(evt: any){
        evt.preventDefault();


        if(this.login == "" || this.password == ""){
            alert("Fields must not be empty");
            return;
        }


        let headers = new Headers({"Authorization": "Basic " + btoa(this.login + ":" + this.password)});

        this.api.getInfo(headers).toPromise().then((res: any)=>{

            let userData = {login: this.login, password: this.password};
            localStorage.setItem("user", JSON.stringify(userData));

            this.router.navigate(["/"]);

        }).catch((err: any)=>{
            alert("Wrong login or password");
        });
    }

}