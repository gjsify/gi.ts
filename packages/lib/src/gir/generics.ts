const GenericNames = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

export function* getGenericNames() {
  let names = GenericNames.map(s => `${s}`);
  let i = 1;

  while (true) {
    for (const name of names) {
      yield name;
    }

    names = names.map((s, i) => `${s}${i}`);

    i++;
  }

  // This will always be a string return.
  return "ThisShouldNeverHappen";
}

export class GenericNameGenerator {
  static new(): () => string {
    const genericNames = getGenericNames();

    return () => genericNames.next().value;
  }
}
