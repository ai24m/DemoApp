using DemoApp.Models;
using System.Collections.Generic;

namespace DemoApp.Data
{
    public interface IWordRepository
    {
        bool SaveChanges();

        IEnumerable<Word> GetAllWords();

        Word GetWordById(int id);

        void CreateWord(Word word);

        void UpdateWord(Word word);

        void DeleteWord(Word word);
    }
}
