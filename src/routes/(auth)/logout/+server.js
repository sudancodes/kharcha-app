import { error, redirect } from "@sveltejs/kit";

export const POST = async({locals}) => {
    const {error: err } = await locals.sb.auth.signOut()
        if(err){
            throw error(500,'Something went wrong.')
        }
        throw redirect(303,'/')
    }
