import knex from "knex";
import knexConfig from "../../../../knexfile";

const runMigrations = async () => {
  const db = knex(knexConfig.connect);
  try {
    await db.migrate.latest();
  } catch (error) {
    console.error('Error running migrations:', error);
  } finally {
    db.destroy();
  }
};

export default runMigrations;