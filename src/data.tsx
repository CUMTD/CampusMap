import { Route } from "./types/route";
import { TransferPoint } from "./types/transferPoint";

export const TransferPoints: TransferPoint[] = [
	{
		id: '_1---IU',
		number: 1,
		name: 'Illini Union',
		routeIds: [5, 12, 13, 22]
	},
	{
		id: '_2---Library',
		number: 2,
		name: 'Main Library',
		routeIds: [10, 13, 22]
	},
	{
		id: '_3---FAR-PAR',
		number: 3,
		name: 'FAR/PAR',
		routeIds: [12, 13, 22]
	},
	{
		id: '_4---IT',
		number: 4,
		name: 'Downtown Champaign',
		routeIds: [1, 5, 12]
	},
	{
		id: '_5---Ike',
		number: 5,
		name: 'Ikenberry Commons',
		routeIds: [1, 10]
	},
	{
		id: '_6---Research-Park',
		number: 6,
		name: 'Research Park',
		routeIds: [1]
	},
	{
		id: '_7---OD',
		number: 7,
		name: 'Orchard Downs',
		routeIds: [12]
	},
	{
		id: '_9---E-14',
		number: 9,
		name: 'E-14',
		routeIds: [1, 10]
	}
];

export const Routes: Route[] = [
	{
		number: 1,
		id: '_1',
		name: 'Yellow',
		transferPointIds: [4, 5, 6, 9]
	},
	{
		number: 5,
		id: '_5',
		name: 'Green',
		transferPointIds: [1, 4, 8]
	},
	{
		number: 10,
		id: '_10',
		name: 'Gold',
		transferPointIds: [2, 5, 8, 9]
	},
	{
		number: 12,
		id: '_12',
		name: 'Teal',
		transferPointIds: [1, 3, 4, 7]
	},
	{
		number: 13,
		id: '_13',
		name: 'Silver',
		transferPointIds: [2, 3, 8]
	},
	{
		number: 22,
		id: '_22',
		name: 'Illini',
		transferPointIds: [1, 2, 3]
	},
];
