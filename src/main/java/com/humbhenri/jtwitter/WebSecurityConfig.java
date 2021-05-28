package com.humbhenri.jtwitter;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private JwtTokenProvider jwtTokenProvider;

    public WebSecurityConfig(JwtTokenProvider jwtTokenProvider) {
		this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
            .authorizeRequests().antMatchers("/", "/login", "/logout", "/register").permitAll()
            .anyRequest().authenticated().and()
            .apply(new JwtTokenFilterConfigurer(jwtTokenProvider));           
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

     // Used by spring security if CORS is enabled.
     @Bean
     public CorsFilter corsFilter() {
         var source = new UrlBasedCorsConfigurationSource();
         var config = new CorsConfiguration();
         config.setAllowCredentials(true);
         config.addAllowedOrigin("*");
         config.addAllowedHeader("*");
         config.addAllowedMethod("*");
         source.registerCorsConfiguration("/**", config);
         return new CorsFilter(source);
     }
}
