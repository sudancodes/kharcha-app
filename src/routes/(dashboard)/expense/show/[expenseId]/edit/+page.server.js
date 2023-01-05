/** @type {import('./$types').PageLoad} */
import {db} from "$lib/database"
import { redirect } from "@sveltejs/kit"
export async function load({params}) {
    const name = await db.expense.name
    const amount = await db.expense.amount
    const remarks = await db.expense.remarks
    const methods = await db.expense.methods

    const updateExpense = await db.expense.update({
        where: {
            id: parseInt(params.expenseId)
        },
        data:{
            name,
            amount,
            remarks,
            methods
        }
    })
    return {
        updateExpense
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    updateExpense: async({request, params})=>{
        const formData = Object.fromEntries(await request.formData())
        const name = formData.name
        const amount = formData.amount
        const remarks = formData.remarks
        const methods = formData.methods
        console.log(formData);
        await db.expense.update({
            where:{
                id: parseInt(params.expenseId)
            },
            data:{
               name,
               amount,
               methods,
               remarks
            }
        })
        throw redirect(303, '/expense/show')
    }
};