import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export default class UserService {
    endpoint: string;
    name: string;

    constructor(private httpClient: HttpClient){
        this.endpoint = "http://localhost:3000";
    }

    //localStorage version
    // sendToLocalStorage(userName: string, key: string){
    //     localStorage.setItem(key, JSON.stringify(userName));
    // }

    /**
     *
     * @param name
     */
    // saveUser(name: string)
    // {
    //     let saveUrl: string = `${this.endpoint}/user`;
    //
    //     this.httpClient.post(saveUrl, {
    //         params: {
    //             userName: name
    //         }
    //     }).subscribe();
    // }
}