import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class MenuComponent {

  public menu: MenuItem[] = [
    {
      ruta: "/graficas/barras",
      texto: "Barras"
    },
    {
      ruta: "/graficas/barras-doble",
      texto: "Barras Dobles"
    },
    {
      ruta: "/graficas/dona",
      texto: "Dona"
    },
    {
      ruta: "/graficas/dona-http",
      texto: "Dona Http"
    }
  ];

}
