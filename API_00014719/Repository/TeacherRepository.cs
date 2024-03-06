using API_00014719.Data;
using API_00014719.Models;
using Microsoft.EntityFrameworkCore;

namespace API_00014719.Repository
{
    public class TeacherRepository : ITeacherRepository
    {
        public DataContext context { get; set; }
        public TeacherRepository(DataContext context)
        {
            this.context = context;
        }

        public Teacher CreateTeacher(Teacher teacher)
        {
            context.Teachers.Add(teacher);
            context.SaveChanges();
            return teacher;
        }

        public void DeleteTeacher(int id)
        {
            Teacher? teacher = context.Teachers.Find(id);
            if (teacher == null) return;
            context.Teachers.Remove(teacher);
            context.SaveChanges();
        }

        public Teacher? GetTeacherById(int id)
        {
            return context.Teachers.Find(id);
        }

        public List<Teacher> GetTeachers()
        {
            return context.Teachers.ToList();
        }

        public void UpdateTeacher(int id, Teacher teacher)
        {
            Teacher? oldTeacher = GetTeacherById(id);
            if(oldTeacher == null) return;

            context.Entry(oldTeacher).State = EntityState.Modified;

            oldTeacher.FirstName = teacher.FirstName;
            oldTeacher.LastName = teacher.LastName;

            context.SaveChanges();
        }
    }
}
