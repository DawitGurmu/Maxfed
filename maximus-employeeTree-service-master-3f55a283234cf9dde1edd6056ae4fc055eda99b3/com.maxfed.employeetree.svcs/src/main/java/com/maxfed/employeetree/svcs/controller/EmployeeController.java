package com.maxfed.employeetree.svcs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.maxfed.employeetree.svcs.model.Department;
import com.maxfed.employeetree.svcs.model.Employee;
import com.maxfed.employeetree.svcs.service.EmployeeService;

@RestController
@CrossOrigin("*")
@RequestMapping("/employee")
public class EmployeeController {
	@Autowired
	EmployeeService employeeService;
	
	@GetMapping("")
    public String welcome() {
		return "Welcome to Maxfed-EmployeeTree-svcs";
	}
	
	//search by first Name 
	@GetMapping(path="firstName/{firstName}")
    public List<Employee> getEmployeefirstName(@PathVariable String firstName) {
		return employeeService.getByfirstByName(firstName);
	
	}
	//Search by last Name
	@GetMapping(path="lastName/{lastName}") 
   public List<Employee> getEmployeelastNameferstName(@PathVariable String lastName) {
   return employeeService.getBylastByName(lastName); 
		
	}
	// Search By first and Last Name
	@GetMapping(path="/{firstName} {lastName}") 
	   public List<Employee> getEmployeelastName(@PathVariable String lastName) {
	   return employeeService.getBylastByName(lastName); 

		}
	//Search by employee ID  
		@GetMapping(path="records/{employeeId}") 
	     public List<Employee> getEmployeelId(@PathVariable String employeeId) {
	     return employeeService.getByemployeeById(employeeId);
			
			}
	//search by First,Last Name and department ID
	@GetMapping(path="/{firstName}/{lastName}/{departmentId}") 
	   public List<Employee> getEmployeelastNamedepartmentId(@PathVariable String lastName) {
		return employeeService.getBylastByName(lastName); 

		}

	// delete Employee record
	 @DeleteMapping(path = "/{employeeId}")
	  public Employee delete(@PathVariable String employeeId){
	  return employeeService.deleteByemployeeId( employeeId);
	  }
	 
	// adding employee recored to database table 
	@RequestMapping(value="/add", method = RequestMethod.POST,consumes="application/json", produces ="application/json")
	public Employee createEmployee (@RequestBody Employee employee) {
		employeeService.createEmployee(employee);
		return employee;	
	
	}
	@GetMapping(path="deav/{all}") 
	public List<Employee> getemployee(){
	return employeeService.getByEmployee();

	}
	

	}
