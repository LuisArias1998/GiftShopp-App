using System;
using System.Collections.Generic;
using System.Text;
using SS.Template.Domain.Model;

namespace SS.Template.Domain.Entities
{
    public class OrderItem: Entity
    {
        public int Id { get; set; }

        public Product Product  { get; set; }

        public int Quantity { get; set; }

        public decimal UnitPrice { get; set; }

        public Order Order { get; set; }


    }
}

