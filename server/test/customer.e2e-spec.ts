import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CustomerService } from 'src/customer/customer.service';
import { INestApplication } from '@nestjs/common';
import { AppModule } from 'src/app.module';

describe('Customer', () => {
  let app: INestApplication;
  const customerService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(CustomerService)
      .useValue(customerService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET customers`, () => {
    return request(app.getHttpServer())
      .get('/customer')
      .expect(200)
      .expect(customerService.findAll());
  });

  afterAll(async () => {
    await app.close();
  });
});
