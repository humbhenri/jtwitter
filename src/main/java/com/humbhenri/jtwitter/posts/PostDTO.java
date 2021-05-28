package com.humbhenri.jtwitter.posts;

public class PostDTO {
    private Long id;
    private String displayName;
    private String userName;
    private Boolean verified;
    private String text;
    private String image;
    private String avatar;

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserName() {
        return userName;
    }

    public void setVerified(Boolean verified) {
        this.verified = verified;
    }

    public Boolean getVerified() {
        return verified;
    }
    
    public void setText(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getImage() {
        return image;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getAvatar() {
        return avatar;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
