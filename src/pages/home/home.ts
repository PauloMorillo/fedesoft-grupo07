import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';
import { Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  bus: any;
  a: any;
  mu: Observable<any>;
  datas: Array <any>;

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.mu=this.httpClient.get('http://localhost/api.php')
    this.mu
    .subscribe(data => {
      console.log('my data:',data);
      this.datas=data;
    })
  }
  ionViewDidEnter() {
    this.loadmap();
    let bus: Array<any> = [[51.5,-1], [55.5,-1], [61.5,-1]];
    
  }
  
  
  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.soundlutions.com',
      maxZoom: 18
    }).addTo(this.map);
    var a=0;
    var bus: Array<any> = [[51.5,-1], [55.5,-1], [61.5,-1]];
    while (a<=this.datas.length-1){
      
      var b=this.datas[0+a];
      leaflet.marker(b).addTo(this.map);
      a=a+1;
      
    }
    
    
  }
    
  }

