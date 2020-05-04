/**
 * Enforce that a function not be called until a certain amount of time has passed without it being called.
 */
export function debounce<T extends Function>(callback: T, wait = 20) {
	let timeoutRef = 0;
	let callable = (...args: any) => {
		clearTimeout(timeoutRef);
		timeoutRef = window.setTimeout(() => callback(...args), wait);
	};
	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	return <T>(<any>callable);
}
