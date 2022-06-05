<script lang="ts">
	import JsonToTS from 'json-to-ts';
	import { generate } from 'ts-to-zod/lib/';

	// compile from file

	const jsonString = `
  {"cats":[{"name":"Kittin"},{"name":"Mittin"}],"favoriteNumber":42,"favoriteWord":"Hello"}
`;

	try {
		const json = JSON.parse(jsonString);
		// console.log("🚀 ~ file: App.svelte ~ line 16 ~ json", json);

		const typeInterface = JsonToTS(json)
			.map((item) => item.toString())
			.join('\n');
		// append all item in array to string

		console.log('🚀 ~ file: App.svelte ~ line 19 ~ ts', typeInterface);

		const { getZodSchemasFile, getIntegrationTestFile, errors } = generate({
			sourceText: typeInterface
		});

		console.log('🚀 ZOD!!!', getZodSchemasFile('./hero'));
	} catch (err) {
		console.log('bad json', err);
	}
</script>

<div class="container mx-auto ">
	<h1 class="text-xl">JSON to ZOD</h1>

	<div id="input-container" class="flex justify-center ">
		<div>
			<textarea name="" id="" cols="30" rows="10" class="border " />
		</div>
		<div
			class="flex flex-col
    
    "
		>
			<textarea name="" id="" cols="30" rows="10" class="border rounded-xl" />
			<button class="border rounded-xl">generate</button>
		</div>
	</div>
</div>
