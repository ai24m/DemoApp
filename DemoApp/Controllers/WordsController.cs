using AutoMapper;
using DemoApp.Data;
using DemoApp.Dtos;
using DemoApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace DemoApp.Controllers
{
    [Route("api/words")]
    [ApiController]
    public class WordsController : ControllerBase
    {
        private readonly IWordRepository _wordRepo;
        private readonly IMapper _mapper;

        //constructor 
        public WordsController(IWordRepository irepo, IMapper mapper)
        {
            _wordRepo = irepo;
            _mapper = mapper;
        }

        // test private readonly WordRepo _wordRepo = new WordRepo();
        [HttpGet]
        public ActionResult<IEnumerable<WordReadDto>> GetAllWords()
        {
            var words = _wordRepo.GetAllWords();
           // return Ok(words);
           return Ok(_mapper.Map<IEnumerable<WordReadDto>>(words));
        }

        [HttpGet("{id}", Name ="GetWordById")]
        public ActionResult<WordReadDto> GetWordById(int id)
        {
            var word = _wordRepo.GetWordById(id);
            if (word != null)
            {
               // return Ok(word);
               return Ok(_mapper.Map<WordReadDto>(word)); //registers + returns wordreaddto from word received by api  
            }
            return NotFound();
        }

        [HttpPost]
        public ActionResult <WordReadDto> CreateWord (WordCreateDto created)
        {
            var word = _mapper.Map<Word>(created); 
            _wordRepo.CreateWord(word);
            _wordRepo.SaveChanges();

            var wordReadDto = _mapper.Map<WordReadDto>(word);

            //return Ok(wordReadDto);
            return CreatedAtRoute(nameof(GetWordById), new {Id = wordReadDto.Id}, wordReadDto);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateWord (int id, WordUpdateDto updated)
        {
            var word = _wordRepo.GetWordById(id);
            if (word == null)
            {
                return NotFound();
            }
            _mapper.Map(updated, word);
            _wordRepo.UpdateWord(word);

            _wordRepo.SaveChanges();

            return NoContent();
        }

        [HttpPatch("{id}")]
        public ActionResult PatchWord (int id, JsonPatchDocument<WordUpdateDto> patchDoc)
        {
            var word = _wordRepo.GetWordById(id);
            if (word == null)
            {
                return NotFound();
            }

            var wordToPatch = _mapper.Map<WordUpdateDto>(word);
            patchDoc.ApplyTo(wordToPatch, ModelState);
            if (!TryValidateModel(wordToPatch))
            {
                return ValidationProblem(ModelState);
            }

            _mapper.Map(wordToPatch, word);
            _wordRepo.UpdateWord(word);

            _wordRepo.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteWord (int id)
        {
            var word = _wordRepo.GetWordById(id);
            if (word == null)
            {
                return NotFound();
            }

            _wordRepo.DeleteWord(word);
            _wordRepo.SaveChanges();

            return NoContent();
        }
    }
}
