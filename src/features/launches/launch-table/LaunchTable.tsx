import { AgGridReact } from "ag-grid-react";
import { SLIDE_TIMEOUT } from "../../../app/utils/cssTransitions";
import { ILaunchInfo } from "../LaunchApi.interface";
import Slide from "@material-ui/core/Slide/Slide";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./launch-table.scss";
import Typography from "@material-ui/core/Typography/Typography";
import { AgGridButton } from "./ag-grid-button/AgGridButton";

export interface ILaunchTableProps {
  onRowClick: Function;
  rowData: ILaunchInfo[] | null;
}

const frameworkComponents = {
  viewRocketDetails: AgGridButton,
};

const defaultColDef = {
  flex: 1,
  minWidth: 100,
  minHeight: 50,
};

export const LaunchTable = ({ onRowClick, rowData }: ILaunchTableProps) => {
  const columnDefs = [
    {
      headerName: "Mission Name",
      field: "mission_name",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Launch Year",
      field: "launch_year",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Launch Date",
      field: "launch_date_utc",
      sortable: true,
      filter: true,
    },
    // Example of a custom column
    {
      field: "",
      cellRenderer: "viewRocketDetails",
      cellRendererParams: {
        btnText: "View Rocket Details",
      },
    },
  ];

  return (
    <div className="c-launch-table">
      <header aria-labelledby="header-text" className="header">
        <img
          width="125"
          height="auto"
          alt="Space X Company Logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD////y8vIYGBgzMzMjIyMGBgb7+/sTExPo6OjX19dra2uNjY21tbW8vLwcHByBgYFQUFB0dHRmZmaqqqouLi7IyMjV1dXi4uI6OjqkpKTu7u56enonJyecnJzOzs5AQECHh4eRkZFJSUlUVFQ+Pj5eXl5wcHCyU2VbAAACyElEQVR4nO3Xa3OiMBSAYcNdW0TBW4uXit36///hchIuAa07nRWd6bzPl5JDDuQYEuhoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANzmJm7w7DEMxJ2n2ct27u2SX1hhlC6m8T47LZ89kEF4rysnj7NnD2Mgy3QVqslx9+xxDMQrJkpNZt6zxzGU7VqpcDFweW6rDkWJeyVqzHvpVteoCgWddNdNdHSZWF20U6yU2mzvXlGHvxo7rc27icaObXz4bBNe1clKj2I7PZ+Y0W7DTr4T6hV2zuV43+Sey+lTh8H3lnINdEx1dNqLqqbEL6XGVvpFx7NEj/2o2f4/NnJ88HVjK43J8HtnECqVjoJW0gw8qsKjpPyt4zohbn4FzSlHaacH5im03tXmGpWFrrec6Gxc/nUe8W4IyiG+XIalwrZVKLVqGjK0WdPSFf5AJgnzkzw54f7f3e9A5nCfvdS+qnC3woVd4Ulm4U/dul5hmo8r+bR3yl8XgZ7Jw9sdy7hl010wYaqjUuGkJl3e24xC9r+6cb3CWXvBy7MyjUod71/KN5J1aClvrbe9/gaytjd5OVmvy+8rTINEuP1z+tIb9/x+mTaYqBYsywF/1cN4rRVH8/Au44qM0cz1jQrPV+/1Kcu4/H3Kaxye8X2d2BX2T/p553E2H5E/rNC8Rgr9pKvwIZ/Z7s5vJW+3KkyLelKPcbMUHTmwLrHTLzupcOta4eoS5mUhd8hkQajFAyqc99/Nof9dhbZ1PbxVP18/vbN+1Cxj3Tk0e2iw1vvQAzbU8zi068vNZ5dUeOs/bF/2Q3mP+ivHrsQx+0e/QkcqjA5ymDc17eXG4cAfpdrSs1Sxnefd/nX9su+y7tqqds7E65Fg9CFHSffGbx/3LgcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4y+TVh5HJUyKZAAAAABJRU5ErkJggg=="
        ></img>
        <Typography
          id="header-text"
          className="header__text"
          variant="h3"
          component="h1"
          role="contentinfo"
        >
          Space X Missions
        </Typography>
      </header>
      {rowData && (
        <Slide
          timeout={SLIDE_TIMEOUT}
          direction="left"
          in={true}
          mountOnEnter
          unmountOnExit
        >
          <div
            data-testid="launch-table"
            className="ag-theme-alpine"
            style={{ width: "80%", height: 520 }}
          >
            <AgGridReact
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              pagination={true}
              paginationPageSize={10}
              rowData={rowData}
              onRowClicked={(e) => onRowClick(e)}
              onCellKeyPress={(e) => onRowClick(e)}
              frameworkComponents={frameworkComponents}
              suppressColumnVirtualisation={process.env.NODE_ENV === "test"}
            ></AgGridReact>
          </div>
        </Slide>
      )}
    </div>
  );
};
