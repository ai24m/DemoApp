import { Pipe, PipeTransform, ɵbypassSanitizationTrustStyle } from '@angular/core';
import { Word } from 'src/app/models/word/word.model';
import { WordService } from 'src/app/services/word-service/word.service';
import { CaseSensitivePipe } from '../case-sensitive/casesensitive.pipe';
import { FullWordPipe } from '../full-word/fullword.pipe';
import { RegexpcheckPipe } from '../regexpcheck/regexpcheck.pipe';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  wordSvc!: WordService;

  transform(sentence: Word, filterCS: boolean, filterFW: boolean, search: Word): number {
    //change inputs into arrays and check for whitespace
    let regexcheck = new RegexpcheckPipe();
    let count = 0;

    let sentenceArr: string[] = [];
    let searchArr: string[] = [];

    //prelim check of matches if there are regex 
    sentenceArr = regexcheck.transform(sentence);
    console.log(sentenceArr)
    searchArr = regexcheck.transform(search);
    console.log(searchArr)

    //filterAll: true for both casesensitive and fullword search 
    if (filterCS === true || filterFW === true) {
      return this.transformFilterAll(sentenceArr, searchArr, filterCS, filterFW);
    }

    //convert all strings into lowercase before matching 
    let lowerSentenceArr = this.lowerCase(sentenceArr);
    let lowerSearchArr = this.lowerCase(searchArr);
    console.log(lowerSentenceArr);
    console.log(lowerSearchArr);

    // count = lowerSentenceArr.filter(s => s === 'true').length;
    // console.log(count);

    if (lowerSearchArr.length === 1) {
      // if (lowerSearchArr.includes(' ')) {
      //   let temp: string[] =[];
      //   temp = lowerSearchArr.filter(sentence.content.split(search.content));
      //   return temp.length;
      // }
      let includes: string[] = [];
      lowerSentenceArr.forEach(value1 => {
        // lowerSearchArr.forEach((value2) => {
        if (value1.includes(lowerSearchArr[0])) {
          includes.push(value1);
          console.log(includes);
        }
        // })
      })
      return includes.length;
    } else {

    }

    for (let sentArr of lowerSentenceArr) {
      for (let searchArr of lowerSearchArr) {
        if (searchArr.includes('space')) {
          if (sentence.content.toLowerCase().includes(search.content.replace('space', ' '))) {
            count++;
          } return count;
        }
        if (sentArr.includes(searchArr)) {
          count++;
        }
      }
    }
    return count;

  }


  // findMatches(sentenceArr: string[], searchArr: string[]) {
  //   return sentenceArr.filter(value => searchArr.includes(value)).filter((value, index, self) => self.indexOf(value) === index);
  // }

  transformFilterAll(sentenceArr: string[], searchArr: string[], filterCS: boolean, filterFW: boolean) {
    let caseSensitive = new CaseSensitivePipe();
    let cSCount = caseSensitive.transform(sentenceArr, searchArr);

    let fullWord = new FullWordPipe(); //case doesnt matter for fullword
    this.lowerCase(searchArr);
    this.lowerCase(sentenceArr);
    let fWCount = fullWord.transform(searchArr, sentenceArr);

    if (!filterFW) {
      return cSCount;
    }
    else if (!filterCS) {
      return fWCount;
    }
    return Math.min(cSCount, fWCount);
  }

  lowerCase(array: string[]) {
    let arrayLower = array.map(s => s.toLowerCase());
    return arrayLower;
  }
}


