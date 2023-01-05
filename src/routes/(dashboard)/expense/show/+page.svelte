<script>
	export let data;
	const { expenses } = data;
</script>
{#if expenses.length > 0}
<div class="grid grid-cols-3 p-8 gap-8">
	{#each expenses as expense}
	<div
	class="card  bg-primary text-secondary  shadow-md rounded-xl p-4 w-full h-auto"
	>
	<a href="/expense/show/{expense.id}">
					<div class="flex flex-col space-y-4">
						<div class="date">
							<p class="text-center text-2xl">{expense.createdAt.toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"})}</p>
						</div>
						<div class="amount flex items-center justify-between">
							<h3 class="text-xl font-semibold">Rs.{expense.amount}</h3>
						</div>
						<div class="title">
							<h3>{expense.name}</h3>
						</div>
					</div>
				</a>
				<div class="flex justify-end space-x-4">
					<a href="/expense/show/{expense.id}/edit">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit stroke-secondary hover:opacity-75 transition-all duration-300" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
							<path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
							<line x1="16" y1="5" x2="19" y2="8" />
						  </svg>
					</a>
					<form action="?/deleteExpense" method="POST">
					<input type="hidden" value={expense.id} name="id">
					<button type="submit" class="hover:opacity-75 transition-all duration-300">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash stroke-red-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<line x1="4" y1="7" x2="20" y2="7" />
							<line x1="10" y1="11" x2="10" y2="17" />
							<line x1="14" y1="11" x2="14" y2="17" />
							<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
							<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
						  </svg>
					</button>
					</form>
				</div>
		</div>

	{/each}
</div>
{:else}
	<div class="flex flex-col items-center p-6">
		<h2 class="text-4xl text-purple-700 mb-2">Hola !</h2>
		<span class="text-purple-900 text-md italic">You have no any expenses yet. </span>
		<div class="img">
			<img class="w-96 h-96" src="/nodata.svg" alt="nodatafound" />
		</div>
		<div class="btn bg-purple-700 hover:bg-purple-800 px-2 py-4 rounded-md shadow-md text-white">
			<a href="/expense/create">Add Expense</a>
		</div>
	</div>
{/if}
