const initialState = {
  tasks: [],
  currentScreen: 'Home',
}

export function addTask(task) {
  return {
    type: 'ADD_TASK',
    payload: task,
  }
}

export function completeTask(id) {
  return {
    type: 'COMPLETE_TASK',
    payload: id,
  }
}

export function deleteTask(id) {
  return {
    type: 'DELETE_TASK',
    payload: id,
  }
}

export function changeScreen(screen) {
  return {
    type: 'CHANGE_SCREEN',
    payload: screen,
  }
}

export function store(state = initialState, action) {
  const { type, payload } = action;
  const { tasks } = state;
  switch (type) {
    case 'ADD_TASK':
      const newTask = {
        contex: payload,
        isCompleted: false,
        isDeleted: false,
      }
      return {
        ...state,
        tasks: [ ...tasks, newTask ],
      };
    case 'COMPLETE_TASK':
      let completedTask = [ ...tasks ];
      completedTask[payload].isCompleted = !completedTask[payload].isCompleted;
      return {
        ...state,
        tasks: [ ...completedTask ],
      };
    case 'DELETE_TASK':
      let deletedTask = [ ...tasks ];
      deletedTask[payload].isDeleted = !deletedTask[payload].isDeleted;
      return {
        ...state,
        tasks: [ ...deletedTask ],
      };
    case 'CHANGE_SCREEN':
      return {
        ...state,
        currentScreen: payload,
      };
    default:
      return {
        ...state,
      }
  }
};
