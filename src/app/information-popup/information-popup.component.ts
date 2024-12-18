import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-information-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './information-popup.component.html',
  styleUrl: './information-popup.component.css',
})
export class InformationPopupComponent {

show(message:string)
{
  this.whatToShow=message
}
whatToShow:string=""
}
