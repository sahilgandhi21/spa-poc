import { Component, ChangeDetectorRef, Inject } from '@angular/core';
import e from '../event-bus';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({ 
  selector: 'AngularApp',
  templateUrl: '/src/angular/index.component.html'
})
export default class AngularApp {
  message: string = "Message from React should appear here 😱";
  listData: any[] = [];

  constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef, 
  @Inject(HttpClient)private http: HttpClient) {
   this.getData();
  }

  getData() {
    this.http.get('https://reqres.in/api/users').subscribe(results => 
    this.listData =  results['data']
    );
  }

  ngAfterContentInit() {
    e.on('message', message => {
      this.message = message.text
      this.changeDetector.detectChanges()
      this.returnMessageToReactWhenReceived()
    })
  }

  returnMessageToReactWhenReceived() {
    e.emit('received', { text: 'Woohoo! Hello from Angular! 🎉' })
  }
}
