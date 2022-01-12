import { Component } from '@angular/core';
import { AppService } from "../services/app.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public service: AppService) {}

  usuarios:any[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(
      (data) => {
        this.usuarios = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
