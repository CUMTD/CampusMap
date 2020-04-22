import * as data from './data';
import { Route } from './types/route';
import { TransferPoint } from './types/transferPoint';

function filterTransferPoints(active: TransferPoint | null, routes: Route[], transferPoints: TransferPoint[]): number[] {
	if (!active) {
		return transferPoints.map(tp => tp.number);
	}

	return routes
		.filter(r => active.routeIds.indexOf(r.number) >= 0) // only routes associated with this bp
		.reduce((p, c) => {
			p.push(...c.transferPointIds);
			return p;
		}, new Array<number>()) // find transfer points for these routes
		.filter((v, i, s) => s.indexOf(v) === i) // distinct
}

interface DefaultableState {
	transferPoints: TransferPoint[];
	routes: Route[];
	selectedTransferPoint: TransferPoint | null;
	activeTransferPointIds: number[];
}

export type State = Readonly<DefaultableState>;

export enum Actions {
	SelectTransferPoint
}

interface BaseAction<T extends Actions> {
	type: T;
}

interface SetCurrentTransferPoint extends BaseAction<Actions.SelectTransferPoint> {
	selectedTransferPoint: TransferPoint | null;
}

export type Action = SetCurrentTransferPoint;

export function reducer(state: State, action: Action): State {
	switch (action.type) {
		case Actions.SelectTransferPoint:
			return {
				...state,
				selectedTransferPoint: action.selectedTransferPoint,
				activeTransferPointIds: filterTransferPoints(action.selectedTransferPoint, state.routes, state.transferPoints)
			};
		default:
			return state;
	}
}

export const StateDefaults: DefaultableState = ({
	transferPoints: data.TransferPoints,
	routes: data.Routes,
	selectedTransferPoint: null,
	activeTransferPointIds: filterTransferPoints(null, data.Routes, data.TransferPoints)
});
