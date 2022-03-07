using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{

    public class Word
    {

        public int Id { get; set; }  

       public string Content { get; set; } 

       public int Searched { get; set; }    
    }
}
