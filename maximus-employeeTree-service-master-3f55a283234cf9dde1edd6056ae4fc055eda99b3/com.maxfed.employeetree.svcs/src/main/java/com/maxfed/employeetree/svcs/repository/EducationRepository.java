package com.maxfed.employeetree.svcs.repository;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.maxfed.employeetree.svcs.model.Education;

@Repository
public interface EducationRepository extends CrudRepository<Education, String> {
	List<Education> findByEducationLevel(String educationLevel);



	
	
}

