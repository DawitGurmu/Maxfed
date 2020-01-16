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
import com.maxfed.employeetree.svcs.model.Address;
import com.maxfed.employeetree.svcs.service.AddressService;

@RestController
@CrossOrigin("*")
@RequestMapping("/address")
public class AddressController {
@Autowired
AddressService addressService;
@GetMapping("")
public String welcome() {
	return "welcome to maxfed-ADDRESS Tree-svcs";
	}
@GetMapping(path="/{address}")
public List<Address> getAddress(@PathVariable String Address){
	return addressService.getByaddressBySt(Address); 
}
@RequestMapping(value="/add", method = RequestMethod.POST,consumes="application/json", produces="application/json")
public Address createAddress (@RequestBody Address address) {
	addressService.createAddress(address);
	return address;
}
	
}
