import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateLesson1591033979370 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'lesson',
        columns: [
          {
            name: 'idAula',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'duration',
            type: 'integer',
          },
          {
            name: 'created_At',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'update_At',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('lesson');
  }
}
