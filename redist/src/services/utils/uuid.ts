export const uuid = () =>
    Date.now().toString(36) + "_" + Math.random().toString(36).split('.')[1]