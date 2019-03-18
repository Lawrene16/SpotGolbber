import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, LoadingController, NavParams } from 'ionic-angular';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import firebase from 'firebase';
declare var Stripe;

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  price;
  transactionfee;
  totalamount;
  load;
  spotuid;
  firedata = firebase.database();
  stripe = Stripe('pk_test_FIrkWSsjvlx9TKX0hm3tAyiO');
  card: any;
  baseUrl = "http://caurix.net/stripeApi/stripe-php-6.30.4/spotgolbber.php"


  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    
    private http: HttpClient,
     public navParams: NavParams) {

      this.price = this.navParams.get('price')*100;
      this.transactionfee = this.price * 0.1;
      this.totalamount = this.price + this.transactionfee;

      this.spotuid = this.navParams.get('spotuid');
      
      console.log(this.price);
      console.log(this.transactionfee);

      console.log(this.totalamount);
      
      console.log(this.spotuid);
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    this.setupStripe();
  }

  setupStripe(){

    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: style });

    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();

      this.load = this.loadingCtrl.create({
        content:'Processing your payment please wait...',
      });
      


      this.stripe.createSource(this.card).then(result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {

            this.load.present();
          
        

            this.stripe.createToken(this.card).
            then((res) =>{
            this.makePost(res.token.id);

          }).catch((err) =>{
              console.log(err);
          })
        }
      });
    });
  }

  makePost(cardtoken){

    var url = this.baseUrl;
    let postData = new FormData();
    postData.append('stripeToken', cardtoken);
    postData.append('spotUid', this.spotuid);
    postData.append('amount', this.totalamount);
    


    this.http.post(url, postData).subscribe((data) =>{
      var result:any = data;
      var buyersuid = this.firedata.ref('/allpins').child(this.spotuid).push().key;
      this.firedata.ref('/allpins').child(this.spotuid).
      child('buyers').child(buyersuid).set(firebase.auth().currentUser.uid).then((res) =>{

        this.firedata.ref('/allpayments').child(result.id).set(data).then((res) =>{
          console.log(res);  
          this.load.dismiss();
          this.presentToast('Payment Succesful'); 
        }).catch((err) =>{
          console.log(err);
        });
      }).catch((err) =>{
        console.log(err);
      });
    },(err) =>{
      console.log(err);
      this.load.dismiss();
      this.presentToast('Couldnt process payment');
    });
  }

  presentToast(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present().then((res) =>{
      this.navCtrl.pop();        
    });
  }

  goHome(){
    this.navCtrl.pop();
  }
   
}
