import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes, Router, NavigationStart } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { InboxComponent } from './inbox/inbox.component';
import { AuthService } from './service/auth.service';
import { HttpService } from './service/http.service';
import { PerfilComponent } from './perfil/perfil.component';
import { PerguntaComponent } from './pergunta/pergunta.component';
import { RespostaComponent } from './resposta/resposta.component';
import { TimelineComponent } from './timeline/timeline.component';

const rotas : Routes = [
    {path: 'login', component: LoginComponent},

    {path: 'registro', component: RegistroComponent},

    {path: 'home', component: HomeComponent, children : [
        {path: 'inbox', component : InboxComponent},
        {path: 'perfil', component : PerfilComponent},
        {path: 'pergunta', component : PerguntaComponent},
        {path: 'resposta/:id', component : RespostaComponent},
        {path: 'perfil/:id', component : TimelineComponent},
        {path: '', pathMatch: 'full', redirectTo: 'inbox'}
    ]},
    
    {path: '', pathMatch: 'full', redirectTo: '/login'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    InboxComponent,
    PerfilComponent,
    PerguntaComponent,
    RespostaComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotas),
    FormsModule,
    HttpClientModule
  ],
  providers: [
      AuthService,
      HttpService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
    constructor(private router : Router, private auth : AuthService) {
        this.definirNavListener();
    } 

    definirNavListener() {
        this.router.events.subscribe(e => {
            if  (e instanceof NavigationStart) {
                
                if (e.url.startsWith('/home') && !this.auth.usuario) {
                    this.router.navigateByUrl('/login');
                } else if ((e.url == '/' || e.url == '/login') && this.auth.usuario) {
                    this.router.navigateByUrl('/home');
                } 

            }
        });
    }
}