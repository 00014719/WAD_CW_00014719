using API_00014719.Models;

namespace API_00014719.Repository
{
    public interface ITeacherRepository
    {
        List<Teacher> GetTeachers();
        Teacher GetTeacherById(int id);
        void UpdateTeacher(int id, Teacher teacher);
        void DeleteTeacher(int id);
        Teacher CreateTeacher(Teacher teacher);
    }
}
