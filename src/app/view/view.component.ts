import {Component, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent implements OnInit {

  @Input() userName;
  response: any

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  search() {
    let obs = this.http.get('https://api.github.com/users/' + this.userName)
    obs.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
  }

}
