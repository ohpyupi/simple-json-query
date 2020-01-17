# Simple JSON Query

This library is to enable JSON to be used as a query against a list of data entry. The library is not designed to be performant over dynamic and large data entry list.
Rather, it is encouraged to be used when your data entry list is short or static, but still you want a query-flavor search system.


## API

```js
const { find, findAll } = require('simple-json-query')
```

### `findAll(query, list)`
Returns a list of data entry from the result of the query
```js
const list = [
  {
    name: "Max",
    hoby: "Basketball",
    age: 13
  },
  {
    name: "Andrew",
    hoby: "Piano",
    age: 20
  }
];
const query = {
  age: {
    $gt: 15
  },
  hoby: {
    $in: ["Piano", "Ski"]
  }
};
const result = findAll(query, list);
/**
 * [
 *   {
 *     name: "Andrew",
 *     hoby: "Piano"
 *   }
 * ]
 */
 
```

### `find(query, list)`
Returns a data entry that is found first from the result of the query

### Queries

Queries are Javascript objects that describe which data entry will be returned


##### No nested-structure

When your query or data entry has a nested-strcutrue, the query won't work. This is simply beyond the scope of this library.
You might need to find other query libraries.

#### Operators

##### `$in`

The operator `$in` checks if a data entry's propety value belongs to the data of the operator. 

##### `$lt`, `$lte`, `$gt`, `$gte`, `$ne`

These operators do a smilar work as Javascript comparison operators such as `<`, `<=`, `>`, `>=`, and `!==`, respectively.
```js
const query = {
  browser: {
    $ne: "Safari"
  },
  deviceOS: "Android",
  deviceOSVersion: {
    $lte: 9
  }
};
const deviceList = [
  {
    browser: "Chrome",
    deviceOS: "Windows",
    deviceOSVersion: 10
  },
  {
    browser: "FireFox",
    deviceOS: "Android",
    deviceOSVersion: 6
  },
  {
    browser: "IE",
    deviceOS: "Windows",
    deviceOSVersion: 10
  },
  {
    browser: "Opera",
    deviceOS: "Android",
    deviceOSVersion: 9
  },
];
const result = findAll(query, deviceList);
/**
 * [
 *  {
 *    browser: "FireFox",
 *    deviceOS: "Android",
 *    deviceOSVersion: 6
 *   },
 *   {
 *     browser: "Opera",
 *     deviceOS: "Android",
 *     deviceOSVersion: 9
 *   },
 * ]
 */

```

## License

MIT
