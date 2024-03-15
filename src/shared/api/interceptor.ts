import { options } from '@/shared/api/api.helpers';
import axios from 'axios';

export const $axios = axios.create(options);

