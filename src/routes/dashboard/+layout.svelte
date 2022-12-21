<script>
	let show = false;
	const handleShow = () => {
		show = !show;
	};
	export let data
</script>

<main class="flex  font-inter">
	<aside
		class="bg-primary w-64 text-secondary grid grid-rows-3 items-start justify-start p-6 place-items-start"
	>
		<div class="border-b py-4 border-secondary w-full">
			<div class="image flex items-center space-x-4">
				<img
					src="https://i.pravatar.cc/50?img=3"
					alt="avatar"
					class="p-0.5 rounded-full w-10 h-10 ring-2 ring-secondary"
				/>
				<p>Welcome {data.session.user.email}</p>
			</div>
		</div>
		<div class="flex flex-col items-center space-y-2 w-full">
			<div
				class="icon-1 hover:bg-tertiary w-full px-4 py-2 rounded-md transition-all duration-300"
			>
				<a href="/dashboard/home" class="flex items-center space-x-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
						/>
					</svg>
					<span class="font-semibold">Home</span>
				</a>
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="dropdown hover:bg-tertiary w-full px-4 py-2 rounded-md transition-all duration-300 flex items-center cursor-pointer"
				on:click={handleShow}
			>
				<div class="flex items-center space-x-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
						/>
					</svg>
					<span class="font-semibold">My Expense</span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 pl-2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
				</svg>
			</div>
			<!-- Dropdown Menu -->
			<div
				class="dropdown-menu flex flex-col space-y-2 items-center px-4 py-2 rounded-md transition ease-linear duration-300"
				style:visibility={show ? 'visible' : 'hidden'}
			>
				<div
					class="view-expense flex items-center hover:bg-tertiary px-2 py-2 rounded-md transition-all duration-300 w-full"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<a href="/dashboard/expense/show" class="px-2">View expense</a>
				</div>
				<div
					class="view-expense flex items-center hover:bg-tertiary px-2 py-2 rounded-md transition-all duration-300 w-full focus:bg-purple-600"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<a href="/dashboard/expense/create" class="px-2">Add expense</a>
				</div>
			</div>
		</div>
	</aside>
	<aside style="width: calc(100vw - 256px)" class="scrollbar overflow-y-scroll">
		<slot />
	</aside>
</main>
