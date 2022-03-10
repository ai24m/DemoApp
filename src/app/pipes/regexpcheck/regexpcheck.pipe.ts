import { Pipe, PipeTransform } from '@angular/core';
import { Word } from 'src/app/models/word/word.model';

@Pipe({
  name: 'regexpcheck'
})
export class RegexpcheckPipe implements PipeTransform {
  whitespaceGlobal = /\s/g;
  whitespace = /\s/;
  specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  transform(array: Word): string[] {
    //check search str for specchar and match to specchar in arr
    // let specChars = array.content.split(this.specialChars);
    // let wsGlobal = array.content.split(this.whitespaceGlobal);
    let arr: string[] = [];
    if (array.content.split(this.whitespaceGlobal).length <= 2) {
      console.log(array.content)
      arr.push(array.content);
      return arr;
    } else if (array.content.split(this.whitespaceGlobal).length > 2) {
      arr = array.content.split(this.whitespaceGlobal)
    }
    return arr;
  }
}
