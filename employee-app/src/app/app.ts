import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Employee } from './employee';
import { EmployeeDb } from './firestore/employee-db';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private employeeDb = inject(EmployeeDb);

  employee: Employee = {
    firstName: '',
    lastName: '',
    email: '',
    position: ''
  };

  employees: Employee[] = [];

  showList = false;

  message = '';

  saveEmployee(): void {

    this.employeeDb.createEmployee(this.employee)
      .then(() => {

        this.message = 'Employee saved successfully';

        this.employee = {
          firstName: '',
          lastName: '',
          email: '',
          position: ''
        };

      })
      .catch(() => {
        this.message = 'Error saving employee';
      });
  }

  async employeeList(): Promise<void> {

    this.showList = true;

    try {
      this.employees = await this.employeeDb.getEmployees();

      console.log('Employees reçus :', this.employees);
    }
    catch (error) {
      console.error('Erreur Employee List :', error);
    }
  }

  }