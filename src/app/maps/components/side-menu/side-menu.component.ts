import { Component } from '@angular/core';

interface MenuItem{
  name: string;
  route: string;
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', name: 'Fullscreen'},
    { route: '/maps/zoom', name: 'Zoom>'},
    { route: '/maps/markers', name: 'Markers'},
    { route: '/maps/properties', name: 'Houses'},
  ]

}
