import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'application-type-blog';
  private postList=[];
  name_component=(this.postList.length>0)?'list':'add';

  change_component(component: string) {
    this.name_component =  component
  }

  onClose() {
    this.name_component ='list'
  }
}
