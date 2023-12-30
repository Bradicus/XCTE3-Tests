import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  id:string  = '';
  constructor(route: ActivatedRoute)
  {
    route.paramMap.subscribe(params => {
      let idVal = params.get('id');
      this.id = idVal !== null ? idVal : '';
  });
  }
}
