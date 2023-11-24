import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "user",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "user",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "user",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "admin",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    MeterNumber: "****7819",
    Source: "Banking App",
    cost: "R 2000.00",
    NumberOfUnits: "602",
    date: "02/11/2023",
  },
];

export const mockTransactions = [
  {
    txId: "Friday",
    user: "Mampudi",
    date: "2023-11-17",
    cost: "303.73",
  },
  {
    txId: "Saturday",
    user: "Mampudi",
    date: "2023-11-18",
    cost: "287.60",
  },
  {
    txId: "Sunday",
    user: "Mampudi",
    date: "2023-11-19",
    cost: "254.55",
  },
  {
    txId: "Monday",
    user: "Mampudi",
    date: "2023-11-20",
    cost: "243.96",
  },
  {
    txId: "Tuesday",
    user: "Mampdui",
    date: "2023-11-21",
    cost: "227.64",
  },
  {
    txId: "Wednesday",
    user: "Mampdui",
    date: "2023-11-22",
    cost: "210.76",
  },
  {
    txId: "Thursday",
    user: "Mampdui",
    date: "2023-11-23",
    cost: "191.64",
  },
  {
    txId: "Friday",
    user: "Mampdui",
    date: "2023-11-24",
    cost: "181.27",
  },
];

export const mockBarData = [
  {
    Day: "Fri, 11-17",
    "Morning": 303.73,
    "hot dogColor": "hsl(229, 70%, 50%)",
    Total: 289.4,
    burgerColor: "hsl(296, 70%, 50%)",
    Usage: 14.69,
    kebabColor: "hsl(97, 70%, 50%)",
  },
  {
    Day: "Sat, 11-18",
    "Morning": 287.60,
    "hot dogColor": "hsl(307, 70%, 50%)",
    Total: 269.35,
    burgerColor: "hsl(111, 70%, 50%)",
    Usage: 18.25,
    kebabColor: "hsl(273, 70%, 50%)",
  },
  {
    Day: "Sun, 11-19",
    "Morning": 252.80,
    "hot dogColor": "hsl(72, 70%, 50%)",
    Total: 254.55,
    burgerColor: "hsl(96, 70%, 50%)",
    Usage: 14.40,
    kebabColor: "hsl(106, 70%, 50%)",
  },
  {
    Day: "Mon, 11-20-23",
    "Morning": 252.80,
    "hot dogColor": "hsl(257, 70%, 50%)",
    Total: 254.07,
    burgerColor: "hsl(326, 70%, 50%)",
    Usage: 8.84,
    kebabColor: "hsl(110, 70%, 50%)",
  },
  {
    Day: "Tue, 11-21-23",
    "Morning": 241.23,
    "hot dogColor": "hsl(257, 70%, 50%)",
    Total: 227.64,
    burgerColor: "hsl(326, 70%, 50%)",
    Usage: 13.59,
    kebabColor: "hsl(110, 70%, 50%)",
  },
  {
    Day: "Wed, 11-22-23",
    "Morning": 227.64,
    "hot dogColor": "hsl(257, 70%, 50%)",
    Total: 210.76,
    burgerColor: "hsl(326, 70%, 50%)",
    Usage: 16.88,
    kebabColor: "hsl(110, 70%, 50%)",
  },
  {
    Day: "Thu, 11-23-23",
    "Morning": 203.13,
    "hot dogColor": "hsl(257, 70%, 50%)",
    Total: 191.64,
    burgerColor: "hsl(326, 70%, 50%)",
    Usage: 11.49,
    kebabColor: "hsl(110, 70%, 50%)",
  },
  {
    Day: "Fri, 11-24-23",
    "Morning": 191.64,
    "hot dogColor": "hsl(257, 70%, 50%)",
    Total: 181.27,
    burgerColor: "hsl(326, 70%, 50%)",
    Usage: 10.37,
    kebabColor: "hsl(110, 70%, 50%)",
  },
  {
    Day: "Sat, 11-25-23",
    "Morning": 181.27,
    "hot dogColor": "hsl(257, 70%, 50%)",
    Total: 166,
    burgerColor: "hsl(326, 70%, 50%)",
    Usage: 15,
    kebabColor: "hsl(110, 70%, 50%)",
  },
  {
    Day: "Sun, 11-26-23",
    "Morning": 166,
    "hot dogColor": "hsl(257, 70%, 50%)",
    Total: 151,
    burgerColor: "hsl(326, 70%, 50%)",
    Usage: 15,
    kebabColor: "hsl(110, 70%, 50%)",
  },
  {
    Day: "Mon, 11-27-23",
    "Morning": 151,
    "hot dogColor": "hsl(257, 70%, 50%)",
    Total: 136,
    burgerColor: "hsl(326, 70%, 50%)",
    Usage: 15,
    kebabColor: "hsl(110, 70%, 50%)",
  },
  {
    Day: "Tue, 11-28-23",
    "Morning": 121,
    "hot dogColor": "hsl(257, 70%, 50%)",
    Total: 106,
    burgerColor: "hsl(326, 70%, 50%)",
    Usage: 15,
    kebabColor: "hsl(110, 70%, 50%)",
  },
  {
    Day: "Wed, 11-29-23",
    "Morning": 91,
    "hot dogColor": "hsl(257, 70%, 50%)",
    Total: 76,
    burgerColor: "hsl(326, 70%, 50%)",
    Usage: 15,
    kebabColor: "hsl(110, 70%, 50%)",
  },
  {
    Day: "Thurs, 11-30-23",
    "Morning": 76,
    "hot dogColor": "hsl(257, 70%, 50%)",
    Total: 61,
    burgerColor: "hsl(326, 70%, 50%)",
    Usage: 15,
    kebabColor: "hsl(110, 70%, 50%)",
  },
  {
    Day: "Fri, 12-01-23",
    "Morning": 61,
    "hot dogColor": "hsl(257, 70%, 50%)",
    Total: 46,
    burgerColor: "hsl(326, 70%, 50%)",
    Usage: 15,
    kebabColor: "hsl(110, 70%, 50%)",
  },
  {
    Day: "Sat, 12-02-23",
    "Morning": 46,
    "hot dogColor": "hsl(257, 70%, 50%)",
    Total: 31,
    burgerColor: "hsl(326, 70%, 50%)",
    Usage: 15,
    kebabColor: "hsl(110, 70%, 50%)",
  },
  {
    Day: "Sun, 12-03-23",
    "Morning": 31,
    "hot dogColor": "hsl(257, 70%, 50%)",
    Total: 16,
    burgerColor: "hsl(326, 70%, 50%)",
    Usage: 15,
    kebabColor: "hsl(110, 70%, 50%)",
  },
  {
    Day: "Mon, 12-04-23",
    "Morning": 16,
    "hot dogColor": "hsl(257, 70%, 50%)",
    Total: 1,
    burgerColor: "hsl(326, 70%, 50%)",
    Usage: 15,
    kebabColor: "hsl(110, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "Unit",
    label: "Units",
    value: 303.73,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "Used",
    label: "Used",
    value: 122.46,
    color: "hsl(162, 70%, 50%)",
  },
];

