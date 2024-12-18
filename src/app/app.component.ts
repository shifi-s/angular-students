import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowStudentsListComponent } from "./show-students-list/show-students-list.component";
import { InformationPopupComponent } from "./information-popup/information-popup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowStudentsListComponent, InformationPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new_angular';
}
