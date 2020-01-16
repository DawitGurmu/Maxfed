package com.maxfed.employeetree.svcs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.maxfed.employeetree.svcs.model.Manager;

import com.maxfed.employeetree.svcs.service.ManagerService;

@RestController
@CrossOrigin("*")
@RequestMapping("/manager")
public class ManagerController {
	@Autowired
	ManagerService managerService;
	@GetMapping("")
    public String welcome() {
		return "welcome to maxfed-Manager Tree-svcs";
	}
	@GetMapping(path="/{managerFName}")
    public List<Manager> getManager(@PathVariable String ManagerFName) {
		return managerService.getBymanagerByFName(ManagerFName);
		
	}
	@RequestMapping(value="/add", method = RequestMethod.POST,consumes="application/json", produces="application/json")
	public Manager createManager (@RequestBody Manager manager) {
		managerService.createManager(manager);
		return manager;
	}
}
