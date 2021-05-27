package com.humbhenri.jtwitter.login;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
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

    public LoginController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }
    
    @PostMapping
    public ResponseEntity<Object> login(@Valid @RequestBody UserAuth user) {
        
        LOGGER.info("login with user " + user.getName());
        var auth = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(user.getName(), user.getPassword()));
        LOGGER.info(auth.getPrincipal() + "");
        return ResponseEntity.ok().build();
    }
}
