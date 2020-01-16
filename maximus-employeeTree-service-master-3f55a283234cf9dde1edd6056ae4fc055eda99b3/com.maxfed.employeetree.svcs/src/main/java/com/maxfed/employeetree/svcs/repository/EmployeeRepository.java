package com.maxfed.employeetree.svcs.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import com.maxfed.employeetree.svcs.model.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, String> {
	List<Employee> findByfirstName(String firstName);
	List<Employee> findBylastName(String lastName);
	List<Employee> findByemployeeId(String employeeId);
	@Query(  value ="Select id from Employee",  nativeQuery= true)
	List<Employee> findall();

	Optional<Employee> findByEmployeeId(String employeeid);
	
}

