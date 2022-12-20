<script>
    /** @type {import('./$types').ActionData} */
  export let form;
</script>
<div class="card flex justify-center flex-col items-center space-y-8 p-4">
    <h2 class="text-xl uppercase">Sign In</h2>
    <form action="?/login" method="POST">
        <div class="mb-4">
            <label for="name" class="block">Name</label>
            <input type="text" name="name" placeholder="Your Name.." id="name" class="border-b border-gray-200 focus:outline-none placeholder-gray-300 p-2" required>
        </div>
        <div>
            <label for="password" class="block">Password</label>
            <input type="text" name="password" id="password" placeholder="Password" class="border-b border-gray-200 focus:outline-none placeholder-gray-300 p-2" required>
        </div>
        {#if form?.credentials}
            <p class="text-sm text-red-600 mt-2">These credentials donot match.</p>
        {/if}
        <div class="mt-8 w-full">
            <button class="bg-gray-300 w-full p-2">Register</button>
        </div>
    </form>
</div>