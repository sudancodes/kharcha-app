import {db} from "$lib/database"
export async function load(){
    return {
        expenses: await db.expense.findMany()
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    deleteExpense: async({request}) => {
        const {id} = Object.fromEntries(await request.formData())
            await db.expense.delete({
                where: {
                    id: parseInt(id),
                }
            });
    }
};