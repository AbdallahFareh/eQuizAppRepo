import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from "../../services/app.layout.service";

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/admin/dashboard'] }
                ]
            },

            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [

                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Etudiant',
                                icon: 'pi pi-fw pi-user',
                                routerLink: ['/admin/etudiants']
                            },
                            {
                                label: 'Enseignant',
                                icon: 'pi pi-fw pi-user',
                                routerLink: ['/admin/enseignants']
                            },
                            {
                                label: 'Classe',
                                icon: 'pi pi-fw pi-user',
                                routerLink: ['/admin/classes']
                            },
                        ]
                    },
                    {
                        label: 'Exam',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Ajouter un test',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/admin/ajouterTest']
                            },
                          {
                                label: 'Passer un test',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/admin/passerTest']
                            },

                        ]
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Logout',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/login']
                            },

                        ]
                    },


                ]
            },

        ];
    }
}
