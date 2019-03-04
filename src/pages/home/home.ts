import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController,
   LoadingController,
    Select,
    ToastController,
     ActionSheetController } from 'ionic-angular';
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
  addmarkerInfoWindow;
  dollarprice:any;
  spotdesc:any;
  pinnedmarker;
  

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public ngZone: NgZone,
  private actionSheetCtrl: ActionSheetController,
  public storage: Storage) {
    (<any>window).ionicPageRef = {
      zone: this.ngZone,
      component: this
  };
  
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
          // draggable: true,  
          animation: google.maps.Animation.DROP,              
          map: map
        });

        var loc1 = new google.maps.LatLng(33.678, -116.243);
            var loc2 = marker.getPosition();
            var dist = loc2.distanceFrom(loc1);
            dist = dist/1000;

        var othersContentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 style="color:#ae6c2f;" id="firstHeading" class="firstHeading">'+feature.pintype+'</h1>'+
        '<div id="bodyContent">'+
        '<p ><h4>Rating - 4.82/5.0 (139)</h4>' +  
        '<p ><h4>Price - $' +feature.price+ '</h4>' +                      
        '<p ><h4>Details - Locked | ' +dist+ ' km away </h4>' +
        'Details of this location are locked '+
        'purchase spot! to get the details '+
        '<br><br><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.purchaseSpot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #ae6c2f;" >Purchase Spot</button>'+
        '<br><br><br><br>'+
        '</div>'+
        '</div>';

        var ownerContentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 style="color:#ae6c2f;" id="firstHeading" class="firstHeading">You Pinned This Spot As A '+feature.pintype+'</h1>'+
        '<div id="bodyContent">'+
        // '<p ><h4 style="color: #ae6c2f;">This spot belongs to you</h4>' +          
        '<p ><h4>Rating - 4.82/5.0 (139)</h4>' +  
        '<p ><h4>Price - $' +feature.price+ '</h4>' +                      
        '<p ><h4>Details - ' +feature.description+ '</h4>' +
        '<br><br><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.purchaseSpot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #ae6c2f;" >Remove Spot</button>'+
        '<br><br><br><br>'+
        '</div>'+
        '</div>';


        var othersinfowindow = new google.maps.InfoWindow({
          content: othersContentString
        });
      
        marker.addListener('click', function() {
            if(map.getZoom() != 13 && map.getZoom() != 15){
                map.setZoom(15);
                map.panTo(marker.getPosition());
            }
            else if(map.getZoom() == 15){

              if(feature.pinowner == firebase.auth().currentUser.uid){
                othersinfowindow.setContent(ownerContentString);
                othersinfowindow.open(map, marker);
              }
              else{
                othersinfowindow.setContent(othersContentString);
                othersinfowindow.open(map, marker);
              }  
          }

          else{
            map.setZoom(15);
            map.panTo(marker.getPosition());
          }
        });
      });
    });
  }

  addMarkerOnClick(map, position){
    var customicon;
    // console.log(this.pinspotas);
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
    this.pinnedmarker = new google.maps.Marker({
      position: position,
      icon: customicon,
      // draggable: true,  
      animation: google.maps.Animation.DROP,              
      map: map
    });

    var loc1 = new google.maps.LatLng(33.678, -116.243);
        var loc2 = this.pinnedmarker.getPosition();
        var dist = loc2.distanceFrom(loc1);
        dist = dist/1000;

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 style="color:#ae6c2f;" id="firstHeading" class="firstHeading">'+this.pinspotas+'</h1>'+
        '<div id="bodyContent">'+
        '<p ><h4>This spot is ' +dist+ ' km away from your current location </h4>' +
        '<br><textarea id="price" class="taone" maxlength="5" placeholder="Price in $">0</textarea>'+
        '<br><textarea id="desc" class="tatwo" placeholder="Describe Spot Here">Here you can describe this spot more for other users of the app</textarea>'+
        '<br><br><p align="center"><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.listspot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #ae6c2f; margin-right:20px;" >List as '+this.pinspotas+'</button></p>'+
        '<br>><br>'+
        '</div>'+
        '</div>';
    
    this.addmarkerInfoWindow = new google.maps.InfoWindow({
      content: contentString
    });
    map.setZoom(15);
    map.panTo(this.pinnedmarker.getPosition());
    this.addmarkerInfoWindow.open(map, this.pinnedmarker);



    this.pinnedmarker.addListener('click', function() {
        if(map.getZoom() != 13 && map.getZoom() != 15){
          map.setZoom(15);
          map.panTo(this.pinnedmarker.getPosition());
        }
        else if(map.getZoom() == 15){
          
        }
        else{
          map.setZoom(15);
          map.panTo(this.pinnedmarker.getPosition());
        }
      });

      this.addmarkerInfoWindow.addListener('closeclick', (e) =>{
        console.log('it has been closed');
        this.pinnedmarker.setMap(null);
      });
    return this.pinnedmarker;
  }

  listspot(){

    this.dollarprice = document.getElementById("price");
    this.spotdesc = document.getElementById("desc");
    
    this.storage.get('position').then((res) =>{
      console.log(this.pinspotas);
      console.log(this.dollarprice.value);    
      

      this.pinuid = this.firedata.push().key;
      this.firedata.child(this.pinuid).set({
        pinowner: firebase.auth().currentUser.uid,
        price: this.dollarprice.value,
        description: this.spotdesc.value,
        latLng: res,
        pintype: this.pinspotas
      }).then((res) =>{
        this.addmarkerInfoWindow.close();
        this.presentToast('Spot pinned as ' + this.pinspotas + ' at $' + this.dollarprice.value );
        console.log(res);
      }).catch((err) =>{
        console.log(err);
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
      mapTypeId: 'hybrid'
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addDefaultMarker(this.map, latLng);
    this.fetchAllSpots(this.map);

    this.map.addListener('click', (e) => {
      this.storage.set('position', e.latLng);

      if(this.addmarkerInfoWindow == undefined){
        console.log('no need to call close');
        this.selectRef.open();
        
      }else{
        // this.addmarkerInfoWindow.close();
      }
    });    
  }

  onChange(){
    this.storage.get('position').then((res) =>{
      this.addMarkerOnClick(this.map, res);
    });
  }
  
  purchaseSpot(){
    console.log('Purchase Spot');
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

  presentToast(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  
}
