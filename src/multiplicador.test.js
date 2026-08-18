import multiplicar from "./multiplicador.js";

describe("Multipicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
});


