import { Component, OnInit } from '@angular/core';
import { ApiService } from "./services/api.service";
import { PeopleService} from "./services/people.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularNiv';
  apiList: any = [];
  peopleList: any = [];


  constructor(private ApiService: ApiService, private PeopleService: PeopleService){
    console.log("componente creado")
  }


  ngOnInit(): void {
    console.log("inicializado el compnente");
    this.ApiService.getApi()
      .subscribe((response: any) => this.apiList = response.results);
    this.PeopleService.getPeople()
      .subscribe((response: any) => console.log(response.results));
  }
  }

