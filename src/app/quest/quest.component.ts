import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  ResizeObserverService,
  RESIZE_OPTION_BOX,
} from '@ng-web-apis/resize-observer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  providers: [
    ResizeObserverService,
    {
      provide: RESIZE_OPTION_BOX,
      useValue: 'border-box',
    },
  ],
})
export class QuestComponent implements OnInit, OnChanges {
  @Input() public config: Partial<QuestConfig>;

  public scaleFactor$: Observable<number>;

  @ViewChild('questWindow')
  questWindow: ElementRef | undefined;

  constructor(@Inject(ResizeObserverService) observer: ResizeObserverService) {
    this.config = DEFAULT_CONFIG;

    this.scaleFactor$ = observer.pipe(
      map((entries) => {
        const viewport = entries[0].contentRect.width;
        const width = this.questWindow?.nativeElement?.offsetWidth || viewport;
        const scale = viewport < width ? viewport / width : 1;

        return scale;
      })
    );
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.config = {
      ...DEFAULT_CONFIG,
      ...this.config,
    };
  }
}
