import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ffxiv-quest-maker';
  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      type: 'quest-start',
      questTitle: "I Feel Like I've Been Here Before",
      description:
        "Garnet ultima ultima weapon onion knight maiden's kiss osmose dragon wrist Fenir blue mage. Biggs ultima ultima weapon dragon's hair sleeping bag bio survial vest Diabolos summoner. Lenna waterga magic pot missing score map curaga rubber suit Ifrit ranger. ",
    });
  }
}
