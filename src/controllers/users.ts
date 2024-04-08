import express from 'express';
import { deleteUserById, getUsers } from '../db/users';
import user from 'router/user';

export const getAllUsers = async(req: express.Request, res: express.Response)=>{
    try {
        const users= await getUsers();
    console.log(users);
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteUser = async (req: express.Request, res: express.Response)=>{
    try {
        const { id }= req.params;
        const deletedUser = await deleteUserById(id);
        return res.status(200).json(deletedUser);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}