package com.humbhenri.jtwitter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

// We should use OncePerRequestFilter since we are doing a database call, there is no point in doing this more than once
public class JwtTokenFilter extends OncePerRequestFilter {

	private final JwtTokenProvider jwtTokenProvider;

	public JwtTokenFilter(JwtTokenProvider jwtTokenProvider) {
		this.jwtTokenProvider = jwtTokenProvider;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
			FilterChain filterChain) throws ServletException, IOException {
		final var token = jwtTokenProvider.resolveToken(httpServletRequest);
		if (token != null && jwtTokenProvider.validateToken(token)) {
			final var auth = jwtTokenProvider.getAuthentication(token);
			SecurityContextHolder.getContext().setAuthentication(auth);
		}

		filterChain.doFilter(httpServletRequest, httpServletResponse);
	}

}
