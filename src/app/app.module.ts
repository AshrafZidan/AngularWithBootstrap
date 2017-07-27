import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavabrComponent } from './navabr/navabr.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { FeatureComponent} from './feature/feature.component'

const appRoutes:Routes = [
  {
    path:'',component:HeaderComponent
  },
  {
    path:'about',component:AboutComponentComponent
  },
  {path:'feature' , component:FeatureComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    NavabrComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponentComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
