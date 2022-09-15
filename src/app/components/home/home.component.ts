import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: MenuItem[] = [];
  geeks: boolean = false;
  itemsMenu: MenuItem[] = [];

  constructor(private primengConfig: PrimeNGConfig){}
  
  ngOnInit() {
    this.items = [
        {
            label: 'File',
            icon: 'pi pi-pw pi-file',
            items: [{
                    label: 'New', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'User', icon: 'pi pi-fw pi-user-plus'},
                        {label: 'Filter', icon: 'pi pi-fw pi-filter'}
                    ]
                },
                {label: 'Open', icon: 'pi pi-fw pi-external-link'},
                {separator: true},
                {label: 'Quit', icon: 'pi pi-fw pi-times'}
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            ]
        },
        {
            label: 'Help',
            icon: 'pi pi-fw pi-question',
            items: [
                {
                    label: 'Contents',
                    icon: 'pi pi-pi pi-bars'
                },
                {
                    label: 'Search', 
                    icon: 'pi pi-pi pi-search', 
                    items: [
                        {
                            label: 'Text', 
                            items: [
                                {
                                    label: 'Workspace'
                                }
                            ]
                        },
                        {
                            label: 'User',
                            icon: 'pi pi-fw pi-file',
                        }
                ]}
            ]
        },
        {
            label: 'Actions',
            icon: 'pi pi-fw pi-cog',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {label: 'Save', icon: 'pi pi-fw pi-save'},
                        {label: 'Update', icon: 'pi pi-fw pi-save'},
                    ]
                },
                {
                    label: 'Other',
                    icon: 'pi pi-fw pi-tags',
                    items: [
                        {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                    ]
                }
            ]
        }
    ];
  
    this.primengConfig.ripple = true;

    this.itemsMenu = [
      {
        label: 'File',
        icon: 'pi pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus-circle',
            items: [
              { label: 'Project', icon: 'pi pi-plus-circle-project' },
              { label: 'Other', icon: 'pi pi-plus-circle-other' }
            ],
          },
          {
            label: 'Open',
            icon: 'pi pi-folder-open',
          },
          {
            label: 'Quit',
            icon: 'pi pi-sign-out',
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
      }
    ];
  }
  
  gfg() {
    this.geeks = true;
  }
}
