export const doneAction = data => {
    return {
        type: 'DONE',
        payload: data
    }
}

export const loadingAction = () => {
    return {
        type: 'LOADING',
        payload: null
    }
}

export const errorAction = () => {
    return {
        type: 'ERROR',
        payload: null
    }
}

export const chooseImageAction = (data) => {
    return {
        type: 'CHOOSE_IMAGE',
        payload: data
    }
}