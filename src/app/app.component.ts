import { Component } from '@angular/core';
import { DEFAULT_CONFIG, QuestConfig } from './quest/quest.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ffxiv-quest-maker';
  questData: QuestConfig = DEFAULT_CONFIG;

  constructor() {}
}
