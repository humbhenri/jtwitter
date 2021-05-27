package com.humbhenri.jtwitter.users;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findById(Long id);

    List<User> findByName(String name);
}