import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { PackApiIF, PacksApiIF } from "@/api/types/packs";

const pack = {
  id: 1,
  title: "Title",
  memo: "Memo",
  startDate: "2000-01-01",
  endDate: "2000-02-01",
};
const packApi = {
  id: 1,
  title: "Title",
  memo: "Memo",
  start_date: "2000-01-01",
  end_date: "2000-02-01",
};
const packPartial = {
  id: 1,
  title: "Title",
  startDate: "2000-01-01",
  endDate: "2000-02-01",
};
const packPartialApi = {
  id: 1,
  title: "Title",
  start_date: "2000-01-01",
  end_date: "2000-02-01",
};

describe("PackApiIF", () => {
  it("read Api form data", () => {
    expect(new PackApiIF(packApi).pack).toStrictEqual(pack);
  });
  it("read ReactApp form data", () => {
    expect(new PackApiIF(pack).pack).toStrictEqual(pack);
  });
  it("read partial data", () => {
    expect(new PackApiIF(packPartialApi).pack).toStrictEqual(packPartial);
  });
  it("return Api form data", () => {
    expect(new PackApiIF(pack).toApi()).toStrictEqual(packApi);
  });
  it("return partial data", () => {
    expect(new PackApiIF(packPartial).pack).toStrictEqual(packPartial);
  });
  it("return {}, if passed undefined", () => {
    expect(new PackApiIF(undefined).pack).toStrictEqual({});
  });
});

describe("PacksApiIF", () => {
  it("return ReactApp form data", () => {
    const packs = [packApi, packPartial];
    const convertedPacks = [pack, packPartial];
    expect(new PacksApiIF(packs).packs).toStrictEqual(convertedPacks);
  });
  it("returns [], if passed []", () => {
    expect(new PacksApiIF([]).packs).toStrictEqual([]);
  });
});