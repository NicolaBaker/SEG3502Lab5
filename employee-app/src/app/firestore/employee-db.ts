import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  getDocs
} from '@angular/fire/firestore';

import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDb {

  private firestore = inject(Firestore);

  createEmployee(employee: Employee) {
    const employees = collection(this.firestore, 'employees');

    return addDoc(employees, employee);
  }

  async getEmployees(): Promise<Employee[]> {
    const employees = collection(this.firestore, 'employees');

    const snapshot = await getDocs(employees);

    return snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      } as Employee;
    });
  }
}