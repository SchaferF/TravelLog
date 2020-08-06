import { Point } from 'geojson';

export class AddPlaceRequest {
    name: string;
    description: string;
    location: Point;
    tripHref: string;
    tripId: string;
    pictureUrl: string;
}
