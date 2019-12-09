import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
//para controlar como funciona el dashboard de la pagina principal
const ELEMENT_DATA: PeriodicElement[] = [
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

const MESSAGES = [
  {
    img: 'assets/images/divisa/honduras.png',
    subject: 'Honduras',
    content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
  },
  {
    img: 'assets/images/divisa/usa.png',
    subject: 'Estados Unidos',
    content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
  },
  {
    img: 'assets/images/divisa/euro.jpg',
    subject: 'Europa',
    content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
  },
  {
    img: 'assets/images/divisa/china.jpg',
    subject: 'China',
    content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
  },
  {
    img: 'assets/images/divisa/mexico.png',
    subject: 'Mexico',
    content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
  },
];

@Injectable()
export class DashboardService {
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
          name: 'Euro',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'Dollar',
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
          name: 'Crecimiento por semana',
          data: [20, 100, 40, 30, 50, 80, 33],
        },
      ],
      labels: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'],
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

  getData() {
    return ELEMENT_DATA;
  }

  getMessages() {
    return MESSAGES;
  }

  getCharts() {
    return this.charts;
  }
}
