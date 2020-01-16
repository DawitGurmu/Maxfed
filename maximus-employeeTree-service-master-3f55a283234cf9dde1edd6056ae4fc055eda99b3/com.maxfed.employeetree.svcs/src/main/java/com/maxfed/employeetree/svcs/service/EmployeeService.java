package com.maxfed.employeetree.svcs.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.maxfed.employeetree.svcs.model.Employee;
import com.maxfed.employeetree.svcs.repository.EmployeeRepository;

@Service
public class EmployeeService {
	@Autowired
	EmployeeRepository employeeRepo;
	
	public Employee createEmployee(Employee employee ) {
		Employee newEmployee = new Employee();
		newEmployee.setFirstName(employee.getFirstName());
		newEmployee.setLastName(employee.getLastName());
		newEmployee.setEmployeeId(employee.getEmployeeId());
		newEmployee.setDOB(employee.getDOB());
		newEmployee.setManageName(employee.getManagerName());
		newEmployee.setEducation(employee.getEducation());
		newEmployee.setAddress(employee.getAddress());
		newEmployee.setSSN(employee.getSSN());
		
		newEmployee.setDepartmentId(employee.getDepartmentId());
		employeeRepo.save(newEmployee);
		return newEmployee;

	}
	public List<Employee>getByfirstByName(String firstName) {
		return employeeRepo.findByfirstName(firstName);
	}
	
	public List<Employee>getBylastByName(String lastName) {
		return employeeRepo.findBylastName(lastName);
	}
	public List<Employee>getByemployeeById(String employeeId) {
		return employeeRepo.findByemployeeId(employeeId);
	}

	
	
public Employee deleteByemployeeId(String employeeId) {
	
	Optional <Employee> employee = employeeRepo.findByEmployeeId(employeeId) ;
	if(employee.isPresent()) {		
		
		employeeRepo.deleteById(employee.get().getId());
	} 
	return employee.get();
}
public List<Employee> getByEmployee(){
	return employeeRepo.findall();
	
}


}
