import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Button } from 'selenium-webdriver';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  @Input()
vehicle = new Vehicle("", 0, "", "", 0, 0, false, []);

@Input() showCancelButton = false;

  @Output("on-submit")
emitter = new EventEmitter

@Output("on-cancel")
emitterCancel = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(nForm:NgForm) {
    const input = nForm.value
    const v = new Vehicle(
    input.veh_vin,
    input.veh_year,
    input.veh_make,
    input.veh_model,
    input.veh_mileage,
    input.veh_price,
    input.veh_featured === "" ? false : input.veh_featured,
    [])
    this.emitter.emit(v)
    }

    cancelInput(nForm:NgForm) {
      nForm.reset();
      this.emitterCancel.emit();
    }

}
