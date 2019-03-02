import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController, Select, ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import { UploaderProvider } from '../../providers/uploader/uploader';
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
  allpins = [];
  


  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
  private actionSheetCtrl: ActionSheetController,
  public storage: Storage) {
    
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
      mapTypeId: 'hybrid'
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

  fetchAllSpots(map){
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
      console.log(temparr);
      load.dismiss();


      // Has gotten from firebase ready to load
      temparr.forEach(function(feature) {

        // Customize and pin all markers
        var customicon;

        switch(feature.pintype){
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
          position: feature.latLng,
          icon: customicon,
          draggable: true,  
          animation: google.maps.Animation.DROP,              
          map: map
        });

        marker.addListener('click', function() {
          map.setZoom(15);
          map.setCenter(marker.getPosition());
        });


      });
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
        animation: google.maps.Animation.DROP,        
        title: 'Hello World!'
      });

      marker.addListener('click', function() {
        map.setZoom(15);
        map.setCenter(marker.getPosition());
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
