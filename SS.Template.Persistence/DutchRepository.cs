using System;
using System.Collections.Generic;
using System.Text;
using SS.Template.Domain.Entities;

namespace SS.Template.Persistence
{
    public class DutchRepository
    {
        private readonly AppDbContext _context;
        public DutchRepository(AppDbContext context)
        {
            this._context = context;
            
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return this._context.GetAllProducts();
        }
        public IEnumerable<Product> GetAllProductsByCategory(string category)
        {
            return this._context.GetAllProductsByCategory(category);
        }
        public IEnumerable<Product> GetProductById(int id)
        {
            return this._context.GetProductById(id);
        }
        public IEnumerable<Order> GetAllOrders()
        {
            return this._context.GetAllOrders();
        }

        public void Post(Product model)
        {
            this._context.Post(model);
        }
        public void Post(Order model)
        {
            this._context.Post(model);
        }
        public void Put(Product model)
        {
            this._context.Put(model);
        }

        public void Delete(int id)
        {
            this._context.Delete(id);
        }
        public void DeleteOrder(int id)
        {
            this._context.DeleteOrder(id);
        }


    }
}
