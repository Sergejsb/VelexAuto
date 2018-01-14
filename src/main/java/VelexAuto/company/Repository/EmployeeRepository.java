package VelexAuto.company.Repository;

import VelexAuto.company.domain.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
