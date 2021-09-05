import { Card, CardContent, Grid, Slide, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { SLIDE_TIMEOUT } from "../../../app/utils/cssTransitions";
import { ILaunchInfo } from "../LaunchApi.interface";
import "./launch-item.scss";

export interface ILaunchTableProps {
  onBackClick: Function;
  launchData: ILaunchInfo | null;
}

export const LaunchItem = ({ onBackClick, launchData }: ILaunchTableProps) => {
  return (
    <Grid className="c-launch-item" container data-testid="launch-item">
      <Slide timeout={SLIDE_TIMEOUT} direction="right" in={true} mountOnEnter>
        <Card className="c-launch-item__card" variant="outlined">
          <CardContent>
            <section className="c-launch-item__card__info">
              {launchData?.mission_name && (
                <h1
                  data-testid="launch-item-mission-name"
                  aria-label={launchData.mission_name}
                >
                  Mission Name: {launchData.mission_name}
                </h1>
              )}
              {launchData?.links?.mission_patch && (
                <img
                  className="c-launch-item__mission-image"
                  data-testid="launch-item-mission-patch"
                  width="200"
                  height="auto"
                  src={launchData?.links.mission_patch}
                  alt={launchData?.mission_name + " image"}
                />
              )}

              {launchData?.details && (
                <p
                  data-testid="launch-item-mission-launch-description"
                  className="c-launch-item__card__launch_description"
                >
                  {launchData.details}
                </p>
              )}

              {launchData?.launch_site?.site_name && (
                <Typography
                  data-testid="launch-item-site-name"
                  color="textSecondary"
                  gutterBottom
                  component="p"
                >
                  Site name: {launchData.launch_site.site_name}
                </Typography>
              )}
              {launchData?.rocket?.rocket_name &&
                launchData?.rocket?.rocket_type && (
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="p"
                    data-testid="launch-item-rocket-name"
                  >
                    Rocket name:&nbsp;
                    {launchData?.rocket.rocket_name}
                    {launchData?.rocket.rocket_type}
                  </Typography>
                )}

              {launchData?.launch_year && (
                <Typography
                  data-testid="launch-item-launch-year"
                  gutterBottom
                  color="textSecondary"
                  component="p"
                >
                  Launch Year: {launchData.launch_year}
                </Typography>
              )}
              {launchData?.launch_success !== null && (
                <Typography
                  data-testid="launch-item-launch-success"
                  gutterBottom
                  variant="body2"
                  component="p"
                >
                  Launch Successful: {launchData?.launch_success ? "Yes" : "No"}
                </Typography>
              )}
              {launchData?.flight_number && (
                <Typography
                  data-testid="launch-item-flight-number"
                  gutterBottom
                  variant="body2"
                  component="p"
                >
                  Flight Number: {launchData.flight_number}
                </Typography>
              )}
            </section>
            <footer className="c-launch-item__card__footer">
              <Button
                data-testid="launch-item-go-back-btn"
                variant="contained"
                color="primary"
                aria-label="Back To Launch Table"
                onClick={() => onBackClick()}
              >
                Go Back
              </Button>
            </footer>
          </CardContent>
        </Card>
      </Slide>
    </Grid>
  );
};
