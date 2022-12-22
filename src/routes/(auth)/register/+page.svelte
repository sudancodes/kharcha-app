<div class="form bg-secondary h-full w-1/3  font-inter flex flex-col items-center justify-center">
            <form action="?/register" method="POST" class="w-full px-16">
                <h1 class="text-tertiary text-3xl mb-8 font-medium ">Create an account</h1>
                <div class="mb-4">
                    <label for="email" class="block text-tertiary mb-2 opacity-75 text-md">Email</label>
                    <input type="email" name="email" placeholder="test@test.com" id="email" class="bg-secondary border rounded-md placeholder-text-sm border-tertiary border-opacity-75 text-tertiary placeholder-tertiary placeholder-opacity-60 px-4 py-2 focus:border-primary placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary w-full" required>
                </div>
                <div>
                    <label for="password" class="block text-tertiary mb-2 opacity-75 text-md">Password</label>
                    <input type="text" name="password" id="password" placeholder="********" class="w-full bg-secondary border rounded-md placeholder-text-sm border-tertiary border-opacity-75 text-tertiary placeholder-tertiary placeholder-opacity-60 px-4 py-2 focus:border-primary placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary" required>
                </div>
                <div class="mt-8 w-full">
                    <button class="bg-primary text-secondary font-medium rounded-md text-md w-full px-4  py-2 opacity-75 hover:opacity-100 transition-all duration-300">Create account</button>
                </div>
            </form>
            <div class="mt-12">
                <p class="text-tertiary font-semibold text-lg">Already have an account <a href="/login" class="text-primary">Click here</a> </p>
            </div>
</div>
