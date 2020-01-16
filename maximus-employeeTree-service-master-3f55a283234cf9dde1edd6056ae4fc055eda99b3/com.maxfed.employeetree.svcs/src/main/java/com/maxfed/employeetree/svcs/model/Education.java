package com.maxfed.employeetree.svcs.model;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "EDUCATION")
public class Education {
	@Id
	private String id;
	@Column(name = "EDUCATION_ID")
	private String educationId;
	@Column(name = "COLLEGE_NAME")
	private String collegeName;
	@Column (name = "EDUCATION_LEVEL")
	private String educationLevel;
	@Column (name = "EDUCATION_DEGREE")
	private String educationDegree;
	@Column (name = "Employee_ID")
	private String employeeId;
	public String getid() { 
	return id ;
	}
	public String getEducationId() {
		return educationId;
	}
	public void setEducationId(String educationId) {
		this.educationId = educationId;
	}
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	
	public String getCollegeName() {
		return collegeName;
	}
	public void setCollegeName(String collegeName) {
	this.collegeName = collegeName;
	}
	public String getEducationLevel() {
		return educationLevel;
	}
	public void setEducationLevel(String educationLevel) {
		this.educationLevel = educationLevel;
	}
	public String getEducationDegree() {
		return educationDegree;
	}
	public void setEducationDegree(String educationDegree) {
		this.educationDegree = educationDegree;
	}
	
	public Education() {
		this.id = UUID.randomUUID().toString();
		//this.educationId = UUID.randomUUID().toString();
	}

}




