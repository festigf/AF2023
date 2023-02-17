import { Component, OnInit } from '@angular/core';
import { BarService } from '../services/bar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private barService:BarService) { }

  ngOnInit() {
  }


}
