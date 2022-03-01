using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SS.Template.Core;
using SS.Template.Domain.Entities;

namespace SS.Template.Persistence.Configurations
{
    public sealed class CustomerConfiguration : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            builder.Property(x => x.Name)
                .HasMaxLength(AppConstants.StandardValueLength);

            builder.Property(x => x.City)
                .HasMaxLength(AppConstants.StandardValueLength);

            builder.Property(x => x.OrderTotal)
                .HasColumnType("decimal(18,2)")
                .HasDefaultValue(default(decimal));
        }
    }
}
