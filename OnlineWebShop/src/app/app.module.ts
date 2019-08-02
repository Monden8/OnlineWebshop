import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FrontpageComponent } from './Components/frontpage/frontpage.component';
import { PipeService } from './Pipes/timestamp.pipe';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthenticationService } from "./Services/authentication.service";
import { AuthenticationInterceptor } from "./Au.interceptor";
import { AuthGuard } from './Guards/auth.guard';
import { DialogComponent } from './Components/dialog/dialog.component';
import { StuffDialogComponent } from './Components/stuff-dialog/stuff-dialog.component';
import { AddItemComponent } from './Components/add-item/add-item.component';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCheckboxModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FrontpageComponent,
    SearchBarComponent,
    NavBarComponent,
    DialogComponent,
    StuffDialogComponent,
    AddItemComponent
  ],

  imports: [
    MatInputModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule
  ],

  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    PipeService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, StuffDialogComponent]
})
export class AppModule { }
