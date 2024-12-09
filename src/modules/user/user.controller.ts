import { CreateUserDto } from "./create-user.dto";
import { validationMiddleware } from "../../middleware/validation.middleware";
import { Request, Response } from "express";
import { createUser } from "./user.service";
import { deleteUser, findAllUsers, findUserById, updateUser } from "./user.service";
import { UpdateUserDto } from "./update-user.dto";
import { authMiddleware } from "../../middleware/auth.middleware";

export const createUserHandler = [
  validationMiddleware(CreateUserDto),
  async (req: Request, res: Response) => {
    //const { email, password } = req.body;
    try {
      //TODO: Map to CreateUserDto
      const user = await createUser({
        ...req.body as CreateUserDto,
      });
      res.json({ user });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
];

export const deleteUserHandler = [
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await deleteUser(id);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
];

export const findAllUsersHandler = [
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const users = await findAllUsers();
      res.json({ users });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
];

export const findUserByIdHandler = [
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await findUserById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ user });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
];

export const updateUserHandler = [
  authMiddleware,
  validationMiddleware(UpdateUserDto),
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedUser = await updateUser(id, req.body);
      res.json({ user: updatedUser });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
];