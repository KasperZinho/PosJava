import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private auth : AuthService) {}

    ngOnInit() {}

    sair() {
        this.auth.logout();
    }

}
