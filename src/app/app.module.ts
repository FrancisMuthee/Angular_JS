import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FooterComponent } from './footer/footer.component';
import { LeranComponent } from './leran/leran.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DatesComponent } from './dates/dates.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavbarComponent,
    ActivitiesComponent,
    FooterComponent,
    
    LeranComponent,
    ContactsComponent,
    DatesComponent,
    CalendarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
