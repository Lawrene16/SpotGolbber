import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController,
  Content,
   LoadingController,
    Select,
    ToastController,
     ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
import { PaymentPage } from '../payment/payment';
import { MbscModule, MbscFormOptions } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('mySelect') selectRef: Select;
  @ViewChild('content') pageBody: Content;

  map: any;
  firedata = firebase.database();
  pinuid;
  showselect = false;
  pinspotas;
  data;
  colorofmarker;
  addmarkerInfoWindow;
  dollarprice:any;
  spotdesc:any;
  // showOne = false;
  showTwo = false;
  showThree = false;
  showFour = false;
  showOne = false;
  // showTwo = true;
  // showThree = true;
  // showFour = true;
  spotList:Array<any>;
  loadedSpotList:Array<any>;
  privateSpotList:Array<any> = [];  
  leaseSpotList:Array<any> = []; 
  saleSpotList:Array<any> = [];  
  purchasedSpotList:Array<any> = []; 

  formSettings: MbscFormOptions = {
      lang: 'fr',
      theme: 'ios'
  }
  listviewSettings: any = {
      swipe: false,
      enhance: true
  }


  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public ngZone: NgZone,
    private actionSheetCtrl: ActionSheetController,
    public storage: Storage) {

      // this.pageBody.scrollToBottom(300);

    (<any>window).ionicPageRef = {zone: this.ngZone,component: this};

    this.firedata.ref('/allpins').on('value', countryList => {
      let countries = [];
      
      countryList.forEach( country => {
        countries.push(country.val());
        return false;
      });
      this.spotList = countries;
      this.loadedSpotList = countries;


      this.spotList.forEach(spot =>{
        // Load my private spots
        if(
          (spot.pintype == "Private Spot" && spot.pinowner == firebase.auth().currentUser.uid) ||
          (spot.pintype == "Private Spot" && spot.buyer == firebase.auth().currentUser.uid)
        ){
            this.privateSpotList.push(spot);
            // console.log(this.privateSpotList);
        }

        // Load lease spots
        if(
          (spot.pintype == "Spot for Lease" && spot.pinowner == firebase.auth().currentUser.uid) ||
          (spot.pintype == "Spot for Lease" && spot.buyer == firebase.auth().currentUser.uid)
        ){
            this.leaseSpotList.push(spot);
            // console.log(this.leaseSpotList);
        }

        // Load spots for sale
        if(
          (spot.pintype == "Spot for Sale" && spot.pinowner == firebase.auth().currentUser.uid) ||
          (spot.pintype == "Spot for Sale" && spot.buyer == firebase.auth().currentUser.uid)
        ){
            this.saleSpotList.push(spot);
            // console.log(this.saleSpotList);
        }

        // Load spots purchased
        if(
          (spot.pintype == "Spot Purchased" && spot.pinowner == firebase.auth().currentUser.uid) ||
          (spot.pintype == "Spot Purchased" && spot.buyer == firebase.auth().currentUser.uid)
        ){
            this.purchasedSpotList.push(spot);
            // console.log(this.purchasedSpotList);
        }


      });
    });

  }
  
  goToSpot(item){
    this.map.setZoom(15);
    console.log(item.latLng);
    this.map.panTo(item.latLng);
  }
  
  onInput(searchbar){
      // Reset items back to all of the items
        this.initializeItems();

        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;

        // if the value is an empty string don't filter the items
        if (!q) {
          return;
        }

        this.spotList = this.spotList.sort(function(a, b) {
          if (a.dist < b.dist)
            return -1;
          if (a.dist > b.dist)
            return 1;
          return 0;
        });

        this.spotList = this.spotList.filter((v) => {
          if(v.pintype && q) {
            if (v.pintype.toLowerCase().indexOf(q.toLowerCase()) > -1) {
              return true;
            }
            return false;
          }
        });

        console.log(q, this.spotList.length);      
  }

  initializeItems(): void {
    this.spotList = this.loadedSpotList;
  }

  openOptions(index){
    this.ngZone.run(() => {

        switch(index){
          case 3:
            if(this.showThree == false){
              this.showOne = false; this.showTwo = false;
              this.showFour = false;this.showThree = true;          
              this.pageBody.scrollToBottom(300);  
            }
            else{
              this.pageBody.scrollToTop().then(() =>{ 
                  this.showThree = false;  
              });        
            }
            break;

            case 4:
              if(this.showFour == false){
                this.showOne = false; this.showTwo = false;
                this.showThree = false;this.showFour = true;      
                this.pageBody.scrollToBottom(300);  
              }
              else{
                this.pageBody.scrollToTop().then(() =>{ 
                    this.showFour = false;  
                });        
              }
              break;
        }
    });

   
  }

  fetchAllSpots(map){

    let load = this.loadingCtrl.create({
      content:'Loading full map...',
    });
    load.present();
    this.firedata.ref('/allpins').orderByChild('mjbmmn').once('value', (snapshot) => {
      let result = snapshot.val();
      let temparr = [];
      for (var key in result){
        temparr.push(result[key]);
      }
      load.dismiss();
      // Has gotten from firebase ready to load
      temparr.forEach(function(firebaseSpot) {

        // Customize and pin all markers
        var customicon;
        switch(firebaseSpot.pintype){
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
          position: firebaseSpot.latLng,
          icon: customicon,
          // draggable: true,  
          animation: google.maps.Animation.DROP,              
          map: map
        });


        var othersContentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 style="color:#ae6c2f;" id="firstHeading" class="firstHeading">'+firebaseSpot.pintype+'</h1>'+
        '<div id="bodyContent">'+
        '<p ><h4>Rating - 4.82/5.0 (139)</h4>' +  
        '<p ><h4>Price - $' +firebaseSpot.price+ '</h4>' +                      
        '<p ><h4>Details - Locked | ' +firebaseSpot.dist+ ' km away </h4>' +
        'Details of this location are locked '+
        'purchase spot! to get the details '+
        '<br><br><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.purchaseSpot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #ae6c2f;" >Purchase Spot</button>'+
        '<br><br><br><br>'+
        '</div>'+
        '</div>';

        var ownerContentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 style="color:#ae6c2f;" id="firstHeading" class="firstHeading">You Pinned This Spot As A '+firebaseSpot.pintype+'</h1>'+
        '<div id="bodyContent">'+
        // '<p ><h4 style="color: #ae6c2f;">This spot belongs to you</h4>' +          
        '<p ><h4>Rating - 4.82/5.0 (139)</h4>' +  
        '<p ><h4>Price - $' +firebaseSpot.price+ '</h4>' +                      
        '<p ><h4>Details - ' +firebaseSpot.description+ '</h4>' +
        '<br><br><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.purchaseSpot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #ae6c2f;" >Remove Spot</button>'+
        '<br><br><br><br>'+
        '</div>'+
        '</div>';

        var buyerContentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 style="color:#ae6c2f;" id="firstHeading" class="firstHeading">This spot now belongs to you</h1>'+
        '<div id="bodyContent">'+
        // '<p ><h4 style="color: #ae6c2f;">This spot belongs to you</h4>' +          
        '<p ><h4>Rating - 4.82/5.0 (139)</h4>' +  
        '<p ><h4>Details - ' +firebaseSpot.description+ '</h4>' +
        '<p ><h4>Location - ' +firebaseSpot.dist+ 'km away</h4>' + 
        '<br><br><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.purchaseSpot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #ae6c2f;" >Remove Spot</button>'+
        '<br><br><br><br>'+
        '</div>'+
        '</div>';


        var othersinfowindow = new google.maps.InfoWindow({
          content: othersContentString
        });

        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        

        marker.addListener('click', (event) =>  {
            if(map.getZoom() != 13 && map.getZoom() != 15){
                map.setZoom(15);
                map.panTo(marker.getPosition());
            }
            else if(map.getZoom() == 15){

              if(firebaseSpot.pinowner == firebase.auth().currentUser.uid){
                othersinfowindow.setContent(ownerContentString);
                othersinfowindow.open(map, marker);
              }
              else if(firebaseSpot.pinowner != firebase.auth().currentUser.uid &&
               firebaseSpot.buyer != firebase.auth().currentUser.uid){
                othersinfowindow.setContent(othersContentString);
                othersinfowindow.open(map, marker);
              
                var firedata = firebase.database();
                firedata.ref('/tempstore').set({
                  clickedLat: event.latLng.lat(),
                  clickedLng: event.latLng.lng(),
                  clickeduid: firebaseSpot.pinuid,
                  clickedprice: firebaseSpot.price
                  
                }).then((res) =>{
                  // console.log(res);
                  this.presentToast("You have purchased this spot. Please wait for a minimum of 3 hours to confirm purchase");
                  othersinfowindow.close();
                }).catch((err) =>{
                  console.log(err);
                });
              
              }
              else if(firebaseSpot.buyer == firebase.auth().currentUser.uid){
                othersinfowindow.setContent(buyerContentString);
                othersinfowindow.open(map, marker);

                var end = new google.maps.LatLng(33.678, -116.243);
                var request = {
                  origin: marker.getPosition(),
                  destination: end,
                  travelMode: google.maps.TravelMode.DRIVING
                };

                directionsService.route(request, function(response, status) {
                  if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                    directionsDisplay.setMap(map);
                  } else {
                    // alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
                  }
                });

                othersinfowindow.addListener('closeclick', (e) =>{
                  console.log('it has been closed');
                  directionsDisplay.setMap(null);
                });               
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

  purchaseSpot(){

    this.firedata.ref('/tempstore').once('value').then((res) =>{
      console.log(res.val());

      this.navCtrl.push(PaymentPage, {
        price: res.val().clickedprice,
        spotuid: res.val().clickeduid,
        buyer: firebase.auth().currentUser.uid
      });
    });

  }

  addMarkerOnClick(map, position){
    this.getdist();
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
    var pinnedmarker = new google.maps.Marker({
      position: position,
      icon: customicon,
      // draggable: true,  
      animation: google.maps.Animation.DROP,              
      map: map
    });

    var loc1 = new google.maps.LatLng(33.678, -116.243);
        var loc2 = pinnedmarker.getPosition();
        var dist = loc2.distanceFrom(loc1);
        dist = dist/1000;

        this.storage.set('dist', dist);


    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 style="color:#ae6c2f;" id="firstHeading" class="firstHeading">'+this.pinspotas+'</h1>'+
        '<div id="bodyContent">'+
        '<p ><h4>This spot is ' +dist+ ' km away from your current location </h4>' +
        '<br><textarea id="price" class="taone" maxlength="5" placeholder="Price in $"></textarea>'+
        '<br><textarea id="desc" class="tatwo" placeholder="Describe Spot Here"></textarea>'+
        '<br><br><p align="center"><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.listspot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #ae6c2f; margin-right:20px;" >List as '+this.pinspotas+'</button></p>'+
        '<br>><br>'+
        '</div>'+
        '</div>';

      var ownerContentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 style="color:#ae6c2f;" id="firstHeading" class="firstHeading">You Pinned This Spot As A '+this.pinspotas+'</h1>'+
        '<div id="bodyContent">'+
        // '<p ><h4 style="color: #ae6c2f;">This spot belongs to you</h4>' +          
        '<p ><h4>Rating - 4.82/5.0 (139)</h4>' +  
        '<p ><h4>Price - $' +document.getElementById("price")+ '</h4>' +                      
        '<p ><h4>Details - ' +document.getElementById("desc")+ '</h4>' +
        '<br><br><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.purchaseSpot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #ae6c2f;" >Remove Spot</button>'+
        '<br><br><br><br>'+
        '</div>'+
        '</div>';    
    
    this.addmarkerInfoWindow = new google.maps.InfoWindow({
      content: contentString
    });
    
    map.setZoom(15);
    map.panTo(pinnedmarker.getPosition());
    this.addmarkerInfoWindow.open(map, pinnedmarker);



    pinnedmarker.addListener('click', (event) =>{
        if(map.getZoom() != 13 && map.getZoom() != 15){
          map.setZoom(15);
          map.panTo(pinnedmarker.getPosition());
        }
        else if(map.getZoom() == 15){
          // this.addmarkerInfoWindow.setContent(ownerContentString);
          // this.addmarkerInfoWindow.open(map, pinnedmarker);
  
          this.presentToast("We are taking time to verify this spot, Please wait for a few hours and try again");
                    
        }
        else{
          map.setZoom(15);
          map.panTo(pinnedmarker.getPosition());
        }
      });

      this.addmarkerInfoWindow.addListener('closeclick', (e) =>{
        console.log('it has been closed');
        pinnedmarker.setMap(null);
      });
    return pinnedmarker;
  }

  listspot(){

    this.dollarprice = document.getElementById("price");
    this.spotdesc = document.getElementById("desc");
    
    this.storage.get('position').then((res) =>{
      console.log(this.pinspotas);
      console.log(this.dollarprice.value);    

      this.storage.get('dist').then((distance) =>{
        this.pinuid = this.firedata.ref('/allpins').push().key;
        this.firedata.ref('/allpins').child(this.pinuid).set({
          pinowner: firebase.auth().currentUser.uid,
          price: this.dollarprice.value,
          pinuid: this.pinuid,
          dist: distance,
          buyer: 'a',
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

  ionViewWillEnter(){
    console.log('entered');   
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
    this.fetchAllSpots(this.map);

    this.map.addListener('click', (e) => {
      this.storage.set('position', e.latLng);

      if(this.addmarkerInfoWindow == undefined){
        console.log('no need to call close');
        this.selectRef.open();

        this.storage.get('position').then((res) =>{
          console.log(res);
        });
        
      }else{
        console.log('need to call close');
        this.selectRef.open();

        this.storage.get('position').then((res) =>{
          console.log(res);
        });
        
        // this.addmarkerInfoWindow.close();
      }
    });    
  }

  onChange(){
    this.storage.get('position').then((res) =>{
      this.addMarkerOnClick(this.map, res);
      console.log(res);
    });
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

  showMySpots(){
    this.data = [
      {
        title: 'Private Spots',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        icon: 'ios-add-circle-outline',
        showDetails: false
      },
      {
        title: 'Spots for Sale',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        icon: 'ios-add-circle-outline',
        showDetails: false
      },
      {
        title: 'Spots for Lease',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        icon: 'ios-add-circle-outline',
        showDetails: false
      },
      {
        title: 'Spots Purchased',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        icon: 'ios-add-circle-outline',
        showDetails: false
      },
    ]
  }
  
}
