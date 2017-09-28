

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// import {HttpModule} from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import TopHeaderComponent from './components/topHeader/topHeader.component';
import {MainContainerComponent} from './components/main.component';
import SingerCardComponent from './components/singerCard.component';
import ImagePreviewComponent from './components/imagePreview/imagePreview.component';
import UserService from './services/userService';
import BandService from './services/band.service';
import FilterListPipe from './pipes/filterListPipe';
import LazyLoadDirective from './directives/lazyLoad.directive';
import LazyVideoDirective from './directives/lazyVideo.directive';
import UserProfileComponent from './components/userProfile/userProfile.component';
import HeroRoutingModule from './components/heroes/heroes-routing.module';
import HeroesModule from './components/heroes/heroes.module';



const routes = [
    {path: "profile", component: UserProfileComponent},
    {path: "", component: MainContainerComponent}
]



@NgModule({
    declarations: [
        AppComponent,
        TopHeaderComponent,
        MainContainerComponent,
        SingerCardComponent,
        ImagePreviewComponent,
        UserProfileComponent,
        /* */
        FilterListPipe,
        /* */
        LazyLoadDirective,
        LazyVideoDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        // HttpModule
        HttpClientModule,
        HeroesModule,
        HeroRoutingModule,
        RouterModule.forRoot(routes)

    ],
    providers: [
        UserService,
        BandService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
