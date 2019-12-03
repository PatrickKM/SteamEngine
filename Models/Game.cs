using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public class GameViewModel
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
        
    public AddressViewModel Address { get; set; }

    public StandardViewModel Standard { get; set; }
}