import { Word } from 'src/app/models/word/word.model';
import { CaseSensitivePipe } from './casesensitive.pipe';

describe('CaseSensitivePipe', () => {
  const sentence = ["Coders", "who", "code", "don't", "always", "eat", "cod.", "Exclaimed", "the", "coder", "who", "codes", "CODE."];
  const string = ["CODE."]
  const string2 = ['Code']

  const pipe = new CaseSensitivePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Parameters for CS Filter + CODE.', () => {
    expect(pipe.transform(sentence, string)).toBe(1);
  });

  it('Parameters for CS Filter + Code', () => {
    expect(pipe.transform(sentence, string2)).toBe(1);
  });
});

