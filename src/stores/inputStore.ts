import { writable, derived } from 'svelte/store';
import jsonToZod from '../utils/jsonToZod';

export const jsonInput = writable('');

export const zodOutput = derived(jsonInput, ($jsonInput) => jsonToZod($jsonInput));
