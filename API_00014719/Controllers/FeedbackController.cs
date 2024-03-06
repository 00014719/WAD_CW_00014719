using API_00014719.Models;
using API_00014719.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_00014719.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        public IFeedbackRepository FeedbackRepository { get; set; }
        public FeedbackController(IFeedbackRepository feedbackRepository)
        {
            this.FeedbackRepository = feedbackRepository;
        }

        [HttpGet]
        public IActionResult GetFeedbacks() 
        {
            try
            {
                return Ok(FeedbackRepository.GetFeedbacks());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult CreateFeedback(Feedback feedback)
        {
            try
            {
                return Ok(FeedbackRepository.CreateFeedback(feedback));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetFeedback(int id) 
        {
            try
            {
                return Ok(FeedbackRepository.GetFeedbackById(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
                throw;
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteFeedback(int id)
        {
            try
            {
                FeedbackRepository.DeleteFeedback(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult EditFeedback(int id, Feedback feedback)
        {
            try
            {
                FeedbackRepository.UpdateFeedback(id, feedback);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
