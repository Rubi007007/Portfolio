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
            number: 1
        },
        {
            name: "CSS",
            img:"css-icon.png",
            number: 2
        },
        {
            name: "JavaScript",
            img:"js-icon.png",
            number: 3
        },
        {
            name: "TypeScript",
            img:"ts-icon.png",
            number: 4
        },
        {
            name: "Angular",
            img:"angular-icon.png",
            number: 5
        },
        {
            name: "Firebase",
            img:"firebase-icon.png",
            number: 6
        },
        {
            name: "GIT",
            img:"git-icon.png",
            number: 7
        },
        {
            name: "Rest-Api",
            img:"api-icon.png",
            number: 8
        },
        {
            name: "Scrum",
            img:"scrum-icon.png",
            number: 9
        },
        {
            name: "Material Design",
            img:"md-icon.png",
            number: 10
        },
        {
            name: "Continually learning",
            img:"learning-icon.png",
            number: 11
        },
    ]
}
