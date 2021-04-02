export interface VatsimController {
  cid: number;
  name: string;
  callsign: string;
  frequency: string;
  facility: number;
  rating: number;
  server: string;
  visual_range: number;
  text_atis: null;
  last_updated: string;
  logon_time: string;
}

export type VatsimAtis = Omit<VatsimController, "name" | "visual_range" | "text_atis"> & {
  name: null;
  visual_range: null;
  atis_code: "F";
  text_atis: string[];
}

export interface VatsimFlightplan {
  flight_rules: string;
  aircraft: string;
  aircraft_faa: string;
  aircraft_short: string;
  departure: string;
  arrival: string;
  alternate: string;
  cruise_tas: string;
  altitude: string;
  deptime: string;
  enroute_time: string;
  fuel_time: string;
  remarks: string;
  route: string;
}

export interface VatsimServer {
  ident: string;
  hostname_or_ip: string;
  location: string;
  name: string;
  clients_connection_allowed: number;
}

export interface VatsimPilot {
  cid: number;
  name: string;
  callsign: string;
  server: string;
  pilot_rating: number;
  latitude: number;
  longitude: number;
  altitude: number;
  groundspeed: number;
  transponder: string;
  heading: number;
  qnh_i_hg: number;
  qnh_mb: number;
  flight_plan: VatsimFlightplan;
  logon_time: string;
  last_updated: string;
}

export interface VatsimPrefile {
  cid: number;
  name: string;
  callsign: string;
  flight_plan: VatsimFlightplan;
  last_updated: string;
}

export interface VatsimLevel {
  id: number;
  short: string;
  long: string;
}

export interface VatsimGeneral {
  version: number;
  reload: number;
  update: string;
  update_timestamp: string;
  connected_clients: number;
  unique_users: number;
}

export default interface ApiResponse {
  general: VatsimGeneral;
  pilots: VatsimPilot[];
  controllers: VatsimController[];
  atis: VatsimController[];
  servers: VatsimServer[];
  prefiles: VatsimPrefile[];
  facilities: VatsimLevel[];
  ratings: VatsimLevel[];
  pilot_ratings: VatsimLevel[];
}