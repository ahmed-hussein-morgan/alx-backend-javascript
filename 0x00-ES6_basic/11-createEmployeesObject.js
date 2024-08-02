export default function createEmployeesObject(departmentName, employees) {
  const employeesList = [];
  for (const employee of employees) {
    employeesList.push(String(employee));
  }
  // const obj = `{ ${departmentName}: [ ${employeesList} ]}`;
  // return obj;

  // Construct the object as a string
  const objStr = `{ "${departmentName}": [${employeesList.map((e) => `"${e}"`).join(', ')}] }`;
  // Parse the string back into an object
  return JSON.parse(objStr);
}
