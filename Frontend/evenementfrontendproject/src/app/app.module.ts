import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvenementComponent } from './evenement/evenement.component';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { FormsModule } from '@angular/forms';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';
import { ThemeComponent } from './theme/theme.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParThemeComponent } from './recherche-par-theme/recherche-par-theme.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeThemesComponent } from './liste-themes/liste-themes.component';
import { UpdateThemeComponent } from './update-theme/update-theme.component';
import { LoginComponent } from './login/login.component';
import { EvenementService } from './services/evenement.service';
import { AuthService } from './services/auth.service';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EvenementGuard } from './evenement.guard';



@NgModule({
  declarations: [
    AppComponent,
    EvenementComponent,
    AddEvenementComponent,
    UpdateEvenementComponent,
    ThemeComponent,
    RechercheParThemeComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeThemesComponent,
    UpdateThemeComponent,
    LoginComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    EvenementService,
    AuthService,
    EvenementGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
