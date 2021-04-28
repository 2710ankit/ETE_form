package com.ETE.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;


import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

@Configuration
public class JPA_Configuration {
    @Primary
    @Bean
    public EntityManagerFactory entityManagerFactory() {
        LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
        entityManagerFactoryBean.setPersistenceXmlLocation("classpath:META-INF/persistence.xml");
        entityManagerFactoryBean.afterPropertiesSet();
        return entityManagerFactoryBean.getObject();
    }

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUrl("postgres://zqhcqmuavseqna:e59f39d49635b96f25cce159278973bfa8004021edca7a4359aca2e9d494e8d8@ec2-54-166-167-192.compute-1.amazonaws.com:5432/d40q80o3cq6vre");
        dataSource.setUsername("zqhcqmuavseqna");
        dataSource.setPassword("e59f39d49635b96f25cce159278973bfa8004021edca7a4359aca2e9d494e8d8");
        return  dataSource;
    }
}

