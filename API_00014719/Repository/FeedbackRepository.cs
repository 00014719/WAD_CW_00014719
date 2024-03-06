using API_00014719.Data;
using API_00014719.Models;
using Microsoft.EntityFrameworkCore;

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
            Teacher? teacher = context.Teachers.Find(feedback.Teacher.Id);
            if(teacher == null)
            {
                context.Teachers.Add(feedback.Teacher);
            }
            else
            {
                feedback.Teacher = teacher;
            }

            context.Feedbacks.Add(feedback);
            context.SaveChanges();
            return feedback;
        }

        public void DeleteFeedback(int id)
        {
            Feedback feedback = context.Feedbacks.Find(id);
            context.Feedbacks.Remove(feedback);
            context.SaveChanges();
        }

        public Feedback GetFeedbackById(int id)
        {
            return context.Feedbacks.Include(f => f.Teacher).First(f => f.Id == id);
        }

        public List<Feedback> GetFeedbacks()
        {
            return context.Feedbacks.Include(f => f.Teacher).ToList();
        }

        public void UpdateFeedback(int id, Feedback feedback)
        {
            Feedback? oldFeedback = GetFeedbackById(id);
            if (oldFeedback == null) { return; }

            Teacher? teacher = context.Teachers.Find(feedback.Teacher.Id);
            if (teacher == null)
            {
                context.Teachers.Add(feedback.Teacher);
            }
            else
            {
                feedback.Teacher = teacher;
            }

            context.Entry(oldFeedback).State = EntityState.Modified;

            oldFeedback.Title = feedback.Title;
            oldFeedback.Description = feedback.Description;
            oldFeedback.Teacher = feedback.Teacher;

            context.SaveChanges();
        }
    }
}
