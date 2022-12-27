<div class="mb-6 p-6">
	<h2 class="text-4xl text-tertiary text-center">Add Expense</h2>
</div>
<div class="p-6">
	<form method="POST" action="?/create">
		<div class="grid grid-cols-3 gap-4">
			<div>
				<label for="name" class="block mb-2 text-sm font-medium text-tertiary">Title</label>
				<input
					type="text"
					id="name"
					name="name"
					class="bg-secondary border border-gray-300 text-tertiary text-sm rounded-lg block w-full p-2.5 placeholder-opacity-75"
					placeholder="Beer"
					required
				/>
			</div>
			<div>
				<label for="amount" class="block mb-2 text-sm font-medium text-tertiary">Amount</label>
				<input
					type="amount"
					id="amount"
					name="amount"
					class="bg-secondary border border-gray-300 text-tertiary text-sm rounded-lg  block w-full p-2.5"
					placeholder="Amount"
					required
				/>
			</div>
			<div>
				<label for="methods" class="block mb-2 text-sm font-medium text-tertiary"
					>Payment method</label
				>
				<select
					id="methods"
					name="methods"
					class="bg-secondary border border-gray-300 text-tertiary text-sm rounded-lg  block w-full p-2.5"
				>
					<option >Cash</option>
					<option>Mobile Wallet</option>
				</select>
			</div>
			<div class="mt-4">
				<label for="remarks" class="block mb-2 text-sm font-medium text-tertiary">Remarks</label>
				<textarea
					id="remarks"
					name="remarks"
					rows="4"
					class="block p-2.5 w-full text-sm text-tertiary bg-secondary rounded-lg border border-gray-300 "
					placeholder="Leave a comment..."
				/>
			</div>
		</div>
		<button
			type="submit"
			class="mt-4 text-secondary bg-primary hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
			>Add</button
		>
	</form>
</div>
