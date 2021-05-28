package com.humbhenri.jtwitter.posts;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("posts")
public class PostController {

    private PostRepository postRepository;

    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;

    }

    @GetMapping
    public Collection<PostDTO> getPosts() {
        var posts = new ArrayList<PostDTO>();
        postRepository.findAll().forEach(post -> {
            var dto = new PostDTO();
            dto.setAvatar(post.getAvatar());
            dto.setDisplayName(post.getUser().getDisplayName());
            dto.setImage(post.getImage());
            dto.setText(post.getText());
            dto.setUserName(post.getUser().getName());
            dto.setVerified(post.getUser().getVerified());
            posts.add(dto);
        });
        return posts;
    }
}