
export type InitialStateType ={
	data: {}
	loading: boolean
	error: null | boolean
}

export const initialState: InitialStateType = {
	data: {},
	loading: true,
	error: null,
}



export  const NavigationReducer = (
	state: InitialStateType = initialState,
	action: string
): InitialStateType => {
	switch (action) {
		default:
			return state
	}
}


