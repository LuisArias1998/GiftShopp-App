using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SS.Template.Persistence.Migrations
{
    public partial class AddEmailToCustomer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "userId",
                table: "Order",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Customer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Order_userId",
                table: "Order",
                column: "userId");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Customer_userId",
                table: "Order",
                column: "userId",
                principalTable: "Customer",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Customer_userId",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_userId",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "userId",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Customer");
        }
    }
}
