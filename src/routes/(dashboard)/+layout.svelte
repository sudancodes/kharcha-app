<script>
	let show = false;
	let toggle =false;
	const handleShow = () => {
		show = !show;
	};
	const handleNav = ()=>{
		toggle = !toggle
	}
	export let data
	const phone = data.session.user.phone
	const email = data.session.user.email
</script>

<main class="flex font-inter w-full h-screen">
	<aside
		class="bg-[#27292a] w-64 text-tertiary grid grid-rows-6 p-4"
	>
		<!-- <div class="w-full">
			<div class="image flex items-center space-x-2">
				<img
					src="https://i.pravatar.cc/50?img=3"
					alt="avatar"
					class="p-0.5 rounded-full w-10 h-10 ring-2 ring-primary"
				/>
				{#if phone}
				<p>{phone}</p>
				{:else}
				<p>{email}</p>
				{/if}
			</div>
		</div> -->
		<!-- logo -->
		<div class="logo justify-center">
			<a href="/home" class="font-inter text-center text-2xl font-semibold text-primary px-12">Kharcha</a>
		</div>
		<div class="flex flex-col items-center space-y-2 w-full">
			<div
				class="icon-1 hover:bg-primary hover:text-secondary w-full px-4 py-2 rounded-md transition-all duration-300 active:bg-primary"
			>
				<a href="/home" class="flex items-center space-x-2">
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
				class="dropdown hover:bg-primary hover:text-secondary w-full px-4 py-2 rounded-md transition-all duration-300 flex items-center cursor-pointer"
				on:click={handleShow}
			>
				<div class="flex items-center space-x-2 bg-transparent active:bg-primary active:text-tertiary">
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
					class="view-expense flex items-center hover:bg-primary hover:text-secondary px-2 py-2 rounded-md transition-all duration-300 w-full active:bg-primary"
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
					<a href="/expense/show" class="px-2">View expense</a>
				</div>
				<div
					class="view-expense flex items-center hover:bg-primary hover:text-secondary px-2 py-2 rounded-md transition-all duration-300 w-full active:bg-primary"
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
					<a href="/expense/create" class="px-2">Add expense</a>
				</div>
			</div>
		</div>
	</aside>
	<aside style="width: calc(100vw - 256px)" class="scrollbar overflow-y-scroll bg-secondary flex flex-col p-4">
			<div class="w-full flex justify-between text-tertiary">
				<div></div>
				<!-- Profile dropdown -->
				<!-- svelte-ignore missing-declaration -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="image flex items-center space-x-4 cursor-pointer bg-info px-4 rounded-full py-2 text-sm" on:click={handleNav}>
					<img
					src="https://i.pravatar.cc/50?img=3"
					alt="avatar"
					class="p-0.5 rounded-full w-8 h-8 ring-2 ring-primary"
					/>
					{#if phone}
					<p>{phone}</p>
					{:else}
					<p>{email}</p>
					{/if}
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<polyline points="6 9 12 15 18 9" />
						  </svg>
					</div>
				</div>
				<div class="bg-[#27292a] absolute right-8 w-40 rounded-md top-[68px] p-4 flex space-x-4 justify-center" style:visibility={toggle ? 'visible' : 'hidden'}>
					<div class="links flex flex-col space-y-4 w-full">
						<div class="flex space-x-2 cursor-pointer items-center  w-full hover:opacity-75">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
							  </svg>
							<a href="/">Profile</a>
						</div>
						<div class="flex space-x-2 cursor-pointer items-center w-full hover:opacity-75">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
							  </svg>
							  <form action="/logout" method="POST">
								<button class="text-tertiary">Logout</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		<slot />
	</aside>
</main>
