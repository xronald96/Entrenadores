import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AssassignmentService {
  url = "http://localhost:8000/";

  constructor(private http: HttpClient) {}
  assignmentClientsToTrainers(data) {
    return this.http.post(this.url + "assignment", data);
  }
}
