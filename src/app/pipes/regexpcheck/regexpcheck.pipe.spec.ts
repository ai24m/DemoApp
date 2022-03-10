import { Word } from 'src/app/models/word/word.model';
import { RegexpcheckPipe } from './regexpcheck.pipe';

describe('RegexpcheckPipe', () => {
  const sentence = "Coders who code don't always eat cod. Exclaimed the coder who codes CODE.";
  const phrase = 'i am me';
  const arr = ['Coders', 'who', 'code', "don't", "always", 'eat', 'cod.'];

  const test1 = new Word();
  test1.content = "CODE.";

  const test2 = new Word();
  test2.content = "don't always";

  const test3 = ["don't", 'always']

  const pipe = new RegexpcheckPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  // it('transform for CODE.', () => {
  //   expect(pipe.transform(phrase)).toEqual(['i', 'am', 'me']);
  // });

  // it("checkSearchRegEx for CODE.", () => {
  //   expect(pipe.transform(test1)).toBeGreaterThanOrEqual(1);
  // });
});
