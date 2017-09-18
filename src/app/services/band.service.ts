import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import SingerModel from '../models/singerModel';

@Injectable()
export default class BandService {
    endpoint: string;
    singers: SingerModel[];

    constructor(private  httpClient: HttpClient) {
        this.endpoint = "http://localhost:3000";
    }


    getSingers(): Promise<SingerModel[]> {
        return new Promise((resolve, reject) => {
            this.httpClient.get(`${this.endpoint}/bands`).subscribe(response => resolve(response),
                                                                    (error: Error) => reject(error));
        })


    }

    // getSingers(): Promise<[SingerModel]> //Edan's version
    // {
    //     return new Promise((resolve, reject) => {
    //
    //
    //         if(this.singers && this.singers.length > 0)
    //         {
    //             console.log("CACHE REQUEST");
    //             return resolve(this.singers);
    //         }
    //
    //         console.log("HTTP REQUEST");
    //         this.httpClient.get<[SingerModel]>(`${this.endpoint}/bands`).subscribe(data => {
    //
    //             this.singers = data;
    //             resolve(this.singers);
    //
    //         }, (error: Error) => {
    //
    //             reject(error);
    //
    //         });
    //     });
    //
    // }
}