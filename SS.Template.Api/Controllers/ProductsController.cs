using System;
using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SS.Template.Domain.Entities;
using SS.Template.Persistence;

namespace SS.Template.Api.Controllers
{
    [Route("api/[Controller]")]
    [AllowAnonymous]
    public class ProductsController : Controller
    {
        private readonly DutchRepository _repository;
        private readonly ILogger<ProductsController> _logger;
        private readonly IMapper _mapper;

        public ProductsController(DutchRepository repository, ILogger<ProductsController> logger, IMapper mapper)
        {

            this._repository = repository;
            this._logger = logger;
            this._mapper = mapper;
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(this._repository.GetAllProducts());
            }catch(Exception e)
            {
                _logger.LogError("Bad request found");
                return null;
            }
        }
        [HttpGet("{category}")]
        public ActionResult<IEnumerable<Product>> GetByCategory()
        {
            try
            {
                return Ok(this._repository.GetAllProducts());
            }
            catch (Exception e)
            {
                _logger.LogError("Bad request found");
                return null;
            }
        }
        [HttpGet("{id:int}")]
        public ActionResult<IEnumerable<Product>> GetById(int id)
        {
            try
            {
                return Ok(this._repository.GetProductById(id));
            }
            catch (Exception e)
            {
                _logger.LogError("Bad request found");
                return null;
            }
        }
        [HttpPost]
        public IActionResult Post([FromBody]Product model)
        {
            var newProduct = _mapper.Map<Product>(model);
            this._repository.Post(newProduct);
            return Ok();
        }
        [HttpPut]
        public IActionResult Put([FromBody] Product model)
        {
            var newProduct = _mapper.Map<Product>(model);
            this._repository.Put(newProduct);
            return Ok();
        }
        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            this._repository.Delete(id);
            return Ok();
        }
    }
}
