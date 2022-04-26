import { connection } from "../database.js";

async function findMany() {
  return connection.category.findMany();
}

export default {
  findMany,
};