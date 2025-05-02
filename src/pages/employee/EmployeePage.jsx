import { Link } from "react-router-dom";

export default function EmployeePage() {
  return (
    <>
      <title>Employee</title>
      <div class="container mt-4">
        <h2 class="text-center">Employee Views</h2>

        <div className="mt-4 d-flex justify-content-between">
          <Link to="/employee/create" class="btn btn-primary mb-3">
            New Employee
          </Link>
          <Link to="/" class="btn btn-primary mb-3">
            Home
          </Link>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Date of Join</th>
              <th>Manager ID</th>
              <th>Employee Email</th>
              <th>Employee Phone</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {/* <tr th:each="employee : ${employeeList}">
            <td th:text="${employee.id}"></td>
            <td th:text="${employee.employeeName}"></td>
            <td th:text="${employee.dateJoin}"></td>
            <td th:text="${employee.managerId}"></td>
            <td th:text="${employee.employeeEmail}"></td>
            <td th:text="${employee.employeePhone}"></td>
            <td style="white-space:nowrap">
                <a class="btn btn-primary btn-sm"
                   th:href="@{/employees/edit(id=${employee.id})}"
                   >
                    EDIT
                </a>
                <a class="btn btn-danger btn-sm"
                   th:href="@{/employees/delete(id=${employee.id})}"
                   onclick="return confirm('Are you sure?')">
                    DELETE
                </a>
            </td>
        </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}
