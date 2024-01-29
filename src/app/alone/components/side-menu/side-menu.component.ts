import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem{
  name: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [ CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', name: 'Fullscreen'},
    { route: '/maps/zoom', name: 'Zoom'},
    { route: '/maps/markers', name: 'Markers'},
    { route: '/maps/properties', name: 'Houses'},
    { route: '/alone', name: 'Alone'},
  ]

}
