import { Routes, RouterModule } from "@angular/router";
import { AcompanhamentoComponent } from './pages/acompanhamento/acompanhamento.component';

const routes : Routes = [
    {
        path: '',
        component: AcompanhamentoComponent
    }
]

export const RoutingModule = RouterModule.forRoot(routes)