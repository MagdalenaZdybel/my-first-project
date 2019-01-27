import { Component } from '@angular/core';

@Component({
  selector: 'app-root-mine',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project-in-Angular';

  getAge(){
    return 2019 - this.mine.age;
  }

  mine= {
    name: 'Magda',
    age: 1978,
    company:{
      name: 'Magda Zdybel'
    }
  }
}
