package com.ETE.repository;

import com.ETE.model.User;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepository {

    @PersistenceUnit(name = "allInfo")
    EntityManagerFactory entityManagerFactory;

    public List getallinfo() {
        EntityManager entityManager= entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction= entityManager.getTransaction();
        TypedQuery<User> query=entityManager.createQuery("SELECT u FROM User u",User.class);
        List<User> user=query.getResultList();
        return user;


    }
    Boolean userPresent = false;
    public void postinfo(User user) {
        EntityManager entityManager= entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction= entityManager.getTransaction();

        try {
            entityTransaction.begin();
            entityManager.persist(user);
            entityTransaction.commit();
            userPresent= false;

        }
        catch (Exception e){
            userPresent=true;
            entityTransaction.rollback();
        }

    }

    public void deleteInfo(String email) {
        EntityManager entityManager= entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction= entityManager.getTransaction();
        try{

            entityTransaction.begin();
            TypedQuery<User> query=entityManager.createQuery("SELECT u FROM User u WHERE u.email= :email",User.class).setParameter("email", email);
            User user= query.getSingleResult();
            entityManager.remove(user);
            entityTransaction.commit();


        }
        catch (Exception e){
            System.out.println(e);
            entityTransaction.rollback();
        }
    }

    public Boolean checkUser() {
        return userPresent;
    }

    public List<User> searchedUser(String searchName) {
        EntityManager entityManager= entityManagerFactory.createEntityManager();
        EntityTransaction entityTransaction= entityManager.getTransaction();
        TypedQuery<User> query=entityManager.createQuery("SELECT u FROM User u WHERE u.name= :searchName",User.class).setParameter("searchName",searchName);
        List<User> user=query.getResultList();
        return user;
    }
}