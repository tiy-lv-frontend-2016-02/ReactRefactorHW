const result = function(fn) {
  if (typeof fn === 'function') {
    return fn();
  } else {
    return fn;
  }
}


export function rif(cond, ifTrue, ifFals) {
  return result(cond) ? result(ifTrue) : result(ifFalse);
}

export default {
  rif: rif
};