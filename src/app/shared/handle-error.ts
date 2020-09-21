import { Observable, of } from 'rxjs';
import { MessageService } from './services/message.service';

export class HandleError {
    constructor (private massageService: MessageService) {}

    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            const message: string = `${operation} failed: ${error.message}`;
            this.log(message);

            alert(message);

            return of(result as T);
        }
    }

    private log(message: string) {
        this.massageService.add(message);
    }
}
