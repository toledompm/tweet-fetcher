import { MigrationInterface, QueryRunner } from 'typeorm';

export class createHashtagTable1613915860051 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS hashtags (
          id serial PRIMARY KEY,
          text varchar(240)
      )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE hashtags`);
  }
}
