import unfavourite from "./unfavourite";
import http from "./http";
jest.mock("./http");

describe("api/unfavourite", () => {
  it("should return true if call successful", async () => {
    const mockReturn = { status: 200, data: { message: "SUCCESS", id: 1234 } };
    http.delete.mockResolvedValue(mockReturn);

    const result = await unfavourite(1);

    expect(result).toBe(true);
    expect(http.delete).toBeCalledWith("favourites/1");
  });

  it("should return false if call unsuccessful", async () => {
    const mockReturn = { status: 400, data: {} };
    http.delete.mockResolvedValue(mockReturn);

    const result = await unfavourite(1);

    expect(result).toBe(false);
  });

  it("should return false if exception thrown", async () => {
    http.delete.mockRejectedValue({});
    const result = await unfavourite(1);

    expect(result).toBe(false);
  });
});
