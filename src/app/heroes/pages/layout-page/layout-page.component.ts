import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {


  public sidebarItems = [
    {
      label: 'Listado', icon: 'list', link: './list'
    },
    {
      label: 'Agregar', icon: 'add', link: './new-hero'
    },
    {
      label: 'Buscar', icon: 'search', link: './search'
    }
  ]



}
