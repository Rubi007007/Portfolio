import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SkillsdataService {

    constructor() { }

    skills = [
        {
            name: "HTML",
            img:"html-icon.png",
        },
        {
            name: "CSS",
            img:"css-icon.png",
        },
        {
            name: "JavaScript",
            img:"js-icon.png",
        },
        {
            name: "TypeScript",
            img:"ts-icon.png",
        },
        {
            name: "Angular",
            img:"angular-icon.png",
        },
        {
            name: "Firebase",
            img:"firebase-icon.png",
        },
        {
            name: "GIT",
            img:"git-icon.png",
        },
        {
            name: "Rest-Api",
            img:"api-icon.png",
        },
        {
            name: "Scrum",
            img:"scrum-icon.png",
        },
        {
            name: "Material Design",
            img:"md-icon.png",
        },
        {
            name: "Continually learning",
            img:"learning-icon.png",
        },
    ]
}
