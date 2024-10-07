import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ProjectsdataService {

    constructor() { }

    projects = [
        {
            name: "El Pollo Loco",
            img: "el-pollo-loco-icon.png",
        },
        {
            name: "Join",
            img: "join-icon.png",
        }
    ]
}
