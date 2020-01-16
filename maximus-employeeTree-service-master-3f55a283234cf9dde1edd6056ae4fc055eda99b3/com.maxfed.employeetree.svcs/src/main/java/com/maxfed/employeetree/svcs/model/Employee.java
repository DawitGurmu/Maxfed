package com.maxfed.employeetree.svcs.model;


import java.util.UUID;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "EMPLOYEE")
public class Employee {
	
	@Id
	private String id;	
	@Column(name = "FIRST_NAME")
   private String firstName;
	@Column(name = "LAST_NAME")
	private String lastName;
	@Column(name = "DOB")
	private String DOB;
	 //@OneToOne()
	// @JoinColumn(name="EMPLOYEE_ID")
	   // private Employee employeeId;
@Column(name ="EMPLOYEE_ID")
private String employeeId;
	@Column(name = "MANAGER_NAME")
	private String managerName;
	@Column(name = "EDUCATION")
	private String education;
	@Column(name = "ADDRESS")
	private String address;
	@Column(name = "SSN")
	private String SSN;
	@Column(name = "DEPARTMENT_ID") 
	private String departmentId;

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(String departmentId) {
		this.departmentId = departmentId;
	}
	
	
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getManagerName() {
		return managerName;
	}
	public void setManageName(String managerName) {
		this.managerName = managerName;
	}
	public String getDOB() {
		return DOB;
	}
	public void setDOB(String DOB) {
		this.DOB = DOB;
	}
	public String getSSN() {
		return SSN;
	}
	public void setSSN(String SSN) {
		this.SSN = SSN;
	}
	
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	
	    
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	 
	public Employee(String firstName, String lastName,String employeeId, String DOB,String dmployeeid, String managerid) {
		this.id=UUID.randomUUID().toString();
	 this.firstName = firstName;
		this.setLastName(lastName);
		this.DOB =DOB;
		//this.employeeId =UUID.randomUUID().toString();
		
	}
	public Employee() {
		this.id = UUID.randomUUID().toString();
		///this.employeeId = UUID.randomUUID().toString();
	}
	
		
	}
	



