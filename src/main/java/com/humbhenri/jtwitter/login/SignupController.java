package com.humbhenri.jtwitter.login;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.humbhenri.jtwitter.users.User;
import com.humbhenri.jtwitter.users.UserRepository;

@RestController
@RequestMapping("/signup")
public class SignupController {
	
	private UserRepository userRepository;

	public SignupController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@PostMapping
	@ResponseStatus(value = HttpStatus.NO_CONTENT)
	public void signup(@Valid @RequestBody SignupDTO dto) {
		boolean nameAlreadyUsed = !userRepository.findByName(dto.getName()).isEmpty();
		if (nameAlreadyUsed) {
			throw new NameAlreadyUsedException(dto.getName());
		}
		User user = new User();
		user.setName(dto.getName());
		var encoder = new BCryptPasswordEncoder();
		user.setPassword(encoder.encode(dto.getPassword()));
		user.setDisplayName(dto.getDisplayName());
		userRepository.save(user);
	}
}
