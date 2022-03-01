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
    public class OrderController : Controller
    {
        private readonly DutchRepository _repository;
        private readonly ILogger<OrderController> _logger;
        private readonly IMapper _mapper;

        public OrderController(DutchRepository repository, ILogger<OrderController> logger, IMapper mapper)
        {

            this._repository = repository;
            this._logger = logger;
            this._mapper = mapper;
        }
        [HttpPost]
        public IActionResult Post([FromBody] Order model)
        {
            var newOrder = _mapper.Map<Order>(model);
            this._repository.Post(newOrder);
            return Ok();
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(this._repository.GetAllOrders());
            }
            catch (Exception e)
            {
                _logger.LogError("Bad request found");
                return null;
            }
        }
        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            this._repository.DeleteOrder(id);
            return Ok();
        }
    }
}
