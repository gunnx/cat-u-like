import vote from "./vote";
import http from "./http";
jest.mock("./http");

describe("api/vote", () => {
  it("should return id if call successful", async () => {
    const mockReturn = { status: 200, data: { message: "SUCCESS", id: 1234 } };
    http.post.mockResolvedValue(mockReturn);

    const result = await vote(1, 0);

    expect(result).toBe(1234);
    expect(http.post.mock.calls[0][1]).toMatchObject({ image_id: 1, value: 0 });
  });

  it("should return null if call unsuccessful", async () => {
    const mockReturn = { status: 400, data: {} };
    http.post.mockResolvedValue(mockReturn);

    const result = await vote(1, 0);

    expect(result).toBe(null);
  });

  it("should return null if exception thrown", async () => {
    http.post.mockRejectedValue({});

    const result = await vote(1, 0);

    expect(result).toBe(null);
  });

  it("calls delete if a voteId is passed in", async () => {
    await vote(1, 0, 2);

    expect(http.delete).toHaveBeenCalled();
    expect(http.delete).toHaveBeenCalledWith("votes/2");
  });
});
