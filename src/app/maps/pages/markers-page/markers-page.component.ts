import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

interface MarkerAndColor{
  color: string;
  marker: Marker;
}

interface PlainMarker{
  color: string;
  lngLat: number[];
}

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
  public markers: MarkerAndColor[] = [];

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

    this.readFromLocalStorage();

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Nic';


    // const marker = new Marker({
    //   color: 'purple',
    //   element: markerHtml
    // })
    //   .setLngLat( this.lngLat )
    //   .addTo( this.map )

  }

  createMarker(){
    if(!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, color);
  }

  addMarker( lngLat: LngLat, color: string ){
    if(!this.map) return;
    const marker = new Marker({
      color: color,
      draggable: true
    })
    .setLngLat( lngLat)
    .addTo( this.map )

    this.markers.push({ color, marker});
    this.saveToLocalStorage();

    marker.on('dragend', () => {
      this.saveToLocalStorage();
    })

  }

  deleteMarker(i: number){
    this.markers[i].marker.remove();
    this.markers.splice( i, 1 );
    this.saveToLocalStorage();
  }

  flyTo( marker: MarkerAndColor ){
    const mrkr: Marker = marker.marker;
    this.map?.flyTo({
      zoom: 14,
      center: mrkr.getLngLat()
    })
  }

  saveToLocalStorage(){
    const plainMarkers: PlainMarker[] = this.markers.map( ({color, marker}) => {
      return{
        color,
        lngLat: marker.getLngLat().toArray()
      }
    })
    localStorage.setItem('plainMarkers', JSON.stringify( plainMarkers ) )
  }

  readFromLocalStorage(){

    const plainMarkerString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse( plainMarkerString );

    plainMarkers.forEach( ({ color, lngLat }) => {
      const [ lng, lat ] = lngLat;
      const coords = new LngLat( lng, lat);
      this.addMarker( coords, color);
    })


  }

}
