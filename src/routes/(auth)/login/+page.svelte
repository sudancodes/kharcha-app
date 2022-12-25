
    <div class="form bg-secondary h-full md:w-1/3  font-inter flex flex-col items-center justify-center">
            <form action="?/login" method="POST" class="w-full px-6 md:px-16">
                <h1 class="text-tertiary text-3xl mb-8 font-medium">Welcome Back</h1>
                <div class="mb-4">
                    <label for="email" class="block text-tertiary mb-2 opacity-75 text-md">Email</label>
                    <input type="email" name="email" placeholder="test@test.com" id="email" class="bg-secondary border rounded-md placeholder-text-sm border-tertiary border-opacity-75 text-tertiary placeholder-tertiary placeholder-opacity-60 px-4 py-2 focus:border-primary placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary w-full" required>
                </div>
                <div>
                    <label for="password" class="block text-tertiary mb-2 opacity-75 text-md">Password</label>
                    <input type="text" name="password" id="password" placeholder="********" class="w-full bg-secondary border rounded-md placeholder-text-sm border-tertiary border-opacity-75 text-tertiary placeholder-tertiary placeholder-opacity-60 px-4 py-2 focus:border-primary placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary" required>
                </div>
                <div class="mt-8 w-full">
                    <button class="bg-primary text-secondary font-medium rounded-md text-md w-full px-4  py-2 opacity-75 hover:opacity-100 transition-all duration-300">Sign In</button>
                </div>
                <p class="text-sm text-tertiary mt-4 text-center opacity-75">Or</p>
                <div class="phone  mt-4 w-full">

                    <a href="/login/phone" class="bg-primary text-secondary font-medium rounded-md text-md  px-4 w-full block text-center py-2 opacity-75 hover:opacity-100 transition-all duration-300"><span class="flex items-center justify-center gap-x-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                       <span>Use phone instead</span> </span> </a>
                </div>
            </form>
            <div class="mt-12">
                <p class="text-tertiary font-semibold text-lg">Create an account <a href="/register" class="text-primary">Click here</a> </p>
            </div>
        </div>
