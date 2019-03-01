import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Select } from 'ionic-angular';
import { Storage } from '@ionic/storage';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('mySelect') selectRef: Select;
  map: any;
  showselect = false;
  pinspotas;
  colorofmarker;
  


  constructor(public navCtrl: NavController,
  public storage: Storage) {
  
  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
    let latLng = new google.maps.LatLng(33.678, -116.243);
    let mapOptions = {
      center: latLng,
      zoom: 13,
      disableDefaultUI: true,
      mapTypeId: 'hybrid'
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addDefaultMarker(this.map, latLng);


    this.map.addListener('click', (e) => {
      this.selectRef.open();
      this.storage.set('position', e.latLng);

    });    
  }

  onChange(){
  
    this.storage.get('position').then((res) =>{
      
      switch(this.pinspotas){
        case "Private":
          this.addMarkerOnClick(this.map, res);
           this.pinspotas = "d";
        
          break;
  
        case "Lease":
          console.log("Lease");
          this.addMarkerOnClick(this.map, res); 
          this.pinspotas = "d";
                   
          break;
  
        case "Sale":
          console.log("Sale");
          this.addMarkerOnClick(this.map, res);          
          break;
  
        case "Purchased":
          console.log("Purchased");
          this.addMarkerOnClick(this.map, res);          
          break;  
      }
    });

  }

  addMarkerOnClick(map, position){
      var customicon;
      switch(this.pinspotas){
        case "Private":
          customicon = '../../assets/icon/black.png';
          break;
  
        case "Lease":
           customicon = '../../assets/icon/yellow.png';
          break;
  
        case "Sale":
            customicon = '../../assets/icon/green.png'     ; 
          break;
  
        case "Purchased":
          customicon = '../../assets/icon/blue.png';
          break;  
      }
      
      var marker = new google.maps.Marker({
        position: position,
        icon: customicon,
        draggable: true,      
        map: map,
        title: 'Hello World!'
      });

      marker.addListener('click', function() {
        map.setZoom(15);
        map.setCenter(marker.getPosition());
      });


      return marker;
  }

  addDefaultMarker(map, position){
    var defmarker = new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Hello World!'
    });

    defmarker.addListener('click', function() {
      map.setZoom(15);
      map.setCenter(defmarker.getPosition());
    });

    return defmarker;
  }

}
