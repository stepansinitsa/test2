import { sortLifeLine } from "../life_line.js";

test("sortLifeLine 1", () => {
  const list = [
    {
        id: 1,
        name: 'мечник',
        health: 10
    },
    {
        id: 2,
        name: 'маг',
        health: 100
    },
    {
        id: 3,
        name: 'лучник',
        health: 80
    }
];
  const result = sortLifeLine(list);
  expect(result).toEqual([
    {id: 2, name: 'маг', health: 100},
    {id: 3, name: 'лучник', health: 80},
    {id: 1, name: 'мечник', health: 10}
  ]);
});
