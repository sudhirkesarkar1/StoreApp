using System;
using System.Threading.Tasks;
using System.Security.Cryptography;
using BookStoreApp.API.Models;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace BookStoreApp.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            this._context = context;

        }
        public async Task<User> Login(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
            if(user == null){
                return null;
            }
            if(!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt)){
                return null;
            }

            return user;
        }

        private void CreatePasswordHash(string password, out byte[] PasswordHash, out byte[] PasswordSalt){
            using(var hmac = new HMACSHA512()){
                PasswordSalt = hmac.Key;
                PasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt){
            using(var hmac = new HMACSHA512(passwordSalt)){
                var computeHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for(int i=0;i<computeHash.Length;i++){
                    if(computeHash[i] != passwordHash[i]){
                        return false;
                    }
                }
            }
            return true;
        }
        public async Task<User> Register(User user, string password)
        {
            byte[] PasswordHash, PasswordSalt;
            CreatePasswordHash(password, out PasswordHash, out PasswordSalt);

            user.PasswordHash = PasswordHash;
            user.PasswordSalt = PasswordSalt;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<bool> UserExists(string username)
        {
            if(await _context.Users.AnyAsync(u=>u.Username==username)){
                return true;
            }
            return false;
        }
    }
}