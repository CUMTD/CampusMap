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
				x: 435,
				y: 281,
				routeNumbers: [2, 10, 12, 13, 21, 22]
			},
			{
				name: 'Busey Evans Hall',
				x: 390,
				y: 245,
				routeNumbers: [2, 10, 12, 21, 22]
			},
			{
				name: 'Florida Avenue Residence Hall (FAR)',
				x: 428,
				y: 405,
				routeNumbers: [12, 13, 21, 22]
			},
			{
				name: 'Ikenberry Commons',
				x: 145,
				y: 313,
				routeNumbers: [1, 10, 22]
			},
			{
				name: 'Illinois Street Residence Hall (ISR)',
				x: 420,
				y: 157,
				routeNumbers: [5, 22]
			},
			{
				name: 'Lincoln Avenue Residence Hall (LAR)',
				x: 448,
				y: 281,
				routeNumbers: [2, 10, 12, 13, 21, 22]
			},
			{
				name: 'Orchard Downs',
				x: 545,
				y: 452.5,
				routeNumbers: [12]
			},
			{
				name: 'Pennsylvania Avenue Residence Hall (PAR)',
				x: 436,
				y: 386,
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
				y: 382,
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
