import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SubscriptionLike } from 'rxjs';
import { DEFAULT_CONFIG, QuestConfig } from '../quest/quest.component';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.scss'],
})
export class ConfigFormComponent implements OnInit, OnDestroy {
  form: FormGroup;

  @Input() questData: QuestConfig = DEFAULT_CONFIG;
  @Output() questDataChange = new EventEmitter<QuestConfig>();

  private subscription: SubscriptionLike;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      type: this.questData.type,
      questTitle: this.questData.questTitle,
      description: this.questData.description,
    });

    this.subscription = this.form.valueChanges.subscribe((val) => {
      this.questDataChange.emit(val);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
