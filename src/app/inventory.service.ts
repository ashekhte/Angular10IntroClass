import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private inventory: Vehicle[] = [
    {
      VIN: "Y123",
      year: 2012,
      make: "HONDA",
      model: "Civic",
      mileage: 70000,
      price: 5900.00,
      featured: false,
      photos: []
      },
      {
      VIN: "P1023",
      year: 2019,
      make: "BMW",
      model: "328i",
      mileage: 42000,
      price: 12000.00,
      featured: true,
      photos: ["/assets/b-1.png", "/assets/b-2.png", "/assets/b-3.png",
      "/assets/b-4.png"]
      },
      {
      VIN: "NM182",
      year: 2018,
      make: "KIA",
      model: "Niro",
      mileage: 31000,
      price: 7900.00,
      featured: false,
      photos: ["/assets/k-1.png", "/assets/k-2.png", "/assets/k-3.png"]
      }
  ]

  constructor() { }

  public getInventory() : Vehicle[] {
    return this.inventory
    }
    public addVehicle(v:Vehicle) {
    this.inventory.push(v)
    }

    public updateVehicle(oldVIN:string, newVehicle:Vehicle) {
      const oldVehicle = this.inventory.find(
      v => v.VIN === oldVIN)
      if (oldVehicle != undefined) {
      Object.assign(oldVehicle, newVehicle)
      }
      }
      public deleteVehicle(vehicleToDelete:Vehicle) {
      this.inventory = this.inventory.filter(v => v.VIN !==
      vehicleToDelete.VIN)
      }
}
