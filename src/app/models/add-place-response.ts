import { Point } from 'geojson';

export class AddPlaceResponse {
    id: string;
    href: string;
    name: string;
    description: string;
    location: Point;
    tripId: string;
    tripHref: string;
    pictureUrl: string;
    createdAt: string;
    updatedAt: string;
}
