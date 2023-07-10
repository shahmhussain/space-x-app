import { mockLaunchData } from "../launch-item/mockLaunchData";
import { getLaunchDataToJSON } from "./LaunchApi";

describe("Launch API", () => {
  describe("getLaunchDataToJSON", () => {
    let response;
    it("should contain a response with flight number 106", async () => {
      // @ts-ignore
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve([mockLaunchData]),
        })
      );
      
      response = (await getLaunchDataToJSON());
      
      expect(response).toEqual([mockLaunchData])
      
    });

    // it('should handle promise error correctly', async() => {
    //   // @ts-ignore
    //   global.fetch = jest.fn(() =>
    //     Promise.reject('error on console')
    //   );

    //   response = (await getLaunchDataToJSON());
      
    //   expect(response).rejects.toEqual("hello")  
    // })
  });
});
