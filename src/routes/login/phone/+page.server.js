import { AuthApiError } from "@supabase/supabase-js";
import { fail,redirect } from "@sveltejs/kit";

export const actions = {
    phone: async( {request, locals} )=>{
        const body = Object.fromEntries(await request.formData())
        const {user, error: err } =  await locals.sb.auth.signInWithOtp({
            phone: body.phone,
        })
        // if(err){
        //     if(err instanceof AuthApiError && err.status === 400 ){
        //         return fail(400, {
        //             error: 'Failed to login.'
        //         })
        //     }
        //     return fail(500,{
        //         error: 'Internal Server Error.'
        //     } )
        // }
        throw redirect(303, '/login/phone/otp')
    }
};