package com.maxfed.employeetree.svcs.repository;

import java.util.List;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import com.maxfed.employeetree.svcs.model.Manager;

@Repository
public interface ManagerRepository extends CrudRepository<Manager, String> {
	List<Manager> findByManagerFName(String managerFName);
	

}


