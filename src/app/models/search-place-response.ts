import { Point } from 'geojson';
export class SearchPlaceResponse {
    id: string;
    href: string;
    name: string;
    description: string;
    location: Point;
    tripId: string;
    tripHref: string;
    pictureUrl: string;
    createdAt: Date;
    updatedAt: Date;
}
