package com.maxfed.employeetree.svcs.model;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity 
@Table (name = "ADDRESS" )
public class Address {
	@Id
	private String id; 
	@Column(name ="ADDRESS")
	private String address;
	@Column(name = "ADDRESS_TWO")
	private String Address_two;
	@Column(name = "CITY")
	private String city;
	@Column (name = "STATE")
	private String state;
	@Column (name = "Employee_ID")
	private String employeeId;
	@Column (name ="ZIP")
	private String zip;
	
	public String getid() {
		return id;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAddress_two() {
		return Address_two;
	}
	public void setAddress_two(String address_two) {
		this.Address_two = address_two;
	}
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public String getCity() {
		return city;
	}
	public void setCity (String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public Address () {
	this.id = UUID.randomUUID().toString();
	}
}

