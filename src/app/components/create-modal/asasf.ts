export function dsfdf(l:Array<any>): Array<number> {

  let result: Array<number> = [];

  l.map((item) => {
    if (typeof item === 'number') {
      result.push(item);
    }
  })

  return result;
}
