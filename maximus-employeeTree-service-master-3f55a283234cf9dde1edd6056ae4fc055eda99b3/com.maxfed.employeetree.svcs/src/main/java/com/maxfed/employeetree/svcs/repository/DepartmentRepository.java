package com.maxfed.employeetree.svcs.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.maxfed.employeetree.svcs.model.Department;

@Repository
public interface DepartmentRepository extends CrudRepository<Department, String> {
	List<Department> findByDepartmentName(String departmentName);
	Optional<Department> findByDepartmentId(String departmentId);
	//@Query(  value = " Select ID,DEPARTMENT_ID,DEPARTMENT_NAME,DEPARTMENT_MANAGER from department" , nativeQuery= true)
	@Query(  value = " Select * from Department" , nativeQuery= true)
	List<Department> findDepartment();
	
//	@Query(value =" SELECT FIRST_NAME,LAST_NAME,DEPARTMENT_NAME,EMPLOYE_ID, DEPARTMENT_MANAGER AS MANAGER from  employee e  \r\n" + 
		//	"  inner join  department d on e.DEPARTMENT_ID = d.DEPARTMENT_ID \r\n" + 
		//	"where DEPARTMENT_Name = \"ACCOUNTING AND FINANCE \"",nativeQuery=true)
	
}

