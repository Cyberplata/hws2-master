import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any

    // Универсальная функция сортировки по алфавиту
    function sorting(a: UserType, b: UserType): number {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    }

    switch (action.type) {
        case 'sort': { // by name
            // need to fix
            return action.payload === 'up'
                ? [...state].sort(sorting)
                : [...state].sort((a,b) => sorting(b,a))
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age > action.payload)
        }
        default:
            return state
    }
}
