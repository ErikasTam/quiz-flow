export interface State {
  questions: Array<{
    dataKey: string
    selectedId: string
  }>
}

const defaultState = {
    questions: [],
  };
  
  export default function reducer(state: State = defaultState, action) {
    switch(action.type) {
      case 'UPDATE':
        return {
          ...state,
          questions: [...state.questions, {
            dataKey: action.object.dataKey,
            selectedId: action.object.selectedId,
          }],
        };
      default:
        return state;
    }
  }