import { PointOfInterestCategory } from "./types/pointOfInterestCategory";
import { Route } from "./types/route";

export const Routes: Route[] = [
	{
		number: 1,
		name: 'Yellow'
	},
	{
		number: 2,
		name: 'Red'
	},
	{
		number: 5,
		name: 'Green'
	},
	{
		number: 10,
		name: 'Gold'
	},
	{
		number: 12,
		name: 'Teal'
	},
	{
		number: 13,
		name: 'Silver'
	},
	{
		number: 21,
		name: 'Raven'
	},
	{
		number: 22,
		name: 'Illini'
	},
];

export const PointsOfInterest: PointOfInterestCategory[] = [
	{
		name: 'Housing',
		icon: 'house',
		pointsOfInterest: [
			{
				name: 'Allen Hall',
				x: 440,
				y: 311,
				routeNumbers: [2, 10, 12, 13, 21, 22]
			},
			{
				name: 'Busey Evans Hall',
				x: 380,
				y: 275,
				routeNumbers: [2, 10, 12, 21, 22]
			},
			{
				name: 'Florida Avenue Residence Hall (FAR)',
				x: 442,
				y: 440,
				routeNumbers: [12, 13, 21, 22]
			},
			{
				name: 'Ikenberry Commons',
				x: 168,
				y: 350,
				routeNumbers: [1, 10, 22]
			},
			{
				name: 'Illinois Street Residence Hall (ISR)',
				x: 430,
				y: 190,
				routeNumbers: [5, 22]
			},
			{
				name: 'Lincoln Avenue Residence Hall (LAR)',
				x: 455,
				y: 311,
				routeNumbers: [2, 10, 12, 13, 21, 22]
			},
			{
				name: 'Orchard Downs',
				x: 564.5,
				y: 483,
				routeNumbers: [12]
			},
			{
				name: 'Pennsylvania Avenue Residence Hall (PAR)',
				x: 448,
				y: 415,
				routeNumbers: [2, 10, 12, 13, 21, 22]
			}

		]
	},
	{
		name: 'Academic Building',
		icon: 'school',
		pointsOfInterest: [
			{
				name: 'Activities and Recreation Center (ARC)',
				x: 165,
				y: 385,
				routeNumbers: [22]
			},
			{
				name: 'Foellinger',
				x: 340,
				y: 297,
				routeNumbers: [10, 13, 22]
			},
			{
				name: 'Altgeld',
				x: 318,
				y: 190,
				routeNumbers: [1, 2, 5, 12, 13, 21, 22]
			},
			{
				name: 'Armory',
				x: 253,
				y: 301,
				routeNumbers: [1, 13, 21, 22]
			},
			{
				name: 'Bevier Hall',
				x: 378,
				y: 300,
				routeNumbers: [10, 12, 13, 21, 22]
			},
			{
				name: 'Business Instructional Facility (BIF)',
				x: 262,
				y: 333,
				routeNumbers: [1, 10, 13, 21, 22]
			},
			{
				name: 'Campus Recreation Center East (CRCE)',
				x: 434,
				y: 298,
				routeNumbers: [10, 12, 13, 21, 22]
			},
			{
				name: 'Ceramics Building',
				x: 378,
				y: 131,
				routeNumbers: [10, 13, 22]
			},
			{
				name: 'Chemical and Life Sciences',
				x: 378,
				y: 222,
				routeNumbers: [2, 10, 12, 21, 22]
			},
			{
				name: 'David Kinley Hall (DKH)',
				x: 320,
				y: 332,
				routeNumbers: [10, 13, 22]
			}
		]
	}
];
