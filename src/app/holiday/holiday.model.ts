import { DeclarationListEmitMode } from "@angular/compiler";

export interface Holiday{
    country: {
        id: string,
        name: string,
    },
    date: {
        datetime: {
            day: number,
            month: number,
            year: number,
        },
       iso: string, 
    },
    description: string,
    locations: string,
    name: string,
    states: string,
    type: string[],
}

