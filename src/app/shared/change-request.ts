export class ChangeRequest {
  created_by : string;
  modified_by : string;
  new_card : string;
  new_access_points : string[];
  message : string;
  request_level : number;
  status : number;
  user : string;
}
