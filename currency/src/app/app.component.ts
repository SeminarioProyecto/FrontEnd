import { Component,OnInit, AfterViewInit } from '@angular/core';
import { PreloaderService } from './core/services/preloader.service';
//import font from '../assets/plugins/fontawesome-free/css/all.min.css';


@Component({
  selector: 'app-root',
  templateUrl: '<router-outlet></router-outlet>',
  styleUrls: ['styles.scss'] 
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private preloader: PreloaderService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.preloader.hide();
  }
}