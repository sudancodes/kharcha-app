<script>
    import { supabaseClient } from '$lib/supabase'
  import { invalidateAll } from '$app/navigation'
  import { onMount } from 'svelte'

  onMount(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(() => {
      invalidateAll()
    })

    return () => {
      subscription.unsubscribe()
    }
  })
    export let data
</script>
<header class="flex items-center justify-between py-4 md:py-6 font-inter  bg-secondary">
    <h1 class="md:text-center text-2xl font-semibold text-primary px-12"><a href="/">Kharcha</a></h1>
    <nav class="flex gap-x-12 px-12 items-center">
        {#if data.session}
        <form action="/logout" method="POST">
            <button type="submit" class="uppercase text-tertiary hover:text-primary transition-all duration-300 font-medium">Log Out</button>
        </form>
        <a href="/dashboard/home" class="uppercase text-tertiary hover:text-primary transition-all duration-300 font-medium">Dashboard</a>
        {:else}
        <a href="/register" class="uppercase text-tertiary  hover:text-primary transition-all duration-300 font-medium">Register</a>
        <a href="/login" class=" uppercase text-tertiary hover:text-primary transition-all duration-300 font-medium">Log In</a>
        {/if}
    </nav>
</header>
<div class="bg-secondary py-2 md:py-7">
    <slot />
</div>