package com.humbhenri.jtwitter.login;

import java.util.List;

import javax.validation.Valid;

import com.humbhenri.jtwitter.JwtTokenProvider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class.getName());
    private AuthenticationManager authenticationManager;
	private JwtTokenProvider jwtTokenProvider;

    public LoginController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider) {
        this.authenticationManager = authenticationManager;
		this.jwtTokenProvider = jwtTokenProvider;
    }
    
    @PostMapping
    public String login(@Valid @RequestBody UserAuth user) {
        LOGGER.info("login with user " + user.getName());
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(user.getName(), user.getPassword()));
        return jwtTokenProvider.createToken(user.getName(), List.of("USER"));
    }
}
