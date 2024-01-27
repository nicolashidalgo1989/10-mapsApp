import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 13;
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

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Nic';


    // const marker = new Marker({
    //   color: 'purple',
    //   element: markerHtml
    // })
    //   .setLngLat( this.lngLat )
    //   .addTo( this.map )

  }

}
