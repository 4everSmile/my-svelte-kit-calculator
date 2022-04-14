import { types } from 'mobx-state-tree';
import { onSnapshot } from 'mobx-state-tree';

const useMstSnapshot = (store) => ({
	subscribe: (method) => {
		method(store);

		return onSnapshot(store, () => {
			method(store)
		});
	}
});

const CalculatorStore = types
	.model({ value: '' })
	.actions((state) => {
		return {
			setValue: (newValue) => {
				state.value = newValue;
			}
		};
	});

const calculatorStore = useMstSnapshot(CalculatorStore.create()); 

export default calculatorStore;
