import type { RouteObject } from "react-router";



export type NavItem = {
  label: string;
  path: string;
}

export type RouteWithHandle = RouteObject & {
  handle?: {
    label?: string;
    showInNav?: boolean;
  };
  children?: RouteWithHandle[];
};



export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}