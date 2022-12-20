import {invalid, redirect} from '@sveltejs/kit'
import { db } from "$lib/database"

  const  login = async({cookies, request}) => {
    const data = await request.formData()
    const username  = await data.get('name')
    const password = await data.get('password')

    if (
        typeof username !== 'string' ||
        typeof password !== 'string' ||
        !username ||
        !password
      ) {
        return invalid(400, { invalid: true })
      }
      const user = await db.user.findUnique({where : { username }})

      if(!user){
        return invalid(400, { credentials : true})
      }
      const userPassword = password.localeCompare(db.user.passwordHash)
      console.log(userPassword)
      if (!userPassword) {
        return invalid(400, { credentials: true })
      }
      cookies.set('session', {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge : 60*60*24*30,
      })

      throw redirect(302, '/dashboard/home')
}

export const actions = {login}