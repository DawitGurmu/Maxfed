package com.maxfed.employeetree.svcs.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maxfed.employeetree.svcs.model.Department;
import com.maxfed.employeetree.svcs.repository.DepartmentRepository;

@Service
public class DepartmentService {

	@Autowired
	DepartmentRepository departmentRepo;

	public Department createDepartment(Department department) {
		Department newDepartment = new Department();
		newDepartment.setDepartmentId(department.getDepartmentId());
		newDepartment.setDepartmentName(department.getDepartmentName());
		newDepartment.setDepartmentManager(department.getDepartmentManager());
		departmentRepo.save(newDepartment);
		return newDepartment;
	}

	public List<Department> getByDepartmentByName(String departmentName) {
		return departmentRepo.findByDepartmentName(departmentName);
	}

	public List<Department> getByDepartment(){
		return departmentRepo.findDepartment();
		
	}
	
	public Department deleteBydepartmentId(String departmentId) {
		
		Optional <Department> department = departmentRepo.findByDepartmentId(departmentId) ;
		if(department.isPresent()) {			
			departmentRepo.deleteById(department.get().getId());
		} 
		return department.get();
	
	}
	

}
