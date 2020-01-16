package com.maxfed.employeetree.svcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.maxfed.employeetree.svcs.model.Manager;
import com.maxfed.employeetree.svcs.repository.ManagerRepository;

@Service
public class ManagerService {
	@Autowired
	ManagerRepository managerRepo;
	public Manager createManager (Manager manager) {
		Manager newManager = new Manager(); 
		newManager.setManagerId(manager.getManagerId());
		newManager.setManagerFName(manager.getManagerFName());
		newManager.setManagerLName(manager.getManagerLName());
		
		managerRepo.save(newManager);
		return newManager; 
	}
	public List<Manager> getBymanagerByFName(String managerFName) {
		return managerRepo.findByManagerFName(managerFName);
}
	
}



