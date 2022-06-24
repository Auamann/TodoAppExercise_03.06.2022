package com.example.demo.TaskService;

import com.example.demo.Task.Task;
import com.example.demo.TaskRepo.RepoInterface;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final RepoInterface taskRepo;


    public void addTask(Task taskToAdd) {
        taskRepo.save(taskToAdd);
    }

    public Task getTask(String id) {
        return taskRepo.findById(id).orElseThrow();
    }

    public void saveTask(Task task) {
        taskRepo.save(task);
    }

    public List<Task> getTasks() {
        return taskRepo.findAll();
    }

    public Task promoteTask(Task task) {

        String currStatus = task.getStatus();

        Task statusToUpdate = taskRepo.findById(task.getId()).orElseThrow();

        switch (currStatus) {
            case "OPEN":
                statusToUpdate.setStatus("IN_PROGRESS");
                break;
            case "IN_PROGRESS":
                statusToUpdate.setStatus(("DONE"));
                break;

        }
        taskRepo.save(statusToUpdate);

        return statusToUpdate;
    }

    public Task demoteTask(Task task) {

        String currStatus = task.getStatus();

        Task statusToUpdate = taskRepo.findById(task.getId()).orElseThrow();

        switch (currStatus) {
            case "DONE":
                statusToUpdate.setStatus("IN_PROGRESS");
                break;
            case "IN_PROGRESS":
                statusToUpdate.setStatus(("OPEN"));
                break;

        }
        taskRepo.save(statusToUpdate);

        return statusToUpdate;
    }

    public void deleteTask(String id) {
        taskRepo.deleteById(id);

    }


}




