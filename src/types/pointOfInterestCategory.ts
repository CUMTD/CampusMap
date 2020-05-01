import { PointOfInterest } from "./pointOfInterest";
import { PointOfInterestType } from "./pointOfInterestType";

export interface PointOfInterestCategory {
	name: PointOfInterestType;
	pointsOfInterest: PointOfInterest[];
}
