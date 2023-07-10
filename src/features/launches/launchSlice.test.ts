import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import * as launchApiModule from "./api/LaunchApi";
import launchReducer from "./launchSlice";
import { RootState } from "../../app/store";
import { getLaunchDataAsync } from "./launchSlice";
const middlewares = [thunk];
export const mockStore = configureMockStore(middlewares);

jest.mock("./api/LaunchApi", () => ({
  getLaunchDataToJSON: jest.fn(),
}));

const { getLaunchDataToJSON } = launchApiModule as jest.Mocked<
  typeof launchApiModule
>;

describe("Launch Slice", () => {
  describe("Launch Slice tests", () => {
    const mockStoreData: RootState = {
      launches: {
        launchInfo: null,
        status: "loading",
      },
    };
    it("should set status to fulfilled when api returns 200", () => {
      const expectedActions = [
        {
          payload: undefined,
          type: getLaunchDataAsync.pending.type,
        },
        {
          payload: [],
          type: getLaunchDataAsync.fulfilled.type,
        },
      ];
      const store = mockStore(mockStoreData);
      getLaunchDataToJSON.mockResolvedValue([]);

      store.dispatch(getLaunchDataAsync()).then(() => {
        expect(
          store.getActions().map((action) => ({
            type: action.type,
            payload: action.payload,
          }))
        ).toEqual(expectedActions);
      });
    });

    it("should set status to failed when api return on error", () => {
      const expectedActions = [
        {
          type: getLaunchDataAsync.pending.type,
        },
        {
          type: getLaunchDataAsync.rejected.type,
        },
      ];
      const store = mockStore(mockStoreData);
      getLaunchDataToJSON.mockRejectedValue([]);

      store.dispatch(getLaunchDataAsync()).then(() => {
        expect(
          store.getActions().map((action) => ({
            type: action.type,
            payload: action.payload,
          }))
        ).toEqual(expectedActions);
      });
    });
  });
  describe("extraReducers tests", () => {
    it("should get set status to loading when getLaunchDataAsync.pending is called", () => {
      const action = { type: getLaunchDataAsync.pending };
      const state = launchReducer(
        {
          launchInfo: null,
          status: "failed",
        },
        action
      );
      expect(state).toEqual({ launchInfo: null, status: "loading" });
    });
    it("should get set status to done amd set the launch info when getLaunchDataAsync.fulfilled is called", () => {
      const action = { type: getLaunchDataAsync.fulfilled, payload: [] };
      const state = launchReducer(
        {
          launchInfo: [],
          status: "failed",
        },
        action
      );
      expect(state).toEqual({ launchInfo: [], status: "done" });
    });

    it("should get set status to done when getLaunchDataAsync.rejected is called", () => {
      const action = { type: getLaunchDataAsync.rejected };
      const state = launchReducer(
        {
          launchInfo: [],
          status: "done",
        },
        action
      );
      expect(state).toEqual({ launchInfo: [], status: "failed" });
    });
  });
});
