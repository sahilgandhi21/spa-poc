import { Component, ChangeDetectorRef, Inject } from '@angular/core';
import e from '../event-bus';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({ 
  selector: 'AngularApp',
  templateUrl: '/src/angular/angular.component.html'
})
export default class AngularApp {
  // message: string = "Message from React should appear here 😱";
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

  ngAfterContentInit() {
    e.on('message', message => {
      //this.message = message.text
      this.changeDetector.detectChanges()
      this.returnMessageToReactWhenReceived()
    })
  }

  returnMessageToReactWhenReceived() {
    e.emit('received', { text: 'Woohoo! Hello from Angular! 🎉' })
  }
}
