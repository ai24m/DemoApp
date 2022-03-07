using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DemoApp.Models
{
    //[Table("Word")]
    public class Word
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Content { get; set; }
        public int Searched { get; set; }
    }
}
