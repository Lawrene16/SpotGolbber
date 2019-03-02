import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController, Select, ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('mySelect') selectRef: Select;
  map: any;
  firedata = firebase.database().ref('/allpins');
  pinuid;
  showselect = false;
  pinspotas;
  colorofmarker;
  

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
  private actionSheetCtrl: ActionSheetController,
  public storage: Storage) {
    
  }



 

  fetchAllSpots(map){
    this.getdist();
    let load = this.loadingCtrl.create({
      content:'Loading full map...',
    });
    load.present();
    this.firedata.orderByChild('mjbmmn').once('value', (snapshot) => {
      let result = snapshot.val();
      let temparr = [];
      for (var key in result){
        temparr.push(result[key]);
      }
      load.dismiss();
      // Has gotten from firebase ready to load
      temparr.forEach(function(feature) {

        // Customize and pin all markers
        var customicon;
        switch(feature.pintype){
          case "Private Spot":
            customicon = '../../assets/icon/black.png';
            break;
          case "Spot for Lease":
             customicon = '../../assets/icon/yellow.png';
            break;    
          case "Spot for Sale":
              customicon = '../../assets/icon/green.png'     ; 
            break;
          case "Spot Purchased":
            customicon = '../../assets/icon/blue.png';
            break;  
        }
        
        var marker = new google.maps.Marker({
          position: feature.latLng,
          icon: customicon,
          draggable: true,  
          animation: google.maps.Animation.DROP,              
          map: map
        });

        var loc1 = new google.maps.LatLng(33.678, -116.243);
            var loc2 = marker.getPosition();
            var dist = loc2.distanceFrom(loc1);
            dist = dist/1000;

        var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 style="color:#ae6c2f;" id="firstHeading" class="firstHeading">'+feature.pintype+'</h1>'+
        '<div id="bodyContent">'+
        '<p ><h4>Locked | ' +dist+ ' km away </h4>' +
        'Details of this location are locked '+
        'purchase spot! to get the details '+
        '<br><br><button onclick="myfunc" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #ae6c2f;" >Purchase Spot</button>'+
        '<br><br><br><br>'+
        '</div>'+
        '</div>';
        

        marker.addListener('click', function() {
          if(map.getZoom() != 13 && map.getZoom() != 15){
            map.setZoom(15);
            map.panTo(marker.getPosition());
          }
          else if(map.getZoom() == 15){
            return new google.maps.InfoWindow({
              content: contentString
            }).open(map, marker);
          }
          else{
            map.setZoom(15);
            map.panTo(marker.getPosition());
          }
        });


      });
    });
  }















































  
  getdist(){
    google.maps.LatLng.prototype.distanceFrom = function(latlng) {
      var lat = [this.lat(), latlng.lat()]
      var lng = [this.lng(), latlng.lng()]
      var R = 6378137;
      var dLat = (lat[1]-lat[0]) * Math.PI / 180;
      var dLng = (lng[1]-lng[0]) * Math.PI / 180;
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat[0] * Math.PI / 180 ) * Math.cos(lat[1] * Math.PI / 180 ) *
      Math.sin(dLng/2) * Math.sin(dLng/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var d = R * c;
      return Math.round(d);
    }
  }

  ionViewDidLoad(){
    this.loadMap();
    // this.fetchAllSpots();
  }

  loadMap(){
    let latLng = new google.maps.LatLng(33.678, -116.243);
    let mapOptions = {
      center: latLng,
      zoom: 13,
      disableDefaultUI: true,
      mapTypeId: 'satellite'
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addDefaultMarker(this.map, latLng);
    this.fetchAllSpots(this.map);

    this.map.addListener('click', (e) => {
      this.selectRef.open();
      this.storage.set('position', e.latLng);

    });    
  }

  onChange(){
  
    this.storage.get('position').then((res) =>{
      
      switch(this.pinspotas){
        case "Private Spot":
          this.addMarkerOnClick(this.map, res);
           this.pinspotas = "d";
        
          break;
  
        case "Spot for Lease":
          this.addMarkerOnClick(this.map, res); 
          this.pinspotas = "d";
                   
          break;
  
        case "Spot for Sale":
          this.addMarkerOnClick(this.map, res);          
          break;
  
        case "Spot Purchased":
          this.addMarkerOnClick(this.map, res);          
          break;  
      }
    });

  }
  
  uploadSpotLocation(position, pintype){
    this.pinuid = this.firedata.push().key;
    // console.log(this.pinuid);
    this.firedata.child(this.pinuid).set({
      pinowner: firebase.auth().currentUser.uid,
      latLng: position,
      pintype: pintype
    }).then((res) =>{
      console.log(res);
    }).catch((err) =>{
      console.log(err);
    });
  }

  addMarkerOnClick(map, position){
      var customicon;
      switch(this.pinspotas){
        case "Private Spot":
          customicon = '../../assets/icon/black.png';
          break;
        case "Spot for Lease":
           customicon = '../../assets/icon/yellow.png';
          break;
        case "Spot for Sale":
            customicon = '../../assets/icon/green.png'     ; 
          break;
        case "Spot Purchased":
          customicon = '../../assets/icon/blue.png';
          break;  
      }
      var marker = new google.maps.Marker({
        position: position,
        icon: customicon,
        draggable: true,      
        map: map,
        animation: google.maps.Animation.DROP,        
        title: 'Hello World!'
      });

      // WHen marker is put newly
      marker.addListener('click', function() {
        if(map.getZoom() == 13){
          console.log("13");              
          map.setZoom(15);
          map.panTo(marker.getPosition());
        }
        else if(map.getZoom() == 15){
          console.log("15");     
          console.log(marker.distanceTo(position));
                 
        }
      });
      this.uploadSpotLocation(position, this.pinspotas);
      return marker;
  }

  addDefaultMarker(map, position){
    
    var defmarker = new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.BOUNCE,
      title: 'Hello World!'
    });

    defmarker.addListener('click', function() {
      map.setZoom(15);
      map.setCenter(defmarker.getPosition());
    });

    return defmarker;
  }

  openModal(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Are you sure you want to logout',
      buttons: [
        {
          text: 'Logout',
          role: 'destructive',
          handler: () => {
            // this.logoutFacebook();
            // this.logoutEmail();
            // this.logoutTwitter();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }


}
