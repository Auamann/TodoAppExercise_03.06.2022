package com.example.demo.TaskService;

import com.example.demo.Task.Task;
import com.example.demo.TaskRepo.TaskRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepo taskRepo;


    public void addTask(Task taskToAdd) {
        taskRepo.addTask(taskToAdd);
    }

    public Task getTask(String id) {
        return taskRepo.getTask(id);
    }

    public void saveTask(Task task) {
        taskRepo.save(task);
    }

    public List<Task> getTasks() {
        return taskRepo.getTaskList().values().stream().toList();
    }

    public Task promoteTask(Task task) {

        String currStatus = task.getStatus();

        Task statusToUpdate = taskRepo.getById(task.getId());

        switch (currStatus) {
            case "OPEN":
                statusToUpdate.setStatus("IN_PROGRESS");
                break;
            case "IN_PROGRESS":
                statusToUpdate.setStatus(("DONE"));
                break;

        }
        taskRepo.updateTask(statusToUpdate);

        return statusToUpdate;
    }

    public Task demoteTask(Task task) {

        String currStatus = task.getStatus();

        Task statusToUpdate = taskRepo.getById(task.getId());

        switch (currStatus) {
            case "DONE":
                statusToUpdate.setStatus("IN_PROGRESS");
                break;
            case "IN_PROGRESS":
                statusToUpdate.setStatus(("OPEN"));
                break;

        }
        taskRepo.prevTask(statusToUpdate);

        return statusToUpdate;
    }

    public void deleteTask(String id) {
        taskRepo.deleteTask(id);

    }


}




