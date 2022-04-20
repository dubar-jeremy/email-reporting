import API from '../../config/axios.config';

// Authentication
export const signIn = async (data) => await API.post('/login', data);
export const register = async (data) => await API.post('/register', data);

// customer
export const postCustomer = async (data) => await API.post('/customer', data);
export const getCustomers = async () => await API.get('/customer');

// employee
export const postEmployee = async (data) => await API.post('/employee', data);

// reporting
export const postReporting = async (data) => await API.post('/reporting', data);
export const getReportings = async () => await API.get('/reporting');
