using DemoApp.Models;
using System.Collections.Generic;

namespace DemoApp.Data
{
    public class WordRepo : IWordRepository
    {
        public Word GetWordById(int id)
        {
            return new Word { Id = 1, Content = "sample", Searched = 1 };
        }

        public IEnumerable<Word> GetAllWords()
        {
            var words = new List<Word>
            {
                new Word{ Id=2, Content="hi", Searched=1 },
                new Word{ Id=3, Content="hello", Searched=1 },
                new Word{ Id=4, Content="hey", Searched=1 }
            };
            return words;
        }

        public bool SaveChanges()
        {
            throw new System.NotImplementedException();
        }

        void IWordRepository.CreateWord(Word word)
        {
            throw new System.NotImplementedException();
        }

        void IWordRepository.UpdateWord(Word word)
        {
            throw new System.NotImplementedException();
        }

        void IWordRepository.DeleteWord(Word word)
        {
            throw new System.NotImplementedException();
        }
    }
}
