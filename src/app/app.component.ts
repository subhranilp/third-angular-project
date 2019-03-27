import { Component } from '@angular/core';
import {TestService} from "./test.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private svc: TestService, private http: HttpClient){
    this.svc.printToConsole('Got The Service')
  }

  ngOnInit(){
    /*let obs = this.http.get('https://api.github.com/users/subhranilp')
    obs.subscribe((response) => console.log(response));*/
  }
}
