using API_00014719.Models;
using Microsoft.EntityFrameworkCore;

namespace API_00014719.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Feedback> Feedbacks { get; set; }
        public DbSet<Teacher> Teachers { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
    }
}
