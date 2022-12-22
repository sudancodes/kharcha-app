import {db} from "$lib/database"
export async function load(){
    return {
        expenses: await db.expense.findMany()
    }
}