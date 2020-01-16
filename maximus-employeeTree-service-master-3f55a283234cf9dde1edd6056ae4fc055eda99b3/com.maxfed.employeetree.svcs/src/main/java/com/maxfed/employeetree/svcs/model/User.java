
package com.maxfed.employeetree.svcs.model;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "USER")
public class User {
	@Id
	private String id;
	@Column(name = "USER_ID")
	private String userId;
	
	@Column(name = "USER_NAME")
	private  String userName;
	
	
	
	@Column(name = "PASSWORD")
	private String password;
	

	public String getid() { 
	return id ;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
	this.userName = userName;
	}
	
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	public User() {
		this.id = UUID.randomUUID().toString();
		
	}
}




