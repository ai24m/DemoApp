import { LowerCasePipe } from '@angular/common';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';
import { Word } from 'src/app/models/word/word.model';
import { WordService } from 'src/app/services/word-service/word.service';

@Pipe({
  name: 'fullWord'
})

export class FullWordPipe implements PipeTransform {
  transform(sentenceArr: string[], searchArr: string[]) {
    console.log(sentenceArr)
    console.log(searchArr)
    let matches: string[] = [];
    sentenceArr.forEach(value1 => {
      searchArr.forEach(value2 => {
        if (value1.includes(value2)) {
          if (value1.length === value2.length) {
            matches.push(value1);
          }
        }
      })
      // matches = searchArr.filter(value => value.length === word.length && value.includes(word));
    })
    console.log(matches);
    return matches.length;
  }
}