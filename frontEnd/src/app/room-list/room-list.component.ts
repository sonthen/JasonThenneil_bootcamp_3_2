import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  
  constructor() {
    
   }

  ngOnInit() {

  }

  roomlist: Object[] = [
    { "nomor": "1", "kapasitas": "kapasitas1", "available" : 0, "harga":1000},
    { "nomor": "2", "kapasitas": "kapasitas2", "available" : 1, "harga":2000},
    { "nomor": "3", "kapasitas": "kapasitas3", "available" : 0, "harga":3000}
  ]

  
  }


