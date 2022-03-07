using AutoMapper;
using DemoApp.Dtos;
using DemoApp.Models;

namespace DemoApp.Profiles
{
    public class WordProfile : Profile
    {
        public WordProfile()
        {
            CreateMap<Word, WordReadDto>(); //<to, from> 
            CreateMap<WordCreateDto, Word>();

            CreateMap<WordUpdateDto, Word>();
            CreateMap<Word, WordUpdateDto>(); //<to, from> 
        }
    }
}
