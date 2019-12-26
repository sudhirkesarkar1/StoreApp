using BookStoreApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace BookStoreApp.API.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options) {  }
        public DbSet<User> Users { get; set; }
    }
}