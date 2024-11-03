import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})

export class ProjectsdataService {
    projects: any[] = [];

    constructor(private translate: TranslateService) {
        this.loadProjects();
    }

    private loadProjects() {
        this.projects = [
            {
                name: "El Pollo Loco",
                img: "el-pollo-loco-project.png",
                descriptionKey: 'projects.pollo.desc',
                programmingLanguages: ["JavaScript", "HTML", "CSS"]
            },
            {
                name: "Join",
                img: "join-project.png",
                descriptionKey: 'projects.join.desc',
                programmingLanguages: ["JavaScript", "HTML", "CSS"]
            }
        ]
    }
}
