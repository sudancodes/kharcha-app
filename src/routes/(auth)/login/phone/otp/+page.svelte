
        <div class="form bg-secondary h-full w-1/3  font-inter flex flex-col items-center justify-center">
            <form action="?/otp" method="POST" class="w-full px-16">
                <h1 class="text-tertiary text-3xl mb-8 font-medium">Verify OTP</h1>
                <div class="mb-4">
                    <label for="phone" class="block text-tertiary mb-2 opacity-75 text-md">Enter 6 digit code</label>
                    <input type="phone" name="phone" placeholder="123456" id="phone" class="bg-secondary border rounded-md placeholder-text-sm border-tertiary border-opacity-75 text-tertiary placeholder-tertiary placeholder-opacity-60 px-4 py-2 focus:border-primary placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary w-full" required>
                </div>
                <div class="mt-8 w-full">
                    <button class="bg-primary text-secondary font-medium rounded-md text-md w-full px-4  py-2 opacity-75 hover:opacity-100 transition-all duration-300">Confirm OTP</button>
                </div>
            </form>
        </div>
