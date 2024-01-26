import { AfterViewInit, Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

// (mapboxgl as any).accessToken = 'pk.eyJ1IjoibmhpZGFsZ28iLCJhIjoiY2xydXN4cmZiMGxmcDJqcDF1dmZvMXJ2dSJ9.B4NFxW9NxiC3qwcluSw4UQ';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {

  ngAfterViewInit(): void {

    const map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoibmhpZGFsZ28iLCJhIjoiY2xydXN4cmZiMGxmcDJqcDF1dmZvMXJ2dSJ9.B4NFxW9NxiC3qwcluSw4UQ',
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

  }





}
