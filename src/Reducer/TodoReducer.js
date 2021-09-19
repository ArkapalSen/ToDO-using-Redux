const initialData = {
  list: [],
};
const TodoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
    //   console.log(id);
      return {
        // ...state,
        list: [
          ...state.list,
          {
            id: id,

            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      console.log(typeof(newList))
      return {
        // ...state.list,
        list: newList
      };

      case "REMOVE_TODO":
        
        return {
        //   ...state.list,
          list: []
        };
  

    default:
      return state;
  }
};

export default TodoReducer;
