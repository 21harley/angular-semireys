import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-semireys';
  cards = [
    {
      title: 'Card 1',
      imageURL: 'https://via.placeholder.com/150',
      altImg: 'Card 1',
      content: 'This is the content of card 1',
      description: 'Description of card 1',
    },
    {
      title: 'Card 2',
      imageURL: 'https://via.placeholder.com/150',
      altImg: 'Card 2',
      content: 'This is the content of card 2',
      description: 'Description of card 2'
    },
    {
      title: 'Card 3',
      imageURL: 'https://via.placeholder.com/150',
      altImg: 'Card 3',
      content: 'This is the content of card 3',
      description: 'Description of card 3'
    }
  ];
}
