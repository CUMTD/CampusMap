import React, { FC, useContext } from 'react';
import { AppContext } from '../app';
import Route from './route';

function GetRoute(number: number, active: boolean): JSX.Element {

	switch (number) {
		case 1:
			return (
				<Route
					key={number}
					number={number}
					color="#fcee1f"
					offColor="#fefbd1"
					active={active}
					arrows={
						[
							<path d="M97.499 630.447l7.5 15 7.5-15h-15z" />,
							<path d="M57.5 50L65 35l7.5 15h-15z" />
						]
					}>
					<path d="M104.999 633.447V324.96a10.001 10.001 0 0110.001-10l154.958.002a9.997 9.997 0 0010-10v-20a5.002 5.002 0 015-5h10a9.997 9.997 0 0010-10v-195a10.003 10.003 0 00-10-10H70a4.998 4.998 0 01-5-5V47" />
				</Route>
			);
		case 2:
			return (
				<Route
					key={number}
					number={number}
					color="#e7131a"
					offColor="#f9b8ba"
					active={active}
					arrows={
						[
							<path d="M536.958 407.462l15-7.5-15-7.5v15z" />,
							<path d="M52.5 28L60 13l7.5 15h-15z" />
						]
					}
				>
					<path d="M539.958 399.962h-50c-5.523 0-10-4.477-10-10v-110c0-5.522-4.477-10-10-10h-60c-5.523 0-10-4.477-10-10v-80c0-5.522-4.477-10-10-10h-85.051a4.949 4.949 0 01-4.949-4.949V75.026a5.065 5.065 0 00-5.064-5.064H109.958l-39.959-.002c-5.523 0-10-4.477-9.999-10V25" />
				</Route>
			);
		case 5:
			return (
				<Route
					key={number}
					number={number}
					color="#008063"
					offColor="#cae0d9"
					active={active}
					arrows={
						[
							<path d="M44.999 57.462l-15 7.5 15 7.5v-15z" />,
							<path d="M720.006 112.487L735 120l-15.006 7.487.012-15z" />
						]
					}
				>
					<path d="M41.999 64.962h7.959a10.001 10.001 0 0110 10v75c0 16.569 13.431 30 30 30h570a29.998 29.998 0 0030-30v-19.991a10 10 0 0110.008-10l23.034.019" />
				</Route>
			);
		case 10:
			return (
				<Route
					key={number}
					number={number}
					color="#c7994a"
					offColor="#f0e6d4"
					active={active}
					arrows={
						[
							<path d="M59.999 502.46l-15 7.5 15 7.5v-15z" />,
							<path d="M687.5 95l7.5-15 7.5 15h-15z" />
						]
					}
				>
					<path d="M56.999 509.96h43c5.523 0 10-4.477 10-10v-175a5.001 5.001 0 015-5l264.959.002a9.997 9.997 0 0010-10v-190c0-5.522 4.477-10 10-10h123.69c4.179 0 8.331.674 12.296 1.996l17.793 5.931a40.42 40.42 0 0012.779 2.073H685c5.522 0 9.999-4.477 10-9.999V92" />
				</Route>
			);
		case 12:
			return (
				<Route key={number} number={number} color="#006991" offColor="#c9dae3" active={active}>
					<g>
						<path d="M569.958 482.462c0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.759 2.24-5 5-5s5 2.241 5 5z" />
						<path d="M59.958 74.962h235v90c0 5.523 4.477 10 10 10h85.056a4.945 4.945 0 014.944 4.944v120.056a10 10 0 0010 10h20c5.523 0 10 4.478 10 10v69.752a10.25 10.25 0 01-10.248 10.248h-4.86a4.892 4.892 0 00-4.892 4.892v15.105l.001.003h54.999c5.523 0 10 4.478 10 10v15a10 10 0 0010 10h65a10.001 10.001 0 0110 10v12.5" />
					</g>
				</Route>
			);
		case 13:
			return (
				<Route key={number} number={number} color="#999" offColor="#ccc" active={active}>
					<path d="M689.958 124.962H566.065a37.63 37.63 0 01-11.9-1.931l-19.162-6.387a32.765 32.765 0 00-10.363-1.682H399.773a4.815 4.815 0 00-4.815 4.815v35.185a10 10 0 01-10 10h-75a10.001 10.001 0 00-10 10v94.785a5.215 5.215 0 01-5.215 5.215h-9.785c-5.523 0-10 4.478-10 10v20c0 5.523 4.477 10 10 10h140.059a4.942 4.942 0 014.941 4.941v69.884a5.175 5.175 0 01-5.176 5.175h-4.824c-5.523 0-10 4.478-10 10v14.997a5.004 5.004 0 005.003 5.003h29.997" />
				</Route>
			);
		case 21:
			return (
				<Route key={number} number={number} color="#000" offColor="#ddd" active={active}>
					<g>
						<path d="M451.726 583.801a5.001 5.001 0 017.071-7.071 5.001 5.001 0 01-7.071 7.071z" />
						<path d="M404.958 389.962h20v-70h-10c-5.523 0-10-4.477-10-10v-145a10.003 10.003 0 00-10-10h-95a10.001 10.001 0 00-10 10v100h-10c-5.523 0-10 4.478-10 10v105c0 5.523 4.477 10 10 10h125v30c0 5.523 4.477 10 10 10h50c5.523 0 10 4.478 10 10v155.172a2 2 0 01-3.414 1.414l-12.747-12.747" />
					</g>
				</Route>
			);
		case 22:
			return (
				<Route
					key={number}
					number={number}
					color="#5A1D5A"
					offColor="#eee9ef"
					active={active}
					arrows={
						[
							<path d="M377.458 79.962l7.5-15 7.5 15h-15z" />
						]
					}
				>
					<path d="M444.958 424.962h20a9.997 9.997 0 0010-10v-210c0-5.522-4.477-10-10-10h-70c-5.523 0-10 4.478-10 10v110c0 5.523-4.477 10-10 10H239.956c-13.806 0-24.998 11.192-24.998 24.998v.002a25 25 0 01-25 25h-45c-16.569 0-30-13.431-30-30v-90c0-16.568 13.431-30 30-30h47.5a22.5 22.5 0 0122.5 22.5s0 0 0 0c0 12.427 10.074 22.5 22.5 22.5h57.5v-100c0-5.522 4.477-10 10-10h69.976c5.536 0 10.024-4.487 10.024-10.023V76.962" />
				</Route>
			);
	}
	throw new Error('Unknown route');
}

const Routes: FC = () => {
	const context = useContext(AppContext);

	const activeRoutes: JSX.Element[] = [];
	const inactiveRoutes: JSX.Element[] = [];

	for (let number of [22, 21, 13, 12, 10, 5, 2, 1]) {
		const active = !context.state.selectedPointOfInterest ||
			(context.state.selectedPointOfInterest && context.state.selectedPointOfInterest.routeNumbers.filter(r => r === number).length > 0);

		const route = GetRoute(number, active);
		if (active) {
			activeRoutes.push(route);
		} else {
			inactiveRoutes.push(route);
		}
	}

	return (
		<g>
			{inactiveRoutes}
			{activeRoutes}
		</g>
	);
};

export default Routes;
