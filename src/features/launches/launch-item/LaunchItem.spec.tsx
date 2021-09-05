import { render, screen } from "@testing-library/react";
import { ILaunchInfo } from "../LaunchApi.interface";
import { LaunchItem } from "./LaunchItem";
import { mockLaunchData } from "./mockLaunchData";

describe("Launch Item", () => {
  const mockBackClick = jest.fn();
  it("should show mission name, logo, description, site name, rocket name, launch year, flight number, launch succes when they are present", () => {
    render(
      <LaunchItem onBackClick={mockBackClick} launchData={mockLaunchData} />
    );

    expect(screen.getByTestId("launch-item-mission-name"));
    expect(screen.getByTestId("launch-item-mission-patch"));
    expect(screen.getByTestId("launch-item-mission-launch-description"));
    expect(screen.getByTestId("launch-item-site-name"));
    expect(screen.getByTestId("launch-item-rocket-name"));
    expect(screen.getByTestId("launch-item-launch-year"));
    expect(screen.getByTestId("launch-item-flight-number"));
    expect(screen.getByTestId("launch-item-launch-success"));
  });
  it("should not show mission name field when data is null", () => {
    const modifiedMockLaunchData: ILaunchInfo = {
      ...mockLaunchData,
      mission_name: null,
    };
    render(
      <LaunchItem
        onBackClick={mockBackClick}
        launchData={modifiedMockLaunchData}
      />
    );

    expect(screen.queryByTestId("launch-item-mission-name")).toBeNull();
  });

  it("should not show mission patch field when data is null", () => {
    const modifiedMockLaunchData: ILaunchInfo = {
      ...mockLaunchData,
      links: null,
    };

    render(
      <LaunchItem
        onBackClick={mockBackClick}
        launchData={modifiedMockLaunchData}
      />
    );

    expect(screen.queryByTestId("launch-item-mission-patch")).toBeNull();
  });
  it("should not show description field when data is null", () => {
    const modifiedMockLaunchData: ILaunchInfo = {
      ...mockLaunchData,
      details: null,
    };

    render(
      <LaunchItem
        onBackClick={mockBackClick}
        launchData={modifiedMockLaunchData}
      />
    );

    expect(
      screen.queryByTestId("launch-item-mission-launch-description")
    ).toBeNull();
  });
  it("should not show site name field when data is null", () => {
    const modifiedMockLaunchData: ILaunchInfo = {
      ...mockLaunchData,
      launch_site: null,
    };

    render(
      <LaunchItem
        onBackClick={mockBackClick}
        launchData={modifiedMockLaunchData}
      />
    );

    expect(screen.queryByTestId("launch-item-site-name")).toBeNull();
  });

  it("should not show rocket name field when data is null", () => {
    const modifiedMockLaunchData: ILaunchInfo = {
      ...mockLaunchData,
      rocket: null,
    };

    render(
      <LaunchItem
        onBackClick={mockBackClick}
        launchData={modifiedMockLaunchData}
      />
    );

    expect(screen.queryByTestId("launch-item-rocket-name")).toBeNull();
  });

  it("should not show launch year field when data is null", () => {
    const modifiedMockLaunchData: ILaunchInfo = {
      ...mockLaunchData,
      launch_year: null,
    };

    render(
      <LaunchItem
        onBackClick={mockBackClick}
        launchData={modifiedMockLaunchData}
      />
    );

    expect(screen.queryByTestId("launch-item-launch-year")).toBeNull();
  });
  it("should not show flight number field when data is null", () => {
    const modifiedMockLaunchData: ILaunchInfo = {
      ...mockLaunchData,
      flight_number: null,
    };

    render(
      <LaunchItem
        onBackClick={mockBackClick}
        launchData={modifiedMockLaunchData}
      />
    );

    expect(screen.queryByTestId("launch-item-flight-number")).toBeNull();
  });
  it("should not show launch_success field when data is null", () => {
    const modifiedMockLaunchData: ILaunchInfo = {
      ...mockLaunchData,
      launch_success: null,
    };

    render(
      <LaunchItem
        onBackClick={mockBackClick}
        launchData={modifiedMockLaunchData}
      />
    );

    expect(screen.queryByTestId("launch-item-launch-success")).toBeNull();
  });

  it("should contain Yes in launch_success field when launch_success is true", () => {
    const modifiedMockLaunchData: ILaunchInfo = {
      ...mockLaunchData,
      launch_success: true,
    };

    render(
      <LaunchItem
        onBackClick={mockBackClick}
        launchData={modifiedMockLaunchData}
      />
    );

    expect(
      screen.getByTestId("launch-item-launch-success").textContent
    ).toContain("Yes");
  });

  it("should contain No in launch_success field when launch_success is false", () => {
    const modifiedMockLaunchData: ILaunchInfo = {
      ...mockLaunchData,
      launch_success: false,
    };

    render(
      <LaunchItem
        onBackClick={mockBackClick}
        launchData={modifiedMockLaunchData}
      />
    );

    expect(
      screen.getByTestId("launch-item-launch-success").textContent
    ).toContain("No");
  });
});
