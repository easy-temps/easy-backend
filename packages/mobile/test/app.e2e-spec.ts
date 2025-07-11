import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  it('/api/prose (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/prose')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('message', 'success');
        expect(res.body).toHaveProperty('timestamp');
        expect(res.body).toHaveProperty('result');
        expect(res.body).toHaveProperty('code', 0);
        expect(typeof res.body.result).toBe('string');
        expect(res.body.result).toMatch(/^🔖/);
      });
  });
});
