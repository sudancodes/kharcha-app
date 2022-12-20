<div class="mb-6 p-6">
	<h2 class="text-4xl">Add Expense</h2>
</div>
<div class="p-6">
	<form method="POST" action="?/create">
		<div class="grid grid-cols-3 gap-4">
			<div>
				<label for="name" class="block mb-2 text-sm font-medium text-gray-900">Title</label>
				<input
					type="text"
					id="name"
					name="name"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					placeholder="Beer"
					required
				/>
			</div>
			<div>
				<label for="amount" class="block mb-2 text-sm font-medium text-gray-900">Amount</label>
				<input
					type="amount"
					id="amount"
					name="amount"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					required
				/>
			</div>
			<div>
				<label for="methods" class="block mb-2 text-sm font-medium text-gray-900"
					>Payment method</label
				>
				<select
					id="methods"
					name="methods"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				>
					<option>Cash</option>
					<option>Mobile Wallet</option>
				</select>
			</div>
			<div class="mt-4">
				<label for="remarks" class="block mb-2 text-sm font-medium text-gray-900">Remarks</label>
				<textarea
					id="remarks"
					name="remarks"
					rows="4"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
					placeholder="Leave a comment..."
				/>
			</div>
		</div>
		<button
			type="submit"
			class="mt-4 text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
			>Add</button
		>
	</form>
</div>
