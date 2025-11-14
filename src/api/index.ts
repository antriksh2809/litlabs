import productApi from './productApi';
import programApi from './programApi';
import bookApi from './bookApi';
import { submitDemoLead } from './demoApi';

const api = {
  products: productApi,
  programs: programApi,
  books: bookApi,
  submitDemoLead
};

export default api;