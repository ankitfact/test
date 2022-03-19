using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly DataContext _context;

        public AccountController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if(registerDto == null)
                return BadRequest();

            if(await _context.Users.AnyAsync(x=>x.UserName == registerDto.UserName))
                return BadRequest("Username is taken");

            var user = new AppUser{
                UserName = registerDto.UserName,
                Password = registerDto.Password
            };

            var result =await _context.Users.AddAsync(user);
            
            await _context.SaveChangesAsync();
            return new UserDto{
                UserName = user.UserName,
                Token="abc"
            };
        }
    }
}