<script>
  export let form;
</script>
<div class="flex justify-center text-secondary">
    <div class="card  p-8 w-96 shadow-primary mt-12 shadow-lg ">
        <h2 class="text-xl uppercase text-center mb-4 tracking-wider font-semibold border-b border-b-primary">Register</h2>
        <form action="?/register" method="POST">
            <div class="mb-4">
                <label for="email" class="block mb-2 font-semibold">Email</label>
                <input type="email" name="email" placeholder="Your Name.." id="email" class="border-b border-gray-200 focus:outline-none placeholder-gray-300 p-2 w-full rounded-md">
            </div>
            <div class="mb-4">
                <label for="password" class="block mb-2 font-semibold">Password</label>
                <input type="text" name="password" id="password" placeholder="Password" class="border-b border-gray-200 focus:outline-none placeholder-gray-300 p-2 w-full rounded-md">
            </div>
            {#if form?.invalid}
            <p class="text-red-800 text-sm mt-2">Fill out all the fields.</p>
            {/if}
            <div class="mt-8 w-full">
                <button class="bg-primary text-secondary w-full p-2 font-semibold">Register</button>
            </div>
        </form>
    </div>
</div>