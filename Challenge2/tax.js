function salary (basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let payee = grossSalary *0.03;
    let nssfDeductions = grossSalary *0.06;
    let nhifDeductions = grossSalary *0.0025;
    let totalDeductions = payee + nssfDeductions + nhifDeductions;
    let netSalary = grossSalary - totalDeductions;

    return "Gross salary:" + grossSalary + ",Payee" + payee + ",NSSF Deductions:" + nssfDeductions
    + ",NHIF Deductions:" + nhifDeductions + totalDeductions + ",Net Salary:" + netSalary
}

console.log(salary(10000,20000));