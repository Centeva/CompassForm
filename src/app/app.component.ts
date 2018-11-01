import { Component, OnInit } from '@angular/core';
import { CompassForm } from 'projects/compass-form/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CompassFormApp';

  compassForm: CompassForm<any>;

  ngOnInit() {
    this.compassForm = new CompassForm({});
  }
}
