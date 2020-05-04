import { useEffect, useRef } from 'react';

// https://usehooks.com/useEventListener/
export function useEventListener<T extends Function>(eventName: string, handler: T, element: Element | Window | null = window): void {

	// Create a ref that stores handler
	const savedHandler = useRef<T>();

	// Update ref.current value if handler changes.
	// This allows our effect below to always get latest handler ...
	// ... without us needing to pass it in effect deps array ...
	// ... and potentially cause effect to re-run every render.
	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(
		() => {
			if (element) {
				// Make sure element supports addEventListener
				// On
				const isSupported = element && element.addEventListener;
				if (!isSupported) {
					return () => { };
				}

				let eventListener: EventListenerOrEventListenerObject | null = null;
				const current = savedHandler.current;
				if (current) {
					// Create event listener that calls handler function stored in ref
					eventListener = (event: any) => current(event);
					element.addEventListener(eventName, eventListener);
				}

				// Add event listener

				// Remove event listener on cleanup
				return () => {
					if (eventListener) {
						element.removeEventListener(eventName, eventListener);
					}
				}
			};
		},
		[eventName, element] // Re-run if eventName or element changes
	);
};
