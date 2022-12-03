export const bathroomsList = [
  {
    id: new Date().toString(),
    sinks: 2,
    commodes: 1,
    bidets: 1,
    bathtubs: 0,
    showers: 1,
    tubshowers: 1,
    isPrimary: true,
  },
  {
    id: new Date().toString(),
    sinks: 1,
    commodes: 1,
    bidets: 0,
    bathtubs: 0,
    showers: 1,
    tubshowers: 0,
    isPrimary: false,
  },
];

export const emptyBathroom = {
  id: new Date().toString(),
  sinks: 0,
  commodes: 0,
  bidets: 0,
  bathtubs: 0,
  showers: 0,
  tubshowers: 0,
  isPrimary: false,
};
