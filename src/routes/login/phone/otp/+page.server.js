import { AuthApiError } from "@supabase/supabase-js";
import { fail,redirect } from "@sveltejs/kit";

export const actions = {
    otp: async( {request, locals} )=>{
        const body = Object.fromEntries(await request.formData())
        const {session , error: err } =  await locals.sb.auth.verifyOtp({
            phone: '+9779865008003',
            token: body.otp,
            type: 'sms',
        })

        // if(err){
        //     if(err instanceof AuthApiError && err.status ===400 ){
        //         return fail(400, {
        //             error: 'Failed to login.'
        //         })
        //     }
        // }
        throw redirect(303, '/dashboard/home')
    }
};