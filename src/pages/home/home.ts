import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.loadMap();
    console.log()
  }

  loadMap(){
    let latLng = new google.maps.LatLng(33.678, -116.243);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      disableDefaultUI: true,
      mapTypeId: 'hybrid'
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addDefaultMarker(this.map, latLng);

    this.map.addListener('click', (e) => {
      this.presentpopover();
      this.addMarkerOnClick(this.map, e.latLng);
    });
  }

  presentpopover(){
    console.log('map clicked');
  }

  addMarkerOnClick(map, position){
    return new google.maps.Marker({
      position: position,
      draggable: true,      
      map: map,
      title: 'Hello World!'
    });
  }

  addDefaultMarker(map, position){
    return new google.maps.Marker({
      position: position,
      map: map,
      title: 'Hello World!'
    });
  }

}
