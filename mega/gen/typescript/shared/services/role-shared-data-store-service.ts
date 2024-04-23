@Injectable( {
    providedIn: 'root',
})

export class RoleSharedDataStoreService {
    item: Observable<Role> = new Observable<Role>;
    lastUpdate: Date = new Date(0);
    expireMinutes: Number = 5;
    
    constructor(roleDataStoreService: RoleDataStoreService): void {
    }
}

