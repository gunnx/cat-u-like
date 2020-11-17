import votes from "./votes";
import http from "./http";
jest.mock("./http");

describe("api/votes", () => {
  it("should return id if call successful", async () => {
    const mockReturn = { status: 200, data: [{ foo: 1 }] };
    http.get.mockResolvedValue(mockReturn);

    const result = await votes();

    expect(result).toEqual([{ foo: 1 }]);
  });

  it("should return null if call unsuccessful", async () => {
    const mockReturn = { status: 400, data: {} };
    http.get.mockResolvedValue(mockReturn);

    const result = await votes();

    expect(result).toEqual([]);
  });

  it("should return null if exception thrown", async () => {
    http.get.mockRejectedValue({});

    const result = await votes();

    expect(result).toEqual([]);
  });
});