async function fetchElectricityUsageTrendAnalysis() {
  const subscriptionKey = '092e8bf645a147bfa3ce052fc51b6c5e'; // Replace with your actual subscription key

  try {
    const response = await fetch('https://dytelligence.azure-api.net/v1/ElectricityUsageTrendAnalysis', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData = await response.json();
    const formattedData = rawData.map(item => ({
      x: item.Date, // Assuming the API returns a Date field
      y: item.Difference // Assuming the API returns a Difference field
    }));

    console.log(formattedData);
    return formattedData; // Return the fetched and formatted data
  } catch (error) {
    console.error('There was a problem fetching the trend analysis data:', error);
    throw error; // Rethrow the error to propagate it up
  }
}



export async function mockLineData() {
  const fetchedData = await fetchElectricityUsageTrendAnalysis();
  return [
      {
          id: "Daily Usage",
          color: tokens("dark").redAccent[300],
          data: fetchedData
      },
  ];
}

export const mockGeographyData = [
  {
    id: "ARE",
    value: 900000,
  },
  {
    id: "BWA",
    value: 836949,
  },
  {
    id: "DEU",
    value: 836949,
  },
  {
    id: "JPN",
    value: 900000,
  },
  {
    id: "NAM",
    value: 836949,
  },

  {
    id: "ZAF",
    value: 9000000,
  },

];
