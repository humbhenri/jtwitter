package com.humbhenri.jtwitter.login;

public class NameAlreadyUsedException extends RuntimeException {

	public NameAlreadyUsedException(String name) {
		super(name + " already used by another user. Please fill a different name");
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}
