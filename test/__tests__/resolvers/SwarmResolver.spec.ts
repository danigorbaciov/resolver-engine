const data = [
  ["", null],
  ["www.google.com", null],
  ["http://example.com", null],
  ["https://example.com", null],
  ["https://github.com/Crypto-Punkers/resolver-engine/blob/master/examples/github.ts", null]
];

describe("SwarmResolver", () => {
  const subject = {} as any; // IMPLEMENT ME

  it.each(data)("testing %o", async (input, output) => {
    const actualOutput = await subject(input);
    expect(actualOutput).toBe(output);

    // IMPLEMENT ME
  });
});