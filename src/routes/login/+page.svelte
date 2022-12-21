<script>

</script>
<div class="card flex justify-center flex-col items-center space-y-8 p-4">
    <h2 class="text-xl uppercase">Sign In</h2>
    <form action="?/login" method="POST">
        <div class="mb-4">
            <label for="email" class="block">Email</label>
            <input type="email" name="email" placeholder="Your email.." id="email" class="border-b border-gray-200 focus:outline-none placeholder-gray-300 p-2" required>
        </div>
        <div>
            <label for="password" class="block">Password</label>
            <input type="text" name="password" id="password" placeholder="Password" class="border-b border-gray-200 focus:outline-none placeholder-gray-300 p-2" required>
        </div>
        <div class="mt-8 w-full">
            <button class="bg-gray-300 w-full p-2">Sign In</button>
        </div>
    </form>
</div>