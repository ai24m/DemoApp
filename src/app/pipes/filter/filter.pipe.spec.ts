import { Word } from 'src/app/models/word/word.model';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const sentence = new Word();
  sentence.content = "Coders who code don't always eat cod. Exclaimed the coder who codes CODE.";

  const test1 = new Word();
  test1.content = "Cod";

  const test2 = new Word();
  test2.content = ".";

  const test3 = new Word();
  test3.content = "CODE.";

  const test4 = new Word();
  test4.content = "don't always";

  const pipe = new FilterPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Parameters for None Filter + Cod', () => {
    expect(pipe.transform(sentence, false, false, test1)).toBe(6);
  });

  it('Parameters for None Filter + .', () => {
    expect(pipe.transform(sentence, false, false, test2)).toBe(2);
  });

  it('Parameters for All Filters + Cod', () => {
    expect(pipe.transform(sentence, true, true, test1)).toBe(0);
  });

  it('Parameters for All Filters + CODE.', () => {
    expect(pipe.transform(sentence, true, true, test3)).toBe(1);
  });

  it("Parameters for All Filters + don't always.", () => {
    expect(pipe.transform(sentence, true, true, test4)).toBe(1);
  });
});
