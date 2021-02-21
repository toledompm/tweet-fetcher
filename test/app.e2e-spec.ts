import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/tweet/:hashtag (POST)', (done) => {
    const hashtag = 'someHashtag';

    return request(app.getHttpServer())
      .post(`/tweet/${hashtag}`)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual(
          expect.objectContaining({
            hashtags: [hashtag],
          }),
        );
        done();
      });
  });
});
