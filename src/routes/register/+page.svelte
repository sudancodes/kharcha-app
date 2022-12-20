<script>
    /** @type {import('./$types').ActionData} */
  export let form;
</script>
<div class="flex justify-center text-secondary">
    <div class="card  p-8 w-96 shadow-primary mt-12 shadow-lg ">
        <h2 class="text-xl uppercase text-center mb-4 tracking-wider font-semibold border-b border-b-primary">Register</h2>
        <form action="?/register" method="POST">
            <div class="mb-4">
                <label for="name" class="block mb-2 font-semibold">Name</label>
                <input type="text" name="name" placeholder="Your Name.." id="name" class="border-b border-gray-200 focus:outline-none placeholder-gray-300 p-2 w-full rounded-md">
            </div>
            {#if form?.user}
            <p class="text-red-800 text-sm mb-2">Username is taken.</p>
            {/if}
            <div class="mb-4">
                <label for="password" class="block mb-2 font-semibold">Password</label>
                <input type="text" name="password" id="password" placeholder="Password" class="border-b border-gray-200 focus:outline-none placeholder-gray-300 p-2 w-full rounded-md">
            </div>
            <div>
                <label for="confirm_password" class="block mb-2 font-semibold">Confirm Password</label>
                <input type="text" name="confirm_password" id="confirm_password" placeholder="Confirm Password" class="border-b border-gray-200 focus:outline-none placeholder-gray-300 p-2 w-full rounded-md">
            </div>
            {#if form?.password}
                <p class="text-red-800 text-sm mt-2">Passwords donot match!</p>
            {/if}
            {#if form?.invalid}
            <p class="text-red-800 text-sm mt-2">Fill out all the fields.</p>
            {/if}
            <div class="mt-8 w-full">
                <button class="bg-primary text-secondary w-full p-2 font-semibold">Register</button>
            </div>
        </form>
    </div>
</div>