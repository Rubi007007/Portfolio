import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ProjectsdataService {

    constructor() { }

    projects = [
        {
            name: "El Pollo Loco",
            img: "el-pollo-loco-project.png",
            description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
            programmingLanguages: ["JavaScript", "HTML", "CSS"]
        },
        {
            name: "Join",
            img: "join-project.png",
            description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
            programmingLanguages: ["JavaScript", "HTML", "CSS"]
        }
    ]
}
