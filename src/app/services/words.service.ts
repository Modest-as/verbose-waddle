import { Injectable } from '@angular/core';

@Injectable()
export class WordsService {

  private words: string[] = [
    `The`,
    `taste`,
    `of`,
    `rain`,
    `Why`,
    `kneel?`
  ];

  private current: number = 0;

  constructor() { }

  getNext(): string {
    if (this.current >= this.words.length) {
      this.current = 0;
    }

    let tmp = this.words[this.current];

    this.current += 1;

    return tmp;
  }
}
