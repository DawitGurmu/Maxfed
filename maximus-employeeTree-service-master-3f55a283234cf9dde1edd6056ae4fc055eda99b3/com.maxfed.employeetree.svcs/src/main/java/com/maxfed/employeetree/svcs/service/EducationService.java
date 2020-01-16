package com.maxfed.employeetree.svcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maxfed.employeetree.svcs.model.Education;
import com.maxfed.employeetree.svcs.repository.EducationRepository;


@Service
public class EducationService {
	@Autowired

	EducationRepository educationRepo;
	public Education createEducation (Education education) {
		Education newEducation = new Education(); 
		newEducation.setCollegeName(education.getCollegeName());
		newEducation.setEducationLevel(education.getEducationLevel());
		newEducation.setEducationDegree(education.getEducationDegree());
		newEducation.setEmployeeId(education.getEmployeeId());
		educationRepo.save(newEducation);
		return newEducation; 
	}
	public List<Education> getByEducationByLevel(String educationLevel) {
		return educationRepo.findByEducationLevel(educationLevel);
}
}



