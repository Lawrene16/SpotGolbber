import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
declare var Stripe;

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  stripe = Stripe('pk_test_FIrkWSsjvlx9TKX0hm3tAyiO');
  card: any;
  baseUrl = "http://caurix.net/stripeApi/stripe-php-6.30.4/spotgolbber.php"


  constructor(public navCtrl: NavController,
    private http: HttpClient,
     public navParams: NavParams) {
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



      this.stripe.createSource(this.card).then(result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {

            this.stripe.createToken(this.card).
            then((res) =>{
            console.log(res.token.id);
            // console.log(res.token.id);            
            // this.makePost(res.token.id);
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


    this.http.post(url, postData).subscribe((data) =>{
      console.log(data);
    });
  }


  //   pay(amount){
  //     this.stripe.setPublishableKey('[mytoken]');
  //     this.stripe.createCardToken(this.cardinfo).then((token) => {
  //       var headers = new Headers();
  //       headers.append('Content-Type', 'application/json');
  //       var body = {
  //         stripetoken: token
  //       };
 
  //       var myData = JSON.stringify({stripetoken: token});
 
  //       var url = 'http://192.168.1.2/service/pago.php';
  //       this.http.post(url, body, {headers: headers})
  //       .subscribe( (data) =>{
  //         if(data){
  //           console.log(data);
  //         }
  //       });
  //     })
  //   }
  // }
   
}
