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

</script>
<header class="flex items-center justify-between py-4 md:py-6 font-inter  bg-secondary">
    <h1 class="md:text-center text-2xl font-semibold text-primary px-12"><a href="/">Kharcha</a></h1>
    <nav class="flex gap-x-12 px-12 items-center">
        <a href="/register" class="uppercase text-tertiary  hover:text-primary transition-all duration-300 font-medium">Register</a>
        <a href="/login" class=" uppercase text-tertiary hover:text-primary transition-all duration-300 font-medium">Log In</a>
    </nav>
</header>
<div class="bg-secondary py-2 md:py-7">
    <slot />
</div>