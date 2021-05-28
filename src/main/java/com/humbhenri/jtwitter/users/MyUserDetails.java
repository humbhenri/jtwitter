package com.humbhenri.jtwitter.users;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetails implements UserDetailsService {
	
	private UserRepository userRepository;

	public MyUserDetails(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return userRepository.findByName(username)
				.stream()
				.findFirst()
				.map(user -> org.springframework.security.core.userdetails.User
						.withUsername(username)
						.password(user.getPassword())
						.accountExpired(false)
						.accountLocked(false)
						.credentialsExpired(false)
						.disabled(false)
						.authorities("USER")
						.build())
				.orElseThrow(() -> new UsernameNotFoundException("User " + username + " not found"));
	}
    
}
