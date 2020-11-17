import favourite from "./favourite";
import http from "./http";
jest.mock("./http");

describe("api/favourite", () => {
  it("should return id if call successful", async () => {
    const mockReturn = { status: 200, data: { message: "SUCCESS", id: 1234 } };
    http.post.mockResolvedValue(mockReturn);

    const result = await favourite(1);

    expect(result).toBe(1234);
    expect(http.post.mock.calls[0][1]).toMatchObject({ image_id: 1 });
  });

  it("should return null if call unsuccessful", async () => {
    const mockReturn = { status: 400, data: {} };
    http.post.mockResolvedValue(mockReturn);

    const result = await favourite(1);

    expect(result).toBeNull();
  });

  it("should return null if exception thrown", async () => {
    http.post.mockRejectedValue({});

    const result = await favourite(1);

    expect(result).toBeNull();
  });
});
