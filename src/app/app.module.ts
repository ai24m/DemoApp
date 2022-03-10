import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WordComponent } from './components/word/word.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { WordService } from './services/word-service/word.service';
import { CaseSensitivePipe } from './pipes/case-sensitive/casesensitive.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { FullWordPipe } from './pipes/full-word/fullword.pipe';
import { RegexpcheckPipe } from './pipes/regexpcheck/regexpcheck.pipe';



@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    NavbarComponent,
    NotfoundComponent,
    FilterPipe,
    FullWordPipe,
    CaseSensitivePipe,
    RegexpcheckPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [
    WordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
