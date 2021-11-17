package com.humbhenri.jtwitter.posts;
import java.util.List;

import com.humbhenri.jtwitter.users.User;

import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<Post, Long> {
    List<Post> findByUserName(String name);
}
