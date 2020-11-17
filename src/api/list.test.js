import list from "./list";
import http from "./http";
jest.mock("./http");

describe("api/list", () => {
  it("should return data if successful", async () => {
    const mockReturn = { status: 200, data: { foo: 1 } };
    http.get.mockResolvedValue(mockReturn);

    const result = await list();

    expect(result).toEqual({ foo: 1 });
  });

  it("should return empty array if call unsuccessful", async () => {
    const mockReturn = { status: 400, data: {} };
    http.get.mockResolvedValue(mockReturn);

    const result = await list();

    expect(result).toEqual([]);
  });

  it("should return empty array if exception occurs", async () => {
    http.get.mockRejectedValue({});

    const result = await list();

    expect(result).toEqual([]);
  });
});
