import { Student } from "./student";
import { Internship } from "./internship";

const myLatlng = { lat: 0, lng: 0 };
export class Map {
    private _googleMap: google.maps.Map;
    constructor(divID: string) {
      this._googleMap = new google.maps.Map(document.getElementById(divID) as HTMLElement, {
        center: myLatlng,
        zoom: 1,
      });
    }
  addStudentMarker(student: Student){
    this.infoWindow(new google.maps.Marker( { map: this._googleMap, position:{ lat: student.location.latitude, lng: student.location.longitude }} ), `<h4>${student.getName()}</h4>`);
  }
  addInternshipMarker(internship: Internship){
    this.infoWindow(new google.maps.Marker( { map: this._googleMap, position:{ lat: internship.location.latitude, lng: internship.location.longitude }} ), `Welcome to ${internship.internName} Internship`);
  }
  infoWindow(marker: google.maps.Marker, content: string) {
    let infoWindow = new google.maps.InfoWindow({
      content: content,
    });
    marker.addListener("click", () => {
      infoWindow.open(this._googleMap, marker)
    })
  }
}
