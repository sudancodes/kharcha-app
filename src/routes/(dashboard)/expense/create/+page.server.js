import {db} from "$lib/database"
import { invalid, redirect } from "@sveltejs/kit"
export const actions = {
create : async({request}) => {
  const formData = await request.formData()
  const name =  formData.get("name")
  const amount = formData.get("amount")
  const remarks = formData.get("remarks")
  const methods = formData.get("methods")

  if(name.length < 5  ){
    return invalid(404,
      { invalid: true}
      )
  }

  await db.expense.create({
    data: {
      name: name,
      amount: amount,
      remarks: remarks,
      methods: methods,
    },
  })
  throw redirect(303, '/dashboard/expense/show')
}
}
