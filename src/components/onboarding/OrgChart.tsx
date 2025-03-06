
import React, { useState, useEffect } from 'react';
import { toast } from "@/hooks/use-toast";
import { Department, Role } from './types/org-chart';
import { DepartmentButton } from './components/DepartmentButton';
import { RoleButton } from './components/RoleButton';
import { DepartmentDialog } from './components/DepartmentDialog';
import { RoleDialog } from './components/RoleDialog';
import { departments } from './data/departments';

const OrgChart = () => {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  useEffect(() => {
    toast({
      title: "Coach Tip",
      description: "Tap any departmental box to view its roles and responsibilities",
      duration: 5000,
    });
  }, []);

  return (
    <div className="bg-gray-50 w-full p-5">
      <h3 className="text-lg font-semibold mb-5">Organization Structure</h3>
      
      <div className="flex flex-col items-center space-y-4">
        {/* Visionary - Top Level */}
        <div className="w-48">
          <DepartmentButton
            deptName="Visionary"
            onClick={() => setSelectedDept(departments[0])}
            isSelected={selectedDept?.name === "Visionary"}
          />
        </div>

        <div className="h-4 w-px bg-gray-300"></div>

        {/* Integrator - Second Level */}
        <div className="w-48">
          <DepartmentButton
            deptName="Integrator"
            onClick={() => setSelectedDept(departments[1])}
            isSelected={selectedDept?.name === "Integrator"}
          />
        </div>

        <div className="h-4 w-px bg-gray-300"></div>

        {/* Main Departments Row */}
        <div className="flex justify-center gap-4">
          {["Marketing", "Sales", "Operations", "R&D", "Finance"].map((deptName) => (
            <div key={deptName} className="flex flex-col items-center">
              <DepartmentButton
                deptName={deptName}
                onClick={() => setSelectedDept(departments.find(d => d.name === deptName) || null)}
                isSelected={selectedDept?.name === deptName}
              />

              {/* Sub-roles for specific departments */}
              {(deptName === "Marketing" || deptName === "Sales" || deptName === "Operations" || deptName === "R&D") && (
                <>
                  <div className="h-4 w-px bg-gray-300"></div>
                  <div className="flex gap-4">
                    {deptName === "Marketing" && departments[2].roles.map((role, index) => (
                      <RoleButton
                        key={role.title}
                        title={role.title}
                        onClick={() => setSelectedRole(departments[2].roles[index])}
                      />
                    ))}
                    {deptName === "Sales" && departments[3].roles.map((role, index) => (
                      <RoleButton
                        key={role.title}
                        title={role.title}
                        onClick={() => setSelectedRole(departments[3].roles[index])}
                      />
                    ))}
                    {deptName === "Operations" && departments[4].roles.map((role, index) => (
                      <RoleButton
                        key={role.title}
                        title={role.title}
                        onClick={() => setSelectedRole(departments[4].roles[index])}
                      />
                    ))}
                    {deptName === "R&D" && departments[5].roles.map((role, index) => (
                      <RoleButton
                        key={role.title}
                        title={role.title}
                        onClick={() => setSelectedRole(departments[5].roles[index])}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <DepartmentDialog
        department={selectedDept}
        onOpenChange={(open) => !open && setSelectedDept(null)}
      />

      <RoleDialog
        role={selectedRole}
        onOpenChange={(open) => !open && setSelectedRole(null)}
      />
    </div>
  );
};

export default OrgChart;
