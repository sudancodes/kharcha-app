<main class="h-screen w-screen">
    <div class="md:flex w-full h-full md:justify-between relative">
        <div class="image hidden w-2/3  md:block" style="background: linear-gradient(rgba(0,20,0,0.5),rgba(0,30,0,0.7)),url('/thumbsup.jpg') ; background-size: cover;">
            <div class="logo py-4">
                <a href="/" class="font-inter text-center text-2xl font-semibold text-primary px-12">Kharcha</a>
            </div>
            <div class="content">
                <p class="font-inter font-bold absolute bottom-16 left-16 leading-12 text-4xl text-tertiary">Welcome to Kharcha, <br> <span class="">the leading expense tracker app!</span> </p>
            </div>
        </div>
   <slot/>

</main>