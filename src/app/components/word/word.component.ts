import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Word } from 'src/app/models/word/word.model';
import { WordService } from 'src/app/services/word-service/word.service';


export interface DataModel {
  filter: string;
}

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  wordList: Word[] = []; //list of all words stored in db 
  search = new Word();
  sentence = new Word(); //string of sentence 
  showResults = false;
  searchForm!: FormGroup;
  resultsForm!: FormGroup;
  types: string[] = ['None', 'Case Sensitive', 'Full Word', 'All']

  passSentence = new Word();
  passSearch = new Word();

  constructor(
    private wordSvc: WordService,
    private formBuilder: FormBuilder
  ) { this.buildForm(); }

  ngOnInit(): void {
    this.getAllWords();
  }

  submit(search: Word, sentence: Word) {
    const inputSearch = this.wordList.find((w) => w.content == search.content);
    const inputSentence = this.wordList.find((w) => w.content == sentence.content);

    if (inputSearch) {
      this.wordSvc.show(inputSearch.id).subscribe({
        next: (success) => {
          this.passSearch = success;
          console.log(this.passSearch);
        }
      });
    } else {
      this.wordSvc.create(search).subscribe({
        next: (success) => {
          this.passSearch = success;
          console.log(this.passSearch);
        }
      });
    }
    if (inputSentence) {
      this.wordSvc.show(inputSentence.id).subscribe({
        next: (success) => {
          this.passSentence = success;
          console.log(this.passSentence);
        }
      });
    } else {
      this.wordSvc.create(sentence).subscribe({
        next: (success) => {
          this.passSentence = success;
          console.log(this.passSentence);
        }
      });
    }
  }

  buildForm() {
    this.searchForm = new FormGroup({
      sentenceInput: new FormControl(this.sentence.content, [
        Validators.required,
        Validators.maxLength(1000)
      ]),
      searchInput: new FormControl(this.search.content, [
        Validators.required,
        Validators.maxLength(1000)
      ])
    });
    this.resultsForm = this.formBuilder.group({
      filter: [null]
    });
  }

  submitSearchForm() {
    // this.search = <Word>this.searchForm.get(this.sentence.input);
  }

  getByFilter() {
    return this.resultsForm.controls['filter'].value;
  }

  getAllWords = () => {
    this.wordSvc.index().subscribe({
      next: (list) => {
        this.wordList = list;
        console.log(this.wordList);
      },
      error: (err) => {
        console.error(
          'WordComponent.reloadWordList(): error retrieving word list'
        );
        console.error(err);
      },
    });
  }

  update() {
    this.passSearch.searched += 1;
    this.passSentence.searched += 1;

    this.wordSvc.update(this.passSearch, this.passSearch.id).subscribe({
      next: (updated) => {
        this.passSearch = updated;
        console.log(this.passSearch);
      }
    });
    this.wordSvc.update(this.passSentence, this.passSentence.id).subscribe({
      next: (updated) => {
        this.passSentence = updated;
        console.log(this.passSentence)
      }
    })
  }
}
