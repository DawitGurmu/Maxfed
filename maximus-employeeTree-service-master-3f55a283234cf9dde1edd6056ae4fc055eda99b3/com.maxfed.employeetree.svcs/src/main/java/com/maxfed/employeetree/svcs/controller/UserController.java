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

import com.maxfed.employeetree.svcs.model.User;
import com.maxfed.employeetree.svcs.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService UserService;
	@GetMapping("")
    public String welcome() {
		return "welcome to maxfed-user Tree-svcs";
	}
	@GetMapping(path="/{userName}")
	public List<User> getUser(@PathVariable String UserName){
		return UserService.getByUserByName(UserName);
	}
	@RequestMapping(value="/add", method = RequestMethod.POST,consumes="application/json", produces="application/json")
	public User createUser (@RequestBody User user) {
		UserService.createUser(user);
		return user;
	}
}



