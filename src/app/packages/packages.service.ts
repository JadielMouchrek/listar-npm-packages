import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PackagesService {


   constructor(private http : HttpClient) {  }

   recuperarPackagesNpm(searchValue: string = 'term'):Observable<any>{
    return this.http.get(`https://npm.io/api/v1/search?query={${searchValue === ''? 'term' : searchValue}}&keyword:portuguese`);
   }


}



