package com.example.demo.TaskRepo;

import com.example.demo.Task.Task;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class TaskRepo {

    private final Map< String, Task > taskList = new HashMap<>();

    public void addTask(Task task){
        taskList.put(task.getId(), task);
    }

    public Map<String,Task> getTaskList(){
        return taskList;
    }

    public Task getById (String id) {
      return taskList.get(id);

    }

    public void updateTask (Task testSwitch){
        taskList.replace(testSwitch.getId(), testSwitch);
    }

}