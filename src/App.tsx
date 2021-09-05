import React, { useState } from "react";
import { LaunchTable } from "./features/launches/launch-table/LaunchTable";
import { LaunchItem } from "./features/launches/launch-item/LaunchItem";
import { useDispatch, useSelector } from "react-redux";
import {
  getLaunchDataAsync,
  selectLaunchList,
} from "./features/launches/launchSlice";
import { ILaunchInfo } from "./features/launches/LaunchApi.interface";

function App() {
  const dispatch = useDispatch();
  const { launchInfo, status } = useSelector(selectLaunchList);
  const [tableVisible, setTableVisible] = useState(true);
  const [itemVisible, setItemVisible] = useState(false);
  const [launchData, setLaunchData] = useState<ILaunchInfo | null>(null);

  React.useEffect(() => {
    dispatch(getLaunchDataAsync());
  }, []);

  return (
    <>
      {tableVisible && status === "done" && (
        <LaunchTable
          onRowClick={(e: { data: ILaunchInfo }) => {
            setTableVisible(false);
            setItemVisible(true);
            setLaunchData(e.data);
          }}
          rowData={launchInfo}
        />
      )}
      {itemVisible && (
        <LaunchItem
          onBackClick={() => {
            setTableVisible(true);
            setItemVisible(false);
          }}
          launchData={launchData}
        ></LaunchItem>
      )}
    </>
  );
}

export default App;
