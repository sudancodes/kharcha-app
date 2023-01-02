<script>
	export let data;
	const { expenses } = data;
</script>
{#if expenses.length > 0}
<div class="grid grid-cols-3 p-8 gap-8">
	{#each expenses as expense}
	<a href="/expense/show/{expense.id}">
		<div
		class="card  bg-primary text-secondary  shadow-md rounded-xl p-4 w-full h-auto"
		>
					<div class="flex flex-col space-y-4">
						<div class="date">
							<p class="text-center text-2xl">{expense.createdAt.toLocaleTimeString()}</p>
						</div>
						<div class="amount flex items-center justify-between">
							<h3 class="text-xl font-semibold">Rs.{expense.amount}</h3>
						</div>
						<div class="title">
							<h3>{expense.name}</h3>
						</div>
					</div>
		</div></a>

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
