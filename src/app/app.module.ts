import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { MatDivider } from '@angular/material/divider';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component'
import {MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AppMenuComponent } from './admin-template/layout/app.menu.component';
import { AppTopBarComponent } from './admin-template/layout/app.topbar.component';
import { AppSidebarComponent } from "./admin-template/layout/app.sidebar.component";
import { AppFooterComponent } from './admin-template/layout/app.footer.component';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { AppMenuitemComponent } from './admin-template/layout/app.menuitem.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import {CheckboxModule} from 'primeng/checkbox';
import { PasswordModule } from "primeng/password";
import { SelectButtonModule } from 'primeng/selectbutton';









@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppSidebarComponent,
    AppTopBarComponent,
    AppMenuitemComponent,
    AdminTemplateComponent,
    EtudiantComponent,
    EnseignantComponent,
    DashboardComponent,
    LoginComponent,
    AddEtudiantComponent,
    AddEnseignantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CommonModule,MatIconModule,MatListModule,MatButtonModule,MatMenuModule,
    MatDrawerContainer,MatDivider,MatToolbarModule,CommonModule,MatSidenavModule,MatTableModule,
    MatCardModule,MatFormFieldModule,MatPaginatorModule,HttpClientModule,MatDialogModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSelectModule,
    ReactiveFormsModule,MatSnackBarModule,AppRoutingModule, CommonModule,
    FileUploadModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,  
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    RouterModule,
    CheckboxModule,
    PasswordModule,
    SelectButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
