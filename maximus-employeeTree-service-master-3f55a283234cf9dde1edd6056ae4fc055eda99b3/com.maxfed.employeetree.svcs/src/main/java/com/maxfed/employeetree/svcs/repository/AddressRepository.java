package com.maxfed.employeetree.svcs.repository;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.maxfed.employeetree.svcs.model.Address;


@Repository
public interface AddressRepository extends CrudRepository<Address, String> {
	List<Address> findByaddress(String address);

	
}

	
	
