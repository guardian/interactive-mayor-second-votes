import './polyfill/classList'
import './polyfill/rAF'

import votes from './components/votes'

export function init(el, context, config, mediator) {
    votes(el, config);
}
