import { CreateUserDto } from './create-user.dto';
import { UserModel } from './user.model';
import * as bcrypt from 'bcrypt';

export const createUser = async (createUserDto: CreateUserDto) => {
  const SALT = await bcrypt.genSalt();
  createUserDto.password = await bcrypt.hash(createUserDto.password, SALT);
  const user = new UserModel({ ...createUserDto });
  return await user.save();
};

export const findUserByUserName = async (userName: string) => {
  return await UserModel.findOne({ userName });
}

export const findUserByPhone = async (phone: string) => {
  return await UserModel.findOne({ phone });
}

export const findUserByEmail = async (email: string) => {
  return await UserModel.findOne({ email });
};

export const deleteUser = async (id: string) => {
  return await UserModel.findByIdAndDelete(id);
};

export const findAllUsers = async () => {
  return await UserModel.find();
};

export const findUserById = async (id: string) => {
  return await UserModel.findById(id);
};

export const updateUser = async (id: string, updateUserDto: Partial<CreateUserDto>) => {
  if (updateUserDto.password) {
    const SALT = await bcrypt.genSalt();
    updateUserDto.password = await bcrypt.hash(updateUserDto.password, SALT);
  }
  return await UserModel.findByIdAndUpdate(id, updateUserDto, { new: true });
};
