const loading = (loading = false, action) => {
    switch(action.type){
        case 'LOADING':
            loading = true
            return loading;
        case 'NOTLOADING':
            loading = false
            return loading;
        default:
            return loading;
    }
}
export default loading