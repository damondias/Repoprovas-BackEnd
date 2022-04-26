import { connection } from "../database.js";
import { CreateUserData } from "../services/userService.js";

async function findById(id: number) {
  return connection.user.findUnique({
    where: {
      id,
    },
  });
}
async function findByEmail(email: string) {
  return connection.user.findUnique({
    where: {
      email,
    },
  });
}

async function insert(createUserData: CreateUserData) {
  return connection.user.create({
    data: createUserData,
  });
}

export default {
  findByEmail,
  findById,
  insert,
};