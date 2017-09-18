

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// import {HttpModule} from '@angular/http';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
// import {TopHeaderComponent} from './components/topHeader.component';
import {MainContainerComponent} from './components/main.component';
import SingerCardComponent from './components/singerCard.component';
import ImagePreviewComponent from './components/imagePreview/imagePreview.component';
import UserService from './services/userService';
import BandService from './services/band.service';
import FilterListPipe from './pipes/filterListPipe';
import LazyLoadDirective from './directives/lazyLoad.directive';

@NgModule({
    declarations: [
        AppComponent,
        // TopHeaderComponent,
        MainContainerComponent,
        SingerCardComponent,
        ImagePreviewComponent,
        /* */
        FilterListPipe,
        /* */
        LazyLoadDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        // HttpModule
        HttpClientModule
    ],
    providers: [
        UserService,
        BandService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
