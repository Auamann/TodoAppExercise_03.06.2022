package com.example.demo.TaskRepo;

import com.example.demo.Task.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepoInterface extends MongoRepository<Task, String> {


}
