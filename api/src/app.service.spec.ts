import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppService],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('action', () => {
    it('should respond with a string for numbers greater than 20"', () => {
      expect(true).toBe(false)
    });

    it('should throw NotFoundException for numbers less or equal than 20', () => {
      expect(true).toBe(false)
    })
  });
});
