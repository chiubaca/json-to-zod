<script lang="ts">
	import { jsonInput, zodOutput } from '../stores/inputStore';
</script>

<div class="container mx-auto h-screen ">
	<h1 class="text-xl">JSON to ZOD</h1>

	<div id="input-container" class="flex justify-center h-full gap-3">
		<div class="w-full h-full">
			<textarea name="" id="" class="border rounded-xl w-full h-full" bind:value={$jsonInput} />

			<div />
		</div>
		<div class="w-full">
			<textarea name="" id="" class="border rounded-xl w-full  h-full"> {$zodOutput}</textarea>
		</div>
	</div>
</div>
