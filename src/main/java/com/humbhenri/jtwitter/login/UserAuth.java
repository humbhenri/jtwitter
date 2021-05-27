package com.humbhenri.jtwitter.login;

import javax.validation.constraints.NotNull;

public class UserAuth {

    @NotNull
    private String name;

    @NotNull
    private String password;

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
}
