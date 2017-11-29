export default {
    employees: [],
    employee: {},
    loading: false,
    errors: {},
    isAuthenticated: localStorage.getItem('jwt') ? true : false
}