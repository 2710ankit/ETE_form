package com.ETE.controller;


import com.ETE.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class MainController {

    @Autowired
    UserService userService;



    @RequestMapping(value = "/")
    public String indexPage(){
        System.out.println("get request");
        return  "index";
    }

    @RequestMapping(value = "/infopage")
    public String getInfo(){
        return "/html/infoPage";
    }
}
