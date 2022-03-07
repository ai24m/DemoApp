using System.ComponentModel.DataAnnotations;

namespace DemoApp.Dtos
{
    public class WordUpdateDto
    {
        [Required]
        [MaxLength(100)]
        public string Content { get; set; }
        public int Searched { get; set; }
    }
}
