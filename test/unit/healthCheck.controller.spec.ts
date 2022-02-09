import { Test, TestingModule } from '@nestjs/testing';
import { HealthCheckController } from '@app/health_check/controllers/healthCheck.controller';

describe('healthCheckController (unit)', () => {
  let controller: HealthCheckController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController],
      providers: [],
    }).compile();

    controller = app.get<HealthCheckController>(HealthCheckController);
  });

  describe('Health Check Application', () => {
    it('return current date', () => {
      expect(controller.get()).toHaveProperty('time');
      expect(controller.get()).toMatchObject({
        time: new Date().toDateString(),
      });
    });
  });
});
