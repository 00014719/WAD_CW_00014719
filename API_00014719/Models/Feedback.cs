namespace API_00014719.Models
{
    public class Feedback
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Teacher Teacher { get; set; }
    }
}
