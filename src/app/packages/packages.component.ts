import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackagesService } from './packages.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
})
export class PackagesComponent implements OnInit {
  packages:Array<any> = [];
  values = '';

  constructor(private packageService: PackagesService, private route: Router, private dataRoute: ActivatedRoute) {}

  recuperarDadosPackages(searchValue: string) {
    this.packageService.recuperarPackagesNpm(searchValue).subscribe(
      (response) => {
        this.packages.push(...response.list);

      },
      (err) => {
        console.log('Erro ao listar os comentarios', err);
      }
    );
  }

  ngOnInit() {
    this.recuperarDadosPackages("keyboard");
  }

  trackItem (index:any, item:any) {
    return this.packages ? this.packages : undefined;
  }


  clickPackageDetail(packageD: any){
    this.route.navigate(['/details', {
      packageDetail: JSON.stringify(packageD)
    }]);
  }

  onKey(event: KeyboardEvent) { // with type info
    this.values = (event.target as HTMLInputElement).value ;

    if(event.code === 'Enter'){
      this.packages.splice(0, this.packages.length);
      this.recuperarDadosPackages(this.values);
    }

  }
}
