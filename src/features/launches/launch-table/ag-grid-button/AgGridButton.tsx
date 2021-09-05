import { Button } from "@material-ui/core";

export interface IAgGridButtonProps {
  btnText: string;
}

export const AgGridButton = ({ btnText }: IAgGridButtonProps) => {
  return (
    <Button data-testid="ag-grid-button" role="button">
      {btnText}
    </Button>
  );
};
