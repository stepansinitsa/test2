export function sortLifeLine(list) {
  let result = list.sort(function (a, b) {
    if (a.health < b.health) {
      return 1;
    }
    if (a.health > b.health) {
      return -1;
    }
    return 0;
  });
  return result;
}
