using System;
using SS.Template.Domain.Model;

namespace SS.Template.Domain.Entities
{
    public class Product : Entity
    {
        public int Id { get; set; }
        public string ProductName { get; set; }

        public string ProductDescription { get; set; }

        public decimal UnitPrice { get; set; }

        public string ProductImg { get; set; }

        public string Category { get; set; }
    }
}
