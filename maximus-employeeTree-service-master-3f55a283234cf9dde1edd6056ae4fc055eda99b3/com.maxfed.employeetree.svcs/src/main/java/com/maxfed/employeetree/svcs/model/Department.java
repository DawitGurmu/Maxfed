package com.maxfed.employeetree.svcs.model;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "DEPARTMENT")
public class Department {
	@Id
	private String id;

	@Column(name = "DEPARTMENT_ID")
	private String departmentId;

	@Column(name = "DEPARTMENT_NAME")
	private String departmentName;

	@Column(name = "DEPARTMENT_MANAGER")
	private String departmentManager;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(String departmentId) {
		this.departmentId = departmentId;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public String getDepartmentManager() {
		return departmentManager;
	}

	public void setDepartmentManager(String departmentManager) {
		this.departmentManager = departmentManager;
	}

	public Department() {
		this.id = UUID.randomUUID().toString();
		
	}

}
