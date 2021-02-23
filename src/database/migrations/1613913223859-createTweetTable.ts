import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTweetTable1613913223859 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS tweets (
          id serial PRIMARY KEY,
          body varchar(240),
          twitter_id varchar(20)
      )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE tweets`);
  }
}
