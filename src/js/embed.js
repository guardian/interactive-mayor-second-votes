import iframeMessenger from 'guardian/iframe-messenger'

import votes from './components/votes.js'

window.init = function init(el, config) {
    iframeMessenger.enableAutoResize();
    votes(el, config);
};
