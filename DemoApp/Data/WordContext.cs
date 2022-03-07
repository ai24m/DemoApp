using DemoApp.Models;
using Microsoft.EntityFrameworkCore;

namespace DemoApp.Data
{
    public class WordContext : DbContext 
    {
        public WordContext(DbContextOptions<WordContext> options) : base(options)
        {

        }

        //create representation of word model 
        public DbSet<Word> Words { get; set; }

    }
}
