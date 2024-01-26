import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-page.component.html',
  styleUrl: './zoom-page.component.css'
})
export class ZoomPageComponent implements AfterViewInit{

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;

  ngAfterViewInit(): void {
    if(!this.divMap) throw new Error('Method not implemented.');

    this.map = new Map({
      accessToken: 'pk.eyJ1IjoibmhpZGFsZ28iLCJhIjoiY2xydXN4cmZiMGxmcDJqcDF1dmZvMXJ2dSJ9.B4NFxW9NxiC3qwcluSw4UQ',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners();

  }

  mapListeners(){
    if(!this.map) throw new Error('Mapa no inicializado.');
    this.map.on('zoom', () => {
      this.zoom = this.map!.getZoom();
    })
    this.map.on('zoomend', () => {
      if(this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    })
  }

  zoomIn(){
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }

  changeZoom(value: string){
   this.zoom = Number(value);
   this.map?.zoomTo(this.zoom);
  }

}
