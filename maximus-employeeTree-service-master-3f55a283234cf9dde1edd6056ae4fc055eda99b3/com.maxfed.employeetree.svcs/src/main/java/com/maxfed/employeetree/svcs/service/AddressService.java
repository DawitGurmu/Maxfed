package com.maxfed.employeetree.svcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maxfed.employeetree.svcs.model.Address;

import com.maxfed.employeetree.svcs.repository.AddressRepository;
@Service
public class AddressService {
	@Autowired
	AddressRepository Addressripo;
	public Address createAddress (Address address) {
		Address newAddress = new Address();
		newAddress.setAddress(address.getAddress());
		newAddress.setAddress_two(address.getAddress_two());
		newAddress.setCity(address.getCity());
		newAddress.setEmployeeId(address.getEmployeeId() );
		newAddress.setState(address.getState());
		newAddress.setZip(address.getZip());
		Addressripo.save(newAddress);
		return newAddress;
	}
	
	public List<Address> getByaddressBySt(String address) {
		return Addressripo.findByaddress(address);
}
}
