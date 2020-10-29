import { bootstrapMicroFrontend } from 'sp-ops-micro-frontend';
import './index.css';
import Root from 'Root';
import { unregister } from './serviceWorker';
import { name } from '../package.json';

bootstrapMicroFrontend(name, Root, unregister);
