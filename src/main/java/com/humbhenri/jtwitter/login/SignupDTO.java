package com.humbhenri.jtwitter.login;

import javax.validation.constraints.NotNull;

public class SignupDTO {

	@NotNull
	private String name;
	@NotNull
	private String password;
	@NotNull
	private String displayName;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDisplayName() {
		return displayName;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

}
