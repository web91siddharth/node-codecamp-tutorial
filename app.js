const _ = require('lodash') // "_(underscore)" is a one-letter alias for "lodash"

const items = [1,[2,[3,[4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);

