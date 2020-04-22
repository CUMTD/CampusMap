import React, { Context, createContext, Dispatch, useReducer } from 'react';
import { Action, reducer, State, StateDefaults } from '../reducer';
import '../scss/app.scss';
import Layout from './layout';

export interface AppContextType {
	dispatch: Dispatch<Action>;
	state: State;
}

export const AppContext: Context<AppContextType> = createContext<AppContextType>({
	dispatch: () => { },
	state: { ...StateDefaults }
});

function App() {
	const [state, dispatch] = useReducer(reducer, { ...StateDefaults });
	const context = { state, dispatch };

	return (
		<AppContext.Provider value={context}>
			<Layout />
		</AppContext.Provider>
	);
}

export default App;
