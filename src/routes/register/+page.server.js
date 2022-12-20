
import {invalid, redirect} from '@sveltejs/kit'
import { db } from "$lib/database"
export const actions = {
    register: async ({request}) => {
        const data =await request.formData()
        const username = data.get('name')
        const password = data.get('password')
        const passwordMatch  = data.get('confirm_password')
        if (
            typeof username !== 'string' ||
            typeof password !== 'string' ||
            !username ||
            !password
            ) {
                return invalid(400, { invalid: true })
            }
            const Roles =   {
              Admin: 'Admin',
              User: 'User',
            }
            if(password !== passwordMatch){
              return invalid(400, {password: true})
            }
          const user = await db.user.findUnique({
            where: { username },
          })
        if(user){
            return invalid(400, {user: true})
        }
        //   Creating User
          await db.user.create({
            data: {
              username,
              passwordHash: password,
              confirmPassword: passwordMatch,
              userAuthToken: crypto.randomUUID(),
              role: { connect: { name: Roles.User } },
            },
          })
          throw redirect(303, '/login')
    },
};
