using API_00014719.Models;
using API_00014719.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_00014719.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        public ITeacherRepository TeacherRepository { get; set; }

        public TeacherController(ITeacherRepository teacherRepository)
        {
            this.TeacherRepository = teacherRepository;
        }

        [HttpGet]
        public IActionResult GetTeachers()
        {
            try
            {
                return Ok(this.TeacherRepository.GetTeachers());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetTeacher(int id)
        {
            try
            {
                return Ok(this.TeacherRepository.GetTeacherById(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTeacher(int id, Teacher teacher)
        {
            try
            {
                this.TeacherRepository.UpdateTeacher(id, teacher);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult CreateTeacher(Teacher teacher)
        {
            try
            {        
                return Ok(this.TeacherRepository.CreateTeacher(teacher));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTeacher(int id)
        {
            try
            {
                this.TeacherRepository.DeleteTeacher(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
