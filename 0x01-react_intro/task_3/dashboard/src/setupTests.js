// Mock ReadableStream globally for Node.js environment
global.ReadableStream = require('stream').Readable;

// Ensure fetch is polyfilled using undici or node-fetch
import { fetch } from 'undici';  // or 'node-fetch' if you're using it
global.fetch = fetch;

// Jest-DOM and Enzyme setup
import '@testing-library/jest-dom';
// Importing the necessary packages
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-18';

// Configuring enzyme to use the adapter
Enzyme.configure({ adapter: new Adapter() });
