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
            this.post('100000', res.token.id);

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
    // this.http
    //   .put(this.baseUrl, {params: new HttpParams().set('stripeToken', cardtoken),
    //     // headers: new HttpHeaders().set('Authorization', 'some-token')
    //   }).retry(3)
    //   .subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log(err.error);
    //     console.log(err.name);
    //     console.log(err.message);
    //     console.log(err.status);
    //   }
    // );

    let params={amount:10000, currency:'USD',description:'Test', token:cardtoken};
    
    this.http.post(this.baseUrl, JSON.stringify(params),{responseType: 'text'})
        .subscribe(res => {
        console.log(res);
          });
            

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


        }



        post(amount, tokenid) {
          let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
          });
          // let options = new RequestOptions({
          //   headers: headers
          // });
          // TODO: Encode the values using encodeURIComponent().
          let body = 'amount=' + amount + '&token=' + tokenid;

          return this.http.post(this.baseUrl, body)
            .toPromise()
            .then((res) => {
              console.log(res);
            }).catch((err) => {
              console.log(err);
            })
        }
      
        handleError(error) {
          console.log(error);
          return error.json().message || 'Server error, please try again later';
        }
        

}
