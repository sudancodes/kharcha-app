<script>
    export let data
    const exp = data.expense[0]
</script>

<div class="show">
    <p>{exp.name}</p>
    <p>{exp.amount}</p>
</div>