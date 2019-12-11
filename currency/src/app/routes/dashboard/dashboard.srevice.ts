import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'node_modules/rxjs/'
//import { Observable } from '../../../../node_modules/';


//para controlar como funciona el dashboard de la pagina principal
/* const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Dolar', weight: 1.0000, symbol: 'USD' },
  { position: 2, name: 'Euro', weight: 4.0026, symbol: 'EUR' },
  { position: 3, name: 'Lempira', weight: 6.941, symbol: 'HNL' },
  { position: 4, name: 'Peso', weight: 9.0122, symbol: 'MXN' },
  { position: 5, name: 'Yen', weight: 10.811, symbol: 'JPY' },
  { position: 6, name: 'Colón', weight: 12.0107, symbol: 'SVC' },
  { position: 7, name: 'Quetzal', weight: 14.0067, symbol: 'QTR' },
  { position: 8, name: 'Colón', weight: 15.9994, symbol: 'CRC' },
  { position: 9, name: 'Balboa', weight: 18.9984, symbol: 'PAB' },
  { position: 10, name: 'Córdoba', weight: 20.1797, symbol: 'NIO' },
];
 */
const MESSAGES = [
  {
    img: 'assets/images/divisa/honduras.png',
    subject: 'Honduras',
    content: `Lempira (moneda) El Lempira (código ISO 4217: HNL) 
    es la unidad monetaria de Honduras desde 1931. Se divide en 100 centavos.`,
  },
  {
    img: 'assets/images/divisa/usa.png',
    subject: 'Estados Unidos',
    content: `El dólar estadounidense es la moneda oficial de Estados Unidos. Usualmente también
     se suele asociar el nombre empleado por la divisa con la circulación legal en ese país. `,
  },
  {
    img: 'assets/images/divisa/euro.jpg',
    subject: 'Europa',
    content: `El nombre de «euro» fue adoptado oficialmente el 16 de diciembre de 1995 en Madrid.
     ​ El euro se introdujo en los mercados financieros mundiales como una moneda de cuenta
      el 1 de enero de 1999, reemplazando la antigua Unidad Monetaria Europea `,
  },
  {
    img: 'assets/images/divisa/japon.png',
    subject: 'Japon',
    content: `El yen (円 símbolo monetario: ¥, ISO: JPY) es la unidad monetaria 
    utilizada en Japón​ y la tercera moneda más valorada en el mercado de divisas 
    después del dólar estadounidense y el euro.`,
  },
  {
    img: 'assets/images/divisa/mexico.png',
    subject: 'Mexico',
    content: `El peso mexicano fue la primera moneda en el mundo en utilizar el signo "$", 
    incluso antes que el dólar de Estados Unidos, el cual más tarde lo adoptó para su propio uso.`,
  },
];


@Injectable()
export class DashboardService {
  private urlback = 'http://9f21ecb1.ngrok.io/';

  currencys: any[];
   charts = [
    {
      chart: {
        height: 350,
        type: 'area',
        toolbar: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      series: [
        {
          name: '{{currency[2].nombreMoneda}}',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'Dolar',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      xaxis: {
        type: 'datetime',
        categories: [
          '2019-11-24T00:00:00',
          '2019-11-24T01:30:00',
          '2019-11-24T02:30:00',
          '2019-11-24T03:30:00',
          '2019-11-24T04:30:00',
          '2019-11-24T05:30:00',
          '2019-11-24T06:30:00',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
      },
    },
    {
      chart: {
        height: 350,
        type: 'radar',
      },
      series: [
        {
          name: 'Cambio por moneda',
          data: [20, 100, 40, 30, 50, 80, 33,1],
        },
      ],
      labels: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado','hola'],
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColor: '#e9e9e9',
            fill: {
              colors: ['#f8f8f8', '#fff'],
            },
          },
        },
      },
      colors: ['#FF4560'],
      markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#FF4560',
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: (val: number) => {
            return val;
          },
        },
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: (val: number, i: number) => {
            if (i % 2 === 0) {
              return val;
            } else {
              return '';
            }
          },
        },
      },
    },
  ];

  constructor(private http: HttpClient) {}
  getCurrency():Observable<any> {
   /*  console.log(this.http.get('http://localhost:8000/currencyHistory?result=3')); */
    /* return this.http.get('http://ce1132f2.ngrok.io/currencyHistory/?result:3'); */
    return this.http.get(this.urlback+'currency/HNL');
  }
  getCurrencies():Observable<any> {
     return this.http.get(this.urlback+'currencies');
   }

   getCurrencies2(){
    this.http.get(this.urlback+'currencies').subscribe(
      data => { // Success
        //this.currencys = data['result'];
       this.currencys = data['result'];
        console.log(data['result']);
        
      },
      (error) => {
        console.error(error);
      }
    );
  }

 /*   this.dashboardSrv.getCurrency().subscribe(
    data => { // Success
      //this.currencys = data['result'];
     this.data = data['result'];
      console.log(data['result']);
      
    },
    (error) => {
      console.error(error);
    }
  ); */

  getData() {
    //return ELEMENT_DATA;
  }

  getMessages() {
    return MESSAGES;
  }

  getCharts() {
    return this.charts;
  }
}
