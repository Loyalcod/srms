<script>
	let name = 'hello guys welcome to the student result management system'
	import Outer from './Outer.svelte'
	let count = 0
	const handleClick = () =>{
		count += 1
	}
	const num = 10

	let loggedin = false
	const toggle = ()=>{

		loggedin = !loggedin
	}
	
</script>

<main>
	<h1>{name}</h1>
	<Outer word =  'component is svelte'/>
	<Outer />
	<button on:click= {handleClick}> click {count} times</button>
	{#if loggedin}
	<button on:click={toggle}>Logout</button>
	{:else}
	<button on:click={toggle}>Login</button>
	{/if}

	{#if num > 10}
	 	<p> {num} is greater than 10 </p>
	{:else if 5 < num}
		<p> 5 is less than {num} </p>
	{:else}
	 	{num} is between 5 and 10
	{/if}

</main>

<style>
	h1{
		color: red;
		font-size: 20px;
	}
</style>