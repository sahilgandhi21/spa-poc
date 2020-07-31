import { Component, ChangeDetectorRef, Inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({ 
  selector: 'AngularApp',
  templateUrl: '/src/angular/angular.component.html'
})
export default class AngularApp {
  listData: any[] = [];
  isLoading: boolean = true

  constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef, 
  @Inject(HttpClient)private http: HttpClient) {
   this.getData();
  }

  getData() {
    this.http.get('https://reqres.in/api/users?page=1').subscribe(results1 => 
      { 
        this.http.get('https://reqres.in/api/users?page=2').subscribe(results2 => 
        setTimeout(()=> {
          this.listData =  [...results1['data'], ...results2['data']];
          this.isLoading = false;
          }, 1500)
        );
      }
    );  
  }

}
