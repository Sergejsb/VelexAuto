package VelexAuto.company.Service;

import VelexAuto.company.Repository.EmployeeRepository;
import VelexAuto.company.domain.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository repository;

    public Employee findById(Long id) {
        return repository.findOne(id);
    }

    public void saveEmployee(Employee employee) {
        repository.save(employee);
    }

    public void updateEmployee(Employee employee) {
        saveEmployee(employee);
    }

    public void deleteEmployeeById(Long id) {
        repository.delete(id);
    }

    public Iterable<Employee> findAllEmployees() {
        return repository.findAll();
    }

}

