import { Component, Input, OnChanges, OnInit } from '@angular/core';

export const DEFAULT_CONFIG: QuestConfig = {
  type: 'quest-start',
  questTitle: "I Feel Like I've Been Here Before",
  description: 'Alphinaud is at it again...',
  // description: "Garnet ultima ultima weapon onion knight maiden's kiss osmose dragon wrist Fenir blue mage. Biggs ultima ultima weapon dragon's hair sleeping bag bio survial vest Diabolos summoner. Lenna waterga magic pot missing score map curaga rubber suit Ifrit ranger."
};
export interface QuestConfig {
  readonly type: 'quest-start' | 'msq-start';
  readonly questTitle: string;
  readonly description: string;
}
@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss'],
})
export class QuestComponent implements OnInit, OnChanges {
  @Input() public config: Partial<QuestConfig>;

  constructor() {
    this.config = DEFAULT_CONFIG;
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.config = {
      ...DEFAULT_CONFIG,
      ...this.config,
    };
  }
}
