import { Component, TemplateRef } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DEFAULT_CONFIG, QuestConfig } from './quest/quest.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ffxiv-quest-maker';
  questData: QuestConfig = DEFAULT_CONFIG;

  constructor(private readonly bottomSheet: MatBottomSheet) {}

  openEditSheet(sheet: TemplateRef<any>) {
    this.bottomSheet.open(sheet);
  }

  closeSheet() {
    this.bottomSheet.dismiss();
  }
}
