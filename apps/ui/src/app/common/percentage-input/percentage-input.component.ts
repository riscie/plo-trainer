import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-percentage-input",
  templateUrl: "./percentage-input.component.html",
  styleUrls: ["./percentage-input.component.scss"]
})
export class PercentageInputComponent implements OnInit {
  segments: number[] = Array.from(Array(20).keys());
  activeSegment: number = -1;

  constructor() {
  }

  ngOnInit(): void {
  }

  setActiveSegment(segmentNo: number) {
    this.activeSegment = segmentNo;
  }

  getPercentageToDisplay() {
    let value = Math.floor(this.activeSegment / this.segments.length * 100 + 100 / this.segments.length);
    if (value === 0) {
      return "";
    }
    let topOrBottom = "";

    if (value > 50) {
      topOrBottom = "Top";
      value = Math.floor(100 + 100 / this.segments.length - value);
    } else if (value <= 50) {
      topOrBottom = "Bottom";
    }
    return `${topOrBottom} ${value}%`;
  }

  percentageToHsl(percentage: number, hue0: number, hue1: number) {
    let hue = (percentage * (hue1 - hue0)) + hue0;
    return "hsl(" + hue + ", 100%, 50%)";
  }

}
