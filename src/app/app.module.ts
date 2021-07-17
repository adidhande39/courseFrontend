import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseListComponent } from './components/course-list/course-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import { AddCourseComponent } from './components/add-course/add-course.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import {ToastrModule} from "ngx-toastr";
import { SearchComponent } from './components/search/search.component';
import {MatDialogModule} from "@angular/material/dialog";
import { TestformComponent } from './components/testform/testform.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";
import { EmailComponent } from './components/email/email.component';
import {MatListModule} from "@angular/material/list";
import {MatBottomSheet, MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import { AddTestComponent } from './components/add-test/add-test.component';
import { ChartComponent } from './components/chart/chart.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { LoginComponent } from './login/login.component';
import {GoogleLoginProvider, SocialLoginModule} from "angularx-social-login";
import {AuthGuard} from "./auth.guard";
import { AuthInterceptor } from './AuthInterceptor';

const routes: Routes = [
  { path: '', redirectTo:'/course',pathMatch:'full' },
  {path:'course',component:CourseListComponent,canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path:'course/add',component:AddCourseComponent},
  {path:'course/edit/:id',component:EditCourseComponent},
  {path:'course/trend',component:ChartComponent},




]

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    AddCourseComponent,
    EditCourseComponent,
    SearchComponent,
    TestformComponent,
    EmailComponent,
    FileUploadComponent,
    AddTestComponent,
    ChartComponent,
    LoginComponent,
  ],
  entryComponents:[TestformComponent,AddCourseComponent,EmailComponent,AddTestComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'}),
    ToastrModule.forRoot({
      positionClass: "toast-top-center",
      closeButton: true
    }),
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatListModule,
    MatBottomSheetModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    NgxChartsModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('148517665605-jspahbqleats6lvlag9kasc2c11b5g7o.apps.googleusercontent.com')
        }
      ]
    }
  },
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
