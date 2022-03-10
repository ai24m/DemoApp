import { Pipe, PipeTransform } from '@angular/core';
import { count } from 'rxjs';
import { Word } from 'src/app/models/word/word.model';
import { WordService } from 'src/app/services/word-service/word.service';
import { RegexpcheckPipe } from '../regexpcheck/regexpcheck.pipe';

@Pipe({
  name: 'caseSensitive'
})

export class CaseSensitivePipe implements PipeTransform {
  transform(sentenceArr: string[], searchArr: string[]) {
    let includes: string[] = [];
    sentenceArr.forEach(word => {
      includes = searchArr.filter(value => value.split(word));
    })
    return includes.length;
  }
}
