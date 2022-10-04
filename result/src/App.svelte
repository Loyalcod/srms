<script>
	import Header from "./component/Header.svelte";
	import Footer from "./component/Footer.svelte";
	import Modal from "./component/Modal.svelte";
	import FormModal from "./component/FormModal.svelte";

	const src = './images/result1.jpeg'

	let showModal = false;

	const ToggoleModel = ()=>{
		showModal = !showModal

	}
	
</script>


	<Header on:click = {ToggoleModel} />

	<Modal {showModal} on:click={ToggoleModel} >
		
		<FormModal/>
	
	</Modal>

	<img src={src} alt="student result checker">
	
	<Footer/>


<style>

	img{
		display: block;
		width: 100vw;
		height: 75vh;
		object-fit: cover;
	}
	
</style>