import { generate } from 'ts-to-zod/lib/';
import JsonToTS from 'json-to-ts';

const jsonToZod = (jsonString: string) => {
	if (jsonString.length === 0) {
		return 'Add some JSON to convert';
	}

	try {
		const json = JSON.parse(jsonString);

		const typeInterface = JsonToTS(json)
			.map((item) => item.toString())
			.join('\n');

		const { getZodSchemasFile, getIntegrationTestFile, errors } = generate({
			sourceText: typeInterface
		});

		return getZodSchemasFile('./hero');
	} catch (err) {
		console.log('bad json', err);
		return 'Bad json';
	}
};

export default jsonToZod;
