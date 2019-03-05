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
            // console.log(res.token);
            // console.log(res.token.id);            
            this.makePost(res.token);

          }).catch((err) =>{
              console.log(err);
          })

          // const ress = JSON.stringify(result);
          // console.log(JSON.parse(ress));
          // this.makePost(ress);
          // console.log(ress);
          // console.log(result);
          // alert(result);
        }
      });
    });
  }

  makePost(cardtoken){
    this.http
      .put('http://caurix.net/stripeApi/stripe-php-6.30.4/spotgolbber.php', {
        params: new HttpParams().set('stripeToken', cardtoken),
        // headers: new HttpHeaders().set('Authorization', 'some-token')
      }).retry(3)
      .subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
  }

//   pay(token){
//         var headers = new Headers();
//         headers.append('Content-Type', 'application/json');
//         var myData = JSON.stringify({stripetoken: token});
//         this.http.post(this.baseUrl, token)
//         .subscribe( (data) =>{
//             if(data){
//                 console.log(data);
//             }
//         },(err: HttpErrorResponse) => {
//           console.log(err.error);
//           console.log(err.name);
//           console.log(err.message);
//           console.log(err.status);
//         });
// }





  // sendPostToken(cardtoken){
  //   var headers = new Headers();
  //   var params = new HttpParams();

  //   params.append('stripeToken', cardtoken);
  // //   headers.append("Accept", 'application/json');
  // //   headers.append('Content-Type', 'application/json' );
  //   const requestOptions = new RequestOptions({ params: params });


  //   this.http.post("http://127.0.0.1:3000/customers", cardtoken, requestOptions)
  //     .subscribe(data => {
  //       console.log(data['_body']);
  //      }, error => {
  //       console.log(error);
  //     });
  // }
  
}
