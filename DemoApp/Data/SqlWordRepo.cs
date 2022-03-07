using System.Collections.Generic;
using DemoApp.Models;
using System.Linq;
using System;

namespace DemoApp.Data
{
    //use db and return context from constructor dependency injection 
    public class SqlWordrepo : IWordRepository
    {
        private readonly WordContext _context;
        public SqlWordrepo(WordContext context)
        {
            _context = context;
        }

        public IEnumerable<Word> GetAllWords()
        {
            return _context.Words.ToList();
        }

        public Word GetWordById(int id)
        {
            return _context.Words.FirstOrDefault(p => p.Id == id);
        }

        public void CreateWord(Word word)
        {
            if (word == null)
            {
                throw new ArgumentNullException(nameof(word));
            }
            else
            {
                _context.Words.Add(word);   
            }
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdateWord(Word word)
        {
            //implementation 
        }

        void IWordRepository.DeleteWord(Word word)
        {
            if (word == null)
            {
                throw new ArgumentNullException(nameof(word));
            }
            _context.Words.Remove(word);
        }
    }
}