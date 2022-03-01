using System;
using System.Collections.Generic;
using SS.Template.Domain.Model;

namespace SS.Template.Domain.Entities
{
    public class Order : Entity
    {
        public int Id { get; set; }
        public string OrderNumber { get; set; }
        public ICollection<OrderItem> Items { get; set; }
        public Customer Customer { get; set; }
    }
}
