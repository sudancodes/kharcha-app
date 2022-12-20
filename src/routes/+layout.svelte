<script>
    import "../app.css"
</script>
<header class="flex items-center justify-between p-6 font-inter shadow-lg">
    <h1 class="text-center text-3xl font-semibold text-secondary"><a href="/">Kharcha</a></h1>
    <nav class="flex gap-x-6">
        <a href="/register" class=" bg-primary text-secondary rounded-md px-4 py-2 hover:shadow-md transition-all duration-300 font-medium">Register</a>
        <a href="/login" class=" bg-primary text-secondary rounded-md px-4 py-2 hover:shadow-md transition-all duration-300 font-medium">Sign In</a>
        <a href="/"  class=" bg-primary text-secondary rounded-md px-4 py-2 hover:shadow-md transition-all duration-300 font-medium">Sign Out</a>
    </nav>
</header>
<div class="bg-info">
    <slot></slot>
</div>