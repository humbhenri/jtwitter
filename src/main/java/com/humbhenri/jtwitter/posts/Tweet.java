package com.humbhenri.jtwitter.posts;

import javax.validation.constraints.NotNull;

public class Tweet {

    @NotNull
    private String text;

    private String urlImage;

    public void setText(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }

    public String getUrlImage() {
        return urlImage;
    }
}
