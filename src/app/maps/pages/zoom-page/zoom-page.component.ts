import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Map, LngLat } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-page.component.html',
  styleUrl: './zoom-page.component.css'
})
export class ZoomPageComponent implements AfterViewInit, OnDestroy{


  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;
  public lngLat: LngLat = new LngLat(11.96, 57.71);
  public lng?: number;
  public lat?: number;

  constructor(){
    const { lng, lat } = this.lngLat;
    this.lng = lng;
    this.lat = lat;
  }

  ngAfterViewInit(): void {
    if(!this.divMap) throw new Error('Method not implemented.');

    this.map = new Map({
      accessToken: 'pk.eyJ1IjoibmhpZGFsZ28iLCJhIjoiY2xydXN4cmZiMGxmcDJqcDF1dmZvMXJ2dSJ9.B4NFxW9NxiC3qwcluSw4UQ',
      container: this.divMap?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: this.zoom,
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
    this.map.on('move', () => {
      this.lngLat = this.map!.getCenter();
      const { lng, lat } = this.lngLat;
      this.lng = lng;
      this.lat = lat;
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

  ngOnDestroy(): void {
    this.map?.remove();
  }

}
