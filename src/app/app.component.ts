import { Component } from '@angular/core';
import { WordsService } from './services/words.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  private word: string;

  constructor(private wordsService: WordsService) { }

  ngOnInit(): void {
    this.updateWord();
  }

  updateWord() {
    setInterval(() => {
      this.word = this.adjustSpacing(this.wordsService.getNext());
    }, 1000);
  }

  adjustSpacing(word: string) {
    let offset: number = 7;

    let len: number = word.length;

    let floor: number = Math.floor(len * 0.5);

    let pad = offset + floor;

    let tmp = word.padStart(pad, '_');

    let off: number = 0;

    if (len % 2 == 0) {
      off = -1;
    }

    if (len < pad) {
      off += pad - len;
    }

    let firstPart: string = tmp.substr(0, off + floor);
    let secondPart: string = tmp.substr(off + floor, 1);
    let thirdPart: string = tmp.substr(off + floor + 1);

    return `${firstPart}<span>${secondPart}</span>${thirdPart}`
  }
}
