import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() title: string = '';
    @Input() imageURL: string = '';
    @Input() altImg: string = '';
    @Input() content: string = '';
    @Input() description: string = '';
} 
