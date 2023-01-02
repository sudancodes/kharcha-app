import {db} from "$lib/database"
export async function load({params}){
    const show = parseInt(params.expenseId)
    return {
        expense: await db.expense.findMany({
            where: {id: show}
        })
    }
}