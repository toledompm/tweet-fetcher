import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTweetHashtagTable1613915925443
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS tweet_hashtags (
          id serial PRIMARY KEY,
          tweet_id bigint,
          hashtag_id bigint,
          search_hashtag boolean DEFAULT false,

          FOREIGN KEY (tweet_id)
            REFERENCES tweets (id),
          
          FOREIGN KEY (hashtag_id)
            REFERENCES hashtags (id)
      )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE tweet_hashtags`);
  }
}
