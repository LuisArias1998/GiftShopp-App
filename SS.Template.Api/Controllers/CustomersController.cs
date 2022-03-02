using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SS.Template.Application.Customers;
using SS.Template.Application.Queries;
using SS.Template.Domain.Entities;
using SS.Template.Persistence;

namespace SS.Template.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class CustomersController : ControllerBase
    {
        private readonly ICustomersService _customersService;
        private readonly DutchRepository _repository;
        private readonly ILogger<CustomersController> _logger;
        private readonly IMapper _mapper;

        public CustomersController(ICustomersService customersService,
            DutchRepository repository, ILogger<CustomersController> logger,
            IMapper mapper)
        {
            _customersService = customersService;
            this._repository = repository;
            this._logger = logger;
            this._mapper = mapper;
        }

        // GET: api/Customers
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

        // GET: api/Customers/5
        [HttpGet("{id:guid}")]
        [ProducesResponseType(typeof(CustomerModel), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Get(Guid id)
        {
            var customer = await _customersService.Get(id);
            return Ok(customer);
        }

        // POST: api/Customers
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Save([FromBody] CustomerModel customer)
        {
            var cust = new CustomerModel
            {
                City = customer.City,
                OrderTotal = customer.OrderTotal,
                Name = customer.Name,
                Email = customer.Email,
                DateCreated = new DateTime(),
                DateUpdated = new DateTime(),    
            };
            await _customersService.Create(customer);
            return Ok();
        }

        // PUT: api/Customers/5
        [HttpPut("{id:guid}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(Guid id, [FromBody] CustomerModel customer)
        {
            await _customersService.Update(id, customer);
            return Ok();
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id:guid}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(Guid id)
        {
            await _customersService.Delete(id);
            return Ok();
        }
    }
}
