import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageDetail } from './package-detail';
import {Location} from '@angular/common';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css'],
})


export class PackageDetails implements OnInit {
  package: any;

  constructor(private route: Router, private dataRoute: ActivatedRoute, private _location: Location) {}



  ngOnInit() {
    const key: string = this.dataRoute.snapshot.params['packageDetail'];
    this.package = JSON.parse(key);
  }

  goBack() {
    this._location.back();
  }
}
