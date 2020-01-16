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
import com.maxfed.employeetree.svcs.service.DepartmentService;



@RestController
@CrossOrigin("*")
@RequestMapping("/department")
public class DepartmetController {
	@Autowired
	DepartmentService departmentService;
	
	@GetMapping("")
    public String welcome() {
		return "welcome to maxfed-department Tree-svcs";
	}
	
	@GetMapping(path="find/{departmentName}")
    public List<Department> getDepartment(@PathVariable String departmentName) {
		return departmentService.getByDepartmentByName(departmentName);
	}
	@GetMapping(path="/{all}") 
	public List<Department> getDepartment(){
	return departmentService.getByDepartment();

	}
	

	
	 @DeleteMapping(path = "/{departmentId}")
	  public Department delete(@PathVariable String departmentId){
	    return departmentService.deleteBydepartmentId( departmentId);
	  }

	@RequestMapping(value="/add", method = RequestMethod.POST,consumes="application/json", produces="application/json")    
    public Department createDepartment (@RequestBody Department department) {
		departmentService.createDepartment(department);
		return department;
	}
	
	
}
