package com.springcourse.fullstackbackend.repository;

import com.springcourse.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
