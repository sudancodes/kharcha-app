<script>
	export let data;
	const { expenses } = data;
	const dateString = ()=>{
		const date = new Date();
		const options = {
  			weekday: "long",
  			year: "numeric",
  			month: "long",
  			day: "numeric"
		};

		const today = date.toLocaleDateString("en-US", options);

	if (date.toDateString() === new Date().toDateString()) {
  return "Today";
} else if (date.setDate(date.getDate() - 1).toDateString() === new Date().toDateString()) {
  return "Yesterday";
} else {
  return today;
}

	}
</script>
{#if expenses.length > 0}
<div class="flex p-8 space-x-4">
	{#each expenses as expense}
	<div
	class="card  bg-primary text-secondary  shadow-md rounded-xl p-4 w-48 h-auto"
	>
				<div class="flex flex-col space-y-4">
					<div class="date">
						<p class="text-center text-2xl">{dateString(expense.createdAt)}</p>
					</div>
					<div class="amount flex items-center justify-between">
						<h3 class="text-xl">Rs.{expense.amount}</h3>
						<div>
							<img src="/flag.svg" alt="flag" class="w-6 h-6">
						</div>
					</div>
					<div class="title">
						<h3>{expense.name}</h3>
					</div>
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
			<a href="/dashboard/expense/create">Add Expense</a>
		</div>
	</div>
{/if}
