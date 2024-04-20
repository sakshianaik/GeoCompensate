const { getEmployeeId, saveEmployee, getEmployees, getOneEmpData, deleteEmployee} = require("../../services/employee/employeeService");

class EmployeeController {
    static async registerEmployee(req, res) {
        try {
            const payload = req.body;
            let id = await getEmployeeId();
            id.employeeId = (id && id.employeeId ? id.employeeId : 0 )+ 1;
            id.save();
            payload.employeeId = id.employeeId;
            payload.password = Math.random().toString(36).slice(2);
            let emp = await saveEmployee(payload);
            emp.save();
            return res.status(200).json({
                type: "success",
                message: "Success result",
                data: emp,
            });
        } catch (error) {
            return res.status(500).json({
                type: "error",
                message: error.message || "Unhandled Error",
                error,
            });
        }
    }

    static async fetchEmployees(req, res) {
        try {
            const payload = req.params.searchQuery;
            let empList = await getEmployees(payload);
            return res.status(200).json({
                type: "success",
                message: "Success result",
                data: empList,
            });
        } catch (error) {
            return res.status(500).json({
                type: "error",
                message: error.message || "Unhandled Error",
                error,
            });
        }
    }

    static async fetchEmpProfile(req,res){
        try{
            const employeeId = req.params.empId;
            let empData = await getOneEmpData(employeeId);
            let message = (empData==null) ? "No employee found" : "Valid Employee id";
            return res.status(200).json({
                type: "Success",
                message,
                data : empData
            })  
        } catch(error){
            return res.status(500).json({
                type: "error",
                message : "invalid employee id",
                id : employeeId
            }); 
        }
    }

    static async updateEmpProfile(req,res){
        try{
            const payload = req.body;
            console.log("payload controller",payload)
            let empData = await getOneEmpData(payload.employeeId);
            empData.firstName = payload.firstName;
            empData.lastName = payload.lastName;
            empData.name = payload.name;
            empData.email = payload.email;
            empData.phone = payload.phone;
            
            if(payload.isHR){  
                empData.ssn = payload.ssn;
                empData.departmentId = payload.departmentId;  
                empData.hourlyPay = payload.hourlyPay;   
            }
            empData.save(); 
            return res.status(200).json({
                type: "Success",
                message : "Successfully employee updated!!",
                data : empData
            })  
        
        } catch(err){
            return res.status(500).json({
                type : "error",
                message : "Employee id doesn't exists in the db",
                id : empId
            })
        }
    }

    static async relieveEmployee(req,res){
        try{
            const empId = req.params.empId;
            let delEmpData = await deleteEmployee(empId);
            return res.status(200).json({
                type: "Success",
                message: "Employee record deleted successfully",
                data : delEmpData
            })
        } catch(error){
            return res.status(500).json({
                type: "error",
                message : "invalid employee name searched",
                id : empId
            });
        }
    }
}
module.exports = EmployeeController;