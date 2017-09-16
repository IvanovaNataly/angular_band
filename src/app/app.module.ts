

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
// import {TopHeaderComponent} from './components/topHeader.component';
import {MainContainerComponent} from './components/main.component';
import SingerCardComponent from './components/singerCard.component';
import ImagePreviewComponent from './components/imagePreview/imagePreview.component';
import UserService from './services/userService';
import FilterListPipe from './pipes/filterListPipe';

@NgModule({
    declarations: [
        AppComponent,
        // TopHeaderComponent,
        MainContainerComponent,
        SingerCardComponent,
        ImagePreviewComponent,
        /* */
        FilterListPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        [UserService]
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
