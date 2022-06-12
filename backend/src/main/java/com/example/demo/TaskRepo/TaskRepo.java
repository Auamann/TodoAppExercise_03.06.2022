package com.example.demo.TaskRepo;

import com.example.demo.Task.Task;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;


@Repository
public class TaskRepo {

    private static final Map<String, Task> taskList = new HashMap<>();


    public void addTask(Task task) {
        taskList.put(task.getId(), task);
    }

    public Map<String, Task> getTaskList() {
        return taskList;
    }

    public Task getById(String id) {
        return taskList.get(id);

    }

    public void updateTask(Task testSwitch) {
        taskList.replace(testSwitch.getId(), testSwitch);
    }

    public void prevTask(Task testSwitch) {
        taskList.replace(testSwitch.getId(), testSwitch);
    }

    public void save(Task task) {
        taskList.put(task.getId(), task);
    }

    public void deleteTask(String id) {
        taskList.remove(id);
    }

    public Task getTask(String id) {
        return taskList.get(id);
    }
}