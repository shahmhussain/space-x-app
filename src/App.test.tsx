import * as React from "react";
import * as reactReduxModule from "react-redux";
import App from "./App";
import { RootState } from "./app/store";
import { mockLaunchData } from "../src/features/launches/launch-item/mockLaunchData";
import { fireEvent, render, screen, act } from "@testing-library/react";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const { useSelector, useDispatch } = reactReduxModule as jest.Mocked<
  typeof reactReduxModule
>;

describe("app tests", () => {
  const mockDispatch = jest.fn();

  const mockStoreData: RootState = {
    launches: {
      launchInfo: [mockLaunchData],
      status: "done",
    },
  };

  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(mockStoreData);
    });
    useDispatch.mockReturnValue(mockDispatch);
  });

  it("should show the launch table on first time render", () => {
    render(<App />);

    expect(screen.getByTestId("launch-table"));
  });

  it("should show the Launch item component when user clicks a row item ", async () => {
    render(<App />);

    await act(async () => {
      fireEvent.click(screen.getByText(/GPS III/i));
    });

    await act(async () => {
      expect(screen.getByTestId("launch-item"));
    });
  });

  it("should show the Launch item component when user is on the GPSIII cell and then presses enter ", async () => {
    render(<App />);

    await act(async () => {
      const cell: HTMLElement = screen.getByText(/GPS III/i);
      cell.focus();
      expect(cell).toHaveFocus();

      fireEvent.keyPress(cell, { key: "Enter", code: 13 });
    });

    await act(async () => {
      expect(screen.getByTestId("launch-item"));
    });
  });

  it("should show the Launch Table component when user clicks the back button Launch Item Component ", async () => {
    render(<App />);
    // go to the launch item component
    await act(async () => {
      fireEvent.click(screen.getByText(/GPS III/i));
    });

    await act(async () => {
      expect(screen.getByTestId("launch-item"));
    });

    // from launch table component go back to the launch item component
    await act(async () => {
      fireEvent.click(screen.getByTestId("launch-item-go-back-btn"));
    });

    await act(async () => {
      expect(screen.getByTestId("launch-table"));
    });
  });
});
