import { PointOfInterestCategory } from "./types/pointOfInterestCategory";
import { Route } from "./types/route";
import { TransferPoint } from "./types/transferPoint";

export const TransferPoints: TransferPoint[] = [
	{
		number: 1,
		name: 'Illini Union',
		routeIds: [5, 12, 13, 22]
	},
	{
		number: 2,
		name: 'Main Library',
		routeIds: [10, 13, 22]
	},
	{
		number: 3,
		name: 'FAR/PAR',
		routeIds: [12, 13, 22]
	},
	{
		number: 4,
		name: 'Downtown Champaign',
		routeIds: [1, 5, 12]
	},
	{
		number: 5,
		name: 'Ikenberry Commons',
		routeIds: [1, 10]
	},
	{
		number: 6,
		name: 'Research Park',
		routeIds: [1]
	},
	{
		number: 7,
		name: 'Orchard Downs',
		routeIds: [12]
	},
	{
		number: 9,
		name: 'E-14',
		routeIds: [1, 10]
	}
];

export const Routes: Route[] = [
	{
		number: 1,
		name: 'Yellow',
		transferPointIds: [4, 5, 6, 9]
	},
	{
		number: 5,
		name: 'Green',
		transferPointIds: [1, 4, 8]
	},
	{
		number: 10,
		name: 'Gold',
		transferPointIds: [2, 5, 8, 9]
	},
	{
		number: 12,
		name: 'Teal',
		transferPointIds: [1, 3, 4, 7]
	},
	{
		number: 13,
		name: 'Silver',
		transferPointIds: [2, 3, 8]
	},
	{
		number: 22,
		name: 'Illini',
		transferPointIds: [1, 2, 3]
	},
];

export const PointsOfInterest: PointOfInterestCategory[] = [
	{
		name: 'Housing',
		pointsOfInterest: [
			{
				name: 'Allen Hall',
				x: 6050,
				y: 5600,
				routeNumbers: [10, 12, 13, 22]
			},
			{
				name: 'ISR',
				x: 6150,
				y: 4350,
				routeNumbers: [22]
			}
		]
	},
	{
		name: 'Academic Building',
		pointsOfInterest: [
			{
				name: 'Foellinger',
				x: 4950,
				y: 5400,
				routeNumbers: [10, 13, 22]
			},
			{
				name: 'Altgeld',
				x: 4400,
				y: 3900,
				routeNumbers: [1, 5, 12, 13, 22]
			},
			{
				name: 'Armory',
				x: 3500,
				y: 5550,
				routeNumbers: [1, 13, 22]
			}
		]
	}
];
