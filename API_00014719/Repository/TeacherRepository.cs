using API_00014719.Data;
using API_00014719.Models;

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
            throw new NotImplementedException();
        }

        public void DeleteTeacher(int id)
        {
            throw new NotImplementedException();
        }

        public Teacher GetTeacherById(int id)
        {
            throw new NotImplementedException();
        }

        public List<Teacher> GetTeachers()
        {
            throw new NotImplementedException();
        }

        public void UpdateTeacher(int id, Teacher teacher)
        {
            throw new NotImplementedException();
        }
    }
}
