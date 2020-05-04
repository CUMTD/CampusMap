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
				y: 311,
				routeNumbers: [2, 10, 12, 13, 21, 22]
			},
			{
				name: 'Busey Evans Hall',
				x: 410,
				y: 280,
				routeNumbers: [2, 10, 12, 21, 22]
			},
			{
				name: 'Florida Avenue Residence Hall (FAR)',
				x: 435,
				y: 440,
				routeNumbers: [12, 13, 21, 22]
			},
			{
				name: 'Ikenberry Commons',
				x: 165,
				y: 350,
				routeNumbers: [1, 10, 22]
			},
			{
				name: 'Illinois Street Residence Hall (ISR)',
				x: 435,
				y: 190,
				routeNumbers: [5, 22]
			},
			{
				name: 'Lincoln Avenue Residence Hall (LAR)',
				x: 448,
				y: 311,
				routeNumbers: [2, 10, 12, 13, 21, 22]
			},
			{
				name: 'Orchard Downs',
				x: 564,
				y: 482.5,
				routeNumbers: [12]
			},
			{
				name: 'Pennsylvania Avenue Residence Hall (PAR)',
				x: 450,
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
			},
			{
				name: 'Digital Computer Lab',
				x: 335,
				y: 70,
				routeNumbers: []
			},
			{
				name: 'Electrical and Computer Engineering (ECE)',
				x: 305,
				y: 25,
				routeNumbers: []
			},
			{
				name: 'Education Building',
				x: 275,
				y: 335,
				routeNumbers: [21]
			},
			{
				name: 'English Building',
				x: 310,
				y: 230,
				routeNumbers: [1, 43, 21, 22]
			},
			{
				name: 'Everitt Laboratory',
				x: 310,
				y: 150,
				routeNumbers: [1, 2, 12, 13, 21, 22]
			},
			{
				name: 'Foellinger Auditorium',
				x: 335,
				y: 285,
				routeNumbers: []
			},
			{
				name: 'Grainger Engineering Library',
				x: 335,
				y: 85,
				routeNumbers: []
			},
			{
				name: 'Gregory Hall',
				x: 310,
				y: 275,
				routeNumbers: [1, 13, 21, 22]
			},
			{
				name: 'Henry Administration Building',
				x: 310,
				y: 205,
				routeNumbers: [1, 2, 5, 12, 13, 21, 22]
			},
			{
				name: 'Krannert Center for the Performing Arts',
				x: 410,
				y: 210,
				routeNumbers: [2, 10, 13, 21, 22]
			},
			{
				name: 'Law Building',
				x: 225,
				y: 400,
				routeNumbers: [21]
			},
			{
				name: 'Lincoln Hall',
				x: 310,
				y: 255,
				routeNumbers: [1, 13, 21, 22]
			},
			{
				name: 'Loomis Laboratory',
				x: 415,
				y: 155,
				routeNumbers: [2, 10, 12, 13, 21, 22]
			},
			{
				name: 'McKinley Health Center',
				x: 465,
				y: 340,
				routeNumbers: [2, 22]
			},
			{
				name: 'Memorial Stadium',
				x: 150,
				y: 470,
				routeNumbers: [1, 10]
			},
			{
				name: 'Mumford Hall',
				x: 360,
				y: 335,
				routeNumbers: [10, 13, 22]
			},
			{
				name: 'Noyes Laboratory',
				x: 375,
				y: 200,
				routeNumbers: [2, 5, 10, 12, 13, 21, 22]
			},
			{
				name: 'Siebel Center for Computer Science',
				x: 370,
				y: 70,
				routeNumbers: [22]
			},
			{
				name: 'State Farm Center',
				x: 150,
				y: 505,
				routeNumbers: [1, 10]
			},
			{
				name: 'Main Library',
				x: 290,
				y: 295,
				routeNumbers: [1, 10, 13, 21, 22]
			},
			{
				name: 'College of Veterinary Medicine (Vet-Med)',
				x: 455.3,
				y: 580.3,
				routeNumbers: [21]
			}
		]
	}
];
