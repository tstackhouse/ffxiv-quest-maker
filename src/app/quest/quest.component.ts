import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss'],
})
export class QuestComponent implements OnInit {
  @Input() public type: 'quest-start' | 'msq-start' = 'quest-start';
  @Input() public questTitle = 'Quest Title';
  @Input() public description = 'Alphinaud is at it again...';

  constructor() {}

  ngOnInit(): void {}
}
