import * as data from './data';
import { PointOfInterest } from './types/pointOfInterest';
import { PointOfInterestCategory } from './types/pointOfInterestCategory';
import { Route } from './types/route';

interface DefaultableState {
	pointOfInterestCategories: PointOfInterestCategory[];
	selectedPointOfInterestCategory: PointOfInterestCategory | null;
	selectedPointOfInterest: PointOfInterest | null;
	routes: Route[];
}

export type State = Readonly<DefaultableState>;

export enum Actions {
	SelectPointOfInterestCategory,
	SelectPointOfInterest,
	Clear
}

interface BaseAction<T extends Actions> {
	type: T;
}

interface SelectPointOfInterestCategory extends BaseAction<Actions.SelectPointOfInterestCategory> {
	category: PointOfInterestCategory | null;
}

interface SelectPointOfInterest extends BaseAction<Actions.SelectPointOfInterest> {
	poi: PointOfInterest | null;
}

interface Clear extends BaseAction<Actions.Clear> {
}

export type Action = SelectPointOfInterestCategory | SelectPointOfInterest | Clear;

export function reducer(state: State, action: Action): State {
	switch (action.type) {
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
				selectedPointOfInterestCategory: category
			};
		case Actions.Clear:
			return {
				...state,
				selectedPointOfInterest: null,
				selectedPointOfInterestCategory: null
			}
		default:
			return state;
	}
}

export const StateDefaults: DefaultableState = ({
	pointOfInterestCategories: data.PointsOfInterest,
	selectedPointOfInterestCategory: null,
	selectedPointOfInterest: null,
	routes: data.Routes
});
