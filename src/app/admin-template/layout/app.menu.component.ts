import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from "../../services/app.layout.service";
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    modelEt:any[]=[];
    modelEns:any[]=[];
    modelAdmin:any[]=[];

    constructor(public layoutService: LayoutService,private __auth:AuthService) { }

    ngOnInit() {
        this.modelEt = [
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
                        label: 'Exam',
                        icon: 'pi pi-fw pi-user',
                        items: [
                          {
                                label: 'Liste des Examens',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/admin/passerTest']
                            },

                        ]
                    },
                  {
                    label: 'Logout',
                    icon: 'pi pi-fw pi-sign-in',
                    routerLink: ['/login']
                  },


                ]
            },

        ];

        this.modelEns = [
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
                        label: 'Exam',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Ajouter un Examen',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/admin/ajouterTest']
                            },
                            {
                                label: 'Liste des Examens',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/admin/passerTest']
                            },

                        ]
                    },
                  {
                    label: 'Logout',
                    icon: 'pi pi-fw pi-sign-in',
                    routerLink: ['/login']
                  },


                ]
            },

        ];
        this.modelAdmin= [
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
                          label: 'Liste des Examens',
                          icon: 'pi pi-fw pi-sign-in',
                          routerLink: ['/admin/passerTest']
                        },

                      ]
                    },
                    {
                      label: 'Logout',
                      icon: 'pi pi-fw pi-sign-in',
                      routerLink: ['/login']
                    },


                ]
            },

        ];


        let etRoles="STUDENT";
        let enRoles="PROFESSEUR";
        let adRoles="ADMIN";
        let userRoles:string[] =this.__auth.roles;

         for(let role of userRoles){
          if(userRoles.includes(etRoles)){
            this.model=this.modelEt;
          }
          if(userRoles.includes(enRoles)){
            this.model=this.modelEns;
          }
          if(userRoles.includes(adRoles)){
            this.model=this.modelAdmin;
          }

         }

    }


}
