
package com.maxfed.employeetree.svcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.maxfed.employeetree.svcs.model.User;
import com.maxfed.employeetree.svcs.repository.UserRepository;


@Service
public class UserService {
	@Autowired
	UserRepository userRepo;
	public User createUser (User user) {
		User newUser = new User(); 
		newUser.setUserId(user.getUserId());
		newUser.setUserName(user.getUserName());

		newUser.setPassword(user.getPassword());
		user.setPassword(user.getPassword());
		userRepo.save(newUser);
		return newUser; 
	}
	public List<User> getByUserByName(String userName) {
		return userRepo.findByUserName(userName);
		
}

	
	}

