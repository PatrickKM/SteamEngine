using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SteamEngine.Models
{
    public class GameViewModel
    {
        public int AppId { get; set; }
        public string GameTitle { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }
        public string Genre { get; set; }
        public string Developer { get; set; }
        public string Publisher { get; set; }
        public DateTime ReleaseDate { get; set; }
        public List<Friend> FriendsPlaying { get; } = new List<Friend>();

        public GameViewModel() { 
        
        }

        public GameViewModel( string gameTitle, string description, string genre, string developer, string publisher, DateTime releaseDate)
        {
            this.GameTitle = gameTitle;
            this.Description = description;
            this.Genre = genre;
            this.Developer = developer;
            this.Publisher = publisher;
            this.ReleaseDate = releaseDate;
        }
    }
}