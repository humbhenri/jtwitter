package com.humbhenri.jtwitter.posts;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.logging.Logger;

import javax.validation.Valid;

import com.humbhenri.jtwitter.users.UserRepository;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("posts")
public class PostController {

    private PostRepository postRepository;

    private UserRepository userRepository;

    public PostController(PostRepository postRepository, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    @GetMapping
    public Collection<PostDTO> getPosts() {
        var posts = new ArrayList<PostDTO>();
        postRepository.findAll().forEach(post -> {
            var dto = new PostDTO();
            dto.setAvatar(post.getUser().getAvatar());
            dto.setDisplayName(post.getUser().getDisplayName());
            dto.setImage(post.getImage());
            dto.setText(post.getText());
            dto.setUserName(post.getUser().getName());
            dto.setVerified(post.getUser().getVerified());
            posts.add(dto);
        });
        return posts;
    }

    @PostMapping
    public void newPost(@Valid @RequestBody Tweet tweet) {
        var auth = SecurityContextHolder.getContext().getAuthentication();
        var principal = (UserDetails) auth.getPrincipal();
        var user = userRepository.findByName(principal.getUsername())
            .stream().findFirst().orElseThrow(() -> new RuntimeException("User not found"));
        var post = new Post();
        post.setUser(user);
        post.setImage(tweet.getUrlImage());
        post.setText(tweet.getText());
        postRepository.save(post);
    }
}