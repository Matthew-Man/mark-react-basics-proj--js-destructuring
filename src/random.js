/** 
 * Pick and return a random element from given array
 */
function pick(arr) {
    const ix = Math.floor(Math.random() * arr.length);
    return arr[ix];
}


module.exports = { pick };