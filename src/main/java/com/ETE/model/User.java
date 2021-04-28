package com.ETE.model;

import javax.persistence.*;

@Entity
@Table(name = "information")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private Integer age;

    @Column(name = "mobile")
    private String mobile_no;

    @Column(name = "email",unique = true)
    private String email;

    @Column(name = "address")
    private String address;

    public User(Integer id, String name, Integer age, String mobile_no, String email, String address) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.mobile_no = mobile_no;
        this.email = email;
        this.address = address;
    }

    public User(){

    };

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobile_no() {
        return mobile_no;
    }

    public void setMobile_no(String mobile_no) {
        this.mobile_no = mobile_no;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

