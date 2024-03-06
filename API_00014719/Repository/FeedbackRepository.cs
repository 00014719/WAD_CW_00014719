using API_00014719.Data;
using API_00014719.Models;

namespace API_00014719.Repository
{
    public class FeedbackRepository : IFeedbackRepository
    {
        public DataContext context { get; set; }
        public FeedbackRepository(DataContext context) 
        {
            this.context = context;
        }

        public Feedback CreateFeedback(Feedback feedback)
        {
            throw new NotImplementedException();
        }

        public void DeleteFeedback(int id)
        {
            throw new NotImplementedException();
        }

        public Feedback GetFeedbackById(int id)
        {
            throw new NotImplementedException();
        }

        public List<Feedback> GetFeedbacks()
        {
            throw new NotImplementedException();
        }

        public void UpdateFeedback(int id, Feedback feedback)
        {
            throw new NotImplementedException();
        }
    }
}
