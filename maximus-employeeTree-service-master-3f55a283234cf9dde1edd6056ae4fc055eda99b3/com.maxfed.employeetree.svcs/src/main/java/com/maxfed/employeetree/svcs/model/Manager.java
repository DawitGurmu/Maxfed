package com.maxfed.employeetree.svcs.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "MANAGER")
public class Manager {
	@Id
	private String id;
	@Column(name = "MANAGER_ID")
	private String managerId;
	@Column(name = "MANAGER_FNAME")
	private String managerFName;
	@Column(name = "MANAGER_LNAME")
	private String managerLName;

public String getId() {
	return id; 
	}
public void setId(String id) {
	this.id = id;	
}

public String getManagerId() {
	return managerId;
}

public void setManagerId(String managerId) {
	this.managerId = managerId;
}
public String getManagerFName() {
	return managerFName;
}

public void setManagerFName(String managerFName) {
	this.managerFName = managerFName;
}
public String getManagerLName() {
	return managerLName;
}

public void setManagerLName(String managerLName) {
	this.managerLName = managerLName;
}

}
