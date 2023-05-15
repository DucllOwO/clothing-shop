import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OrderService } from './order.service';
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: Prisma.OrderCreateInput) {
    return this.orderService.createOrder(createOrderDto);
  }

  @Get('/waiting')
  findAllWaiting() {
    return this.orderService.orders({
      where: {
        status: {
          equals: '0',
        }
      }
    });
  }
  @Get('/completed')
  findAllCompleted() {
    return this.orderService.orders({
      where: {
        status: {
          equals: '1'
        }
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // throw new BadRequestException();
    return this.orderService.order({id: Number(id)});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: Prisma.OrderCreateInput) {
    return this.orderService.updateOrder({
      where: {id: Number(id)},
      data: updateOrderDto
    });
  }
}
