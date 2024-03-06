using API_00014719.Models;

namespace API_00014719.Repository
{
    public interface IFeedbackRepository
    {
        List<Feedback> GetFeedbacks();
        Feedback GetFeedbackById(int id);
        void UpdateFeedback(int id, Feedback feedback);
        void DeleteFeedback(int id);
        Feedback CreateFeedback(Feedback feedback);
    }
}
