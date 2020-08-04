import { Icon, IconOptions, icon} from 'leaflet';

export const defaultIcon: Icon<IconOptions> = icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'leaflet/marker-icon.png',
    shadowUrl: 'leaflet/shadow-marker.png'
});