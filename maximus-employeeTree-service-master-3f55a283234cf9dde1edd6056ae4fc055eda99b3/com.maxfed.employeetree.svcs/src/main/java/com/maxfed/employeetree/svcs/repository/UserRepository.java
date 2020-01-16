package com.maxfed.employeetree.svcs.repository;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.maxfed.employeetree.svcs.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, String> {
	List<User> findByUserName(String userName);


}