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

import com.maxfed.employeetree.svcs.model.Education;
import com.maxfed.employeetree.svcs.service.EducationService;

@RestController
@CrossOrigin("*")
@RequestMapping("/education")
public class EducationController {
	@Autowired
	EducationService educationService;
	@GetMapping("")
    public String welcome() {
		return "welcome to maxfed-Education Tree-svcs";
	}
	@GetMapping(path="/{educationLevel}")
	public List<Education> getEducation(@PathVariable String educationLevel){
		return educationService.getByEducationByLevel(educationLevel); 
	}
	@RequestMapping(value="/add", method = RequestMethod.POST,consumes="application/json", produces="application/json")
	public Education createEducation (@RequestBody Education education) {
		educationService.createEducation(education);
		return education;
	}
}


