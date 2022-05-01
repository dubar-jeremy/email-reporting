import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CustomerController } from './customer.controller';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';

describe('CustomerController', () => {
  let customerController: CustomerController;
  let customerService: CustomerService;

  const mockedCustomerService = {
    create: jest.fn().mockReturnValue({
      id: 1,
      name: 'John Doe',
    }),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [
        CustomerService,
        {
          provide: getRepositoryToken(Customer),
          useValue: {},
        },
        {
          provide: CustomerService,
          useValue: mockedCustomerService,
        },
      ],
    }).compile();

    customerService = moduleRef.get<CustomerService>(CustomerService);
    customerController = moduleRef.get<CustomerController>(CustomerController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(customerController).toBeDefined();
  });

  describe('On creating user', () => {
    const customer = {
      name: 'John Doe',
    };

    const test = {
      name: 'John Doe',
    };

    it('It should call customerService.create', async () => {
      await customerController.create(customer);
      expect(mockedCustomerService.create).toHaveBeenCalled();
    });
    it('It should return promise', () => {
      expect(customerController.create(customer)).toBeInstanceOf(Promise);
    });
    it('It should return customer', async () => {
      const result = await customerController.create(customer);
      expect(result).toEqual({
        id: 1,
        name: 'John Doe',
      });
    });
  });
});
