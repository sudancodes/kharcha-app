import { getServerSession } from "@supabase/auth-helpers-sveltekit"
import { redirect } from "@sveltejs/kit"

export const  load = async(event) =>  {
    return{
        session: await getServerSession(event)
    }

}