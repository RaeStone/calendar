//temporary structure - will change w/ api result

import { DeclarationListEmitMode } from "@angular/compiler";

//TODO: MAKE MODEL MATCH API RESPONSE
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

/*
nesting objects

    name: string;
    items: {
        [key: string]: Item
    };

*/