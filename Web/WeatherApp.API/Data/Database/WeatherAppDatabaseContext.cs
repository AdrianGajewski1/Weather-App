﻿using Microsoft.EntityFrameworkCore;
using WeatherApp.API.Models.Entities;

namespace WeatherApp.API.Data.Database
{
    public class WeatherAppDatabaseContext : DbContext
    {
        public WeatherAppDatabaseContext(DbContextOptions<WeatherAppDatabaseContext> options) : base(options) { }

        public DbSet<Notification> Notifications { get; set; }
    }
}
