import { mockLaunchData } from "../launch-item/mockLaunchData";
import { getLaunchDataToJSON } from "./LaunchApi";

describe("Launch API", () => {
  describe("getLaunchDataToJSON", () => {
    let response;
    it("should contain a response with flight number 106", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve([mockLaunchData]),
        })
      );

      response = await getLaunchDataToJSON();

      expect(response).toEqual([mockLaunchData]);
    });

    it("should handle promise error correctly", async () => {
      global.fetch = jest.fn(() => Promise.reject("error on console"));
      try {
        response = await getLaunchDataToJSON();
      } catch (error) {
        expect(error).toEqual("error on console");
      }
    });
  });
});
