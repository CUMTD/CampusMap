import * as data from './data';
import { PointOfInterest } from './types/pointOfInterest';
import { PointOfInterestCategory } from './types/pointOfInterestCategory';
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
	pointOfInterestCategories: PointOfInterestCategory[];
	selectedPointOfInterestCategory: PointOfInterestCategory | null;
	selectedPointOfInterest: PointOfInterest | null;

	routes: Route[];

	transferPoints: TransferPoint[];
	selectedTransferPoint: TransferPoint | null;
	activeTransferPointIds: number[];
}

export type State = Readonly<DefaultableState>;

export enum Actions {
	SelectTransferPoint,
	SelectPointOfInterestCategory,
	SelectPointOfInterest,
	Clear
}

interface BaseAction<T extends Actions> {
	type: T;
}

interface SetCurrentTransferPoint extends BaseAction<Actions.SelectTransferPoint> {
	selectedTransferPoint: TransferPoint | null;
}

interface SelectPointOfInterestCategory extends BaseAction<Actions.SelectPointOfInterestCategory> {
	category: PointOfInterestCategory | null;
}

interface SelectPointOfInterest extends BaseAction<Actions.SelectPointOfInterest> {
	poi: PointOfInterest | null;
}

interface Clear extends BaseAction<Actions.Clear> {
}

export type Action = SetCurrentTransferPoint | SelectPointOfInterestCategory | SelectPointOfInterest | Clear;

export function reducer(state: State, action: Action): State {
	switch (action.type) {
		case Actions.SelectTransferPoint:
			return {
				...state,
				selectedTransferPoint: action.selectedTransferPoint,
				activeTransferPointIds: filterTransferPoints(action.selectedTransferPoint, state.routes, state.transferPoints)
			};
		case Actions.SelectPointOfInterestCategory:
			return {
				...state,
				selectedPointOfInterestCategory: action.category,
				selectedPointOfInterest: null
			};
		case Actions.SelectPointOfInterest:
			const category = action.poi ?
				state.pointOfInterestCategories.filter(c => c.pointsOfInterest.filter(poi => poi.name === action.poi?.name).length > 0)[0]
				: state.selectedPointOfInterestCategory;

			return {
				...state,
				selectedPointOfInterest: action.poi,
				selectedPointOfInterestCategory: category,
				selectedTransferPoint: null
			};
		case Actions.Clear:
			return {
				...state,
				selectedPointOfInterest: null,
				selectedPointOfInterestCategory: null,
				selectedTransferPoint: null
			}
		default:
			return state;
	}
}

export const StateDefaults: DefaultableState = ({
	pointOfInterestCategories: data.PointsOfInterest,
	selectedPointOfInterestCategory: null,
	selectedPointOfInterest: null,

	routes: data.Routes,

	transferPoints: data.TransferPoints,
	selectedTransferPoint: null,
	activeTransferPointIds: filterTransferPoints(null, data.Routes, data.TransferPoints)
});
