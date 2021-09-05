import { render, screen } from "@testing-library/react";
import { mockLaunchData } from "../launch-item/mockLaunchData";
import { LaunchTable } from "./LaunchTable";

describe("Launch Table", () => {
  const mockRowClick = jest.fn();
  it("should render the table with launch data when launch data is passed", () => {
    render(
      <LaunchTable
        onRowClick={mockRowClick}
        rowData={[mockLaunchData]}
      ></LaunchTable>
    );

    expect(screen.getByTestId("launch-table"));
  });

  it("should NOT render the table with launch data when launch data is NOT passed", () => {
    render(
      <LaunchTable onRowClick={mockRowClick} rowData={null}></LaunchTable>
    );

    expect(screen.queryByTestId("launch-table")).toBeNull();
  });
});
