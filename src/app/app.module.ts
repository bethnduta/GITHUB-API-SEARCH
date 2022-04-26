import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileService } from './profile.service';
import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }