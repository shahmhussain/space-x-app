import { ILaunchInfo } from "../LaunchApi.interface";

export const mockLaunchData: ILaunchInfo = {
  flight_number: 106,
  mission_name: "GPS III SV04 (Sacagawea)",
  mission_id: [],
  launch_year: "2020",
  launch_date_unix: 1604618640,
  launch_date_utc: "2020-11-05T23:24:00.000Z",
  launch_date_local: "2020-11-05T18:24:00-05:00",
  is_tentative: false,
  tentative_max_precision: "hour",
  tbd: false,
  rocket: {
    rocket_id: "falcon9",
    rocket_name: "Falcon 9",
    rocket_type: "FT",
    first_stage: {
      cores: [
        {
          core_serial: "B1062",
          flight: 1,
          block: 5,
          gridfins: true,
          legs: true,
          reused: false,
          land_success: true,
          landing_intent: true,
          landing_type: "ASDS",
          landing_vehicle: "OCISLY",
        },
      ],
    },
  },
  ships: ["OCISLY", "GOQUEST", "HAWK"],
  telemetry: {},
  launch_site: {
    site_id: "ccafs_slc_40",
    site_name: "CCAFS SLC 40",
    site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40",
  },
  launch_success: true,
  links: {
    mission_patch: "https://i.imgur.com/Ehe9AgY.png",
    mission_patch_small: "https://i.imgur.com/Ehe9AgY.png",
    reddit_campaign:
      "https://www.reddit.com/r/spacex/comments/io0swm/gps_iii_sv04_launch_campaign_thread/",
    reddit_launch:
      "https://www.reddit.com/r/spacex/comments/jobxn2/rspacex_gps_iii_sv04_sacagawea_official_launch/",
    reddit_recovery: "",
    reddit_media: "",
    presskit: "",
    article_link:
      "https://spaceflightnow.com/2020/11/06/spacex-launches-gps-navigation-satellite-from-cape-canaveral/",
    wikipedia: "https://en.wikipedia.org/wiki/GPS_Block_III",
    video_link: "https://youtu.be/wufXF5YKR1M",
    youtube_id: "wufXF5YKR1M",
    flickr_images: [],
  },
  details:
    "SpaceX will launch GPS Block III Space Vehicle 04 from SLC-40, Cape Canaveral AFS aboard a Falcon 9. GPS III is owned and operated by the US Air Force and produced by Lockheed Martin. This will be the fourth GPS III satellite launched and the third launched by SpaceX. The satellite will be delivered into a MEO transfer orbit. The booster for this mission will land on an ASDS.",
  upcoming: false,
  last_date_update: "2020-11-02T12:13:58.000Z",
  last_wiki_launch_date: "2020-11-05T23:24:00.000Z",
  last_wiki_revision: "e21536bf-1d04-11eb-8908-0e0620cee639",
  last_wiki_update: "2020-11-02T12:13:58.000Z",
  launch_date_source: "wiki",
};
