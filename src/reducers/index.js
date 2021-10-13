
const storage = {
    searchResult: [],
    searchStatus: '', // 'done', 'error', 'no_data', 'loading'
    chosenIdx: null
}

export const reducer = (state = storage, action) => {
    switch (action.type) {
        case 'LOADING':
            state = {...storage,
                searchResult: [],
                searchStatus: 'LOADING',
                chosenIdx: null
            }
            return state;
            break;
        case 'DONE':
            state = {...storage,
                searchResult: action.payload,
                searchStatus: 'DONE',
                chosenIdx: null
            }
            return state;
            break;
        case 'ERROR':
            state = {...storage,
                searchResult: [],
                searchStatus: 'ERROR',
                chosenIdx: null
            }
            return state;
            break;
        case 'CHOOSE_IMAGE':
            state = {...storage,
                chosenIdx: action.payload
            }
            return state;
            break;
    
        default:
            return state;
            break;
    }

} 